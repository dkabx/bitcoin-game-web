import React, { useEffect, useState } from 'react';
import { Card, Typography } from '@material-ui/core';
import { get } from 'lodash';
import { Auth } from 'aws-amplify';

import { Game, Button, Box } from 'components';
import { getBitcoinPrice, updateScore, getScore } from 'services';

import styles from './styles';

const Player = () => {
  const classes = styles();

  const [btPrice, setbtPrice] = useState<number>(0);
  const [currentUser, setCurrentUser] = useState<Record<string, unknown>>({});
  const [score, setScore] = useState<number>(0);

  const updateBitcoinPrice = () => {
    getBitcoinPrice().then((btData) => {
      setbtPrice(get(btData, 'data.data.market_data.price_usd').toFixed(2));
    });
  };

  useEffect(() => {
    Auth.currentAuthenticatedUser().then(setCurrentUser);
    updateBitcoinPrice();
    setInterval(updateBitcoinPrice, 5000);
  }, []);

  useEffect(() => {
    if (get(currentUser, 'attributes.email')) {
      getScore({ email: get(currentUser, 'attributes.email') }).then((res) => {
        setScore(get(res, 'data.score') || 0);
      });
    }
  }, [currentUser]);

  const onResult = (result: number) => {
    setScore(score + result);
    updateScore({
      email: get(currentUser, 'attributes.email'),
      score: result,
    }).catch(() => setScore(score - result));
  };

  return (
    <>
      <Box className={classes.logoutbtnBox}>
        <Button className={classes.logoutbtn} name="Logout" onClick={() => Auth.signOut()} />
      </Box>
    
      <Card variant="outlined" className={classes.playerWrapper}>
        <Typography variant="h4" align="center" className={classes.btprice}>
          Bitcoin Price: {btPrice}
        </Typography>
        <Typography variant="h5">
          Name: {get(currentUser, 'attributes.email')}
        </Typography>
        <Typography variant="h5">Score: {score}</Typography>
      </Card>

      <Game onResult={onResult} />
    </>
  );
};
export default Player;
