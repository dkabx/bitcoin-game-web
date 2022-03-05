import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core';
import { get } from 'lodash';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import { GAME_TIMEOUT_VALUE } from 'common/utils/constants';
import { Button } from 'components';
import { getBitcoinPrice } from 'services';

import styles from './styles';

type Props = {
  onResult: any;
};
const Game = ({ onResult }: Props) => {
  const classes = styles();
  const [inProgess, setInprogress] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);
  const [bitcoinPriceOnStart, setBitcoinPriceOnStart] = useState<number>(0);
  const [bitcoinPriceOnInterval, setBitcoinPriceOnInterval] =
    useState<number>(0);
  const [result, setResult] = useState<string>('');

  let interval: any;

  const updateGameIntervalPrice = () => {
    getBitcoinPrice().then((btData) => {
      setBitcoinPriceOnInterval(get(btData, 'data.data.market_data.price_usd'));
    });
  };

  const resetGame = () => {
    setBitcoinPriceOnStart(0);
    setBitcoinPriceOnInterval(0);
    setTimer(0);
    setResult('');
  };

  const onClickGameBtn = async (action: string) => {
    resetGame();
    let count = 0;
    const btData = await getBitcoinPrice();
    const startingPrice = parseFloat(
      get(btData, 'data.data.market_data.price_usd'),
    );
    setBitcoinPriceOnStart(startingPrice);
    setInprogress(true);

    interval = setInterval(async () => {
      if (count === GAME_TIMEOUT_VALUE) {
        const btData = await getBitcoinPrice();
        const btPrice = parseFloat(
          get(btData, 'data.data.market_data.price_usd'),
        );
        clearInterval(interval);
        setInprogress(false);
        if (action === 'UP' && startingPrice < btPrice) {
          setResult('WON');
          onResult(1);
        } else if (action === 'DOWN' && startingPrice > btPrice) {
          setResult('WON');
          onResult(1);
        } else {
          setResult('LOST');
          onResult(-1);
        }
      }
      if (count % 2 === 0) {
        updateGameIntervalPrice();
      }
      setTimer((time) => time + 1);
      count++;
    }, 1000);
  };

  const getColor = () => {
    return bitcoinPriceOnInterval > bitcoinPriceOnStart ? 'green' : 'red';
  };

  return (
    <Card variant="outlined" className={classes.gameWrapper}>
      <CardContent>
        <Box className={classes.contentWrapper}>
          {inProgess && (
            <Typography variant="h4" align="center">
              Timer: {timer}
            </Typography>
          )}
          <Typography variant="h6">
            Price on Start{' '}
            <span
              className={classes.prices}
              style={{ color: '#086ad1', marginBottom: 10 }}
            >
              <AttachMoneyIcon /> {bitcoinPriceOnStart || '--'}
            </span>
          </Typography>

          <Typography variant="h6">
            Current Price{' '}
            <span className={classes.prices} style={{ color: getColor() }}>
              <AttachMoneyIcon />
              {bitcoinPriceOnInterval || '--'}
            </span>
          </Typography>
        </Box>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <Button
          onClick={() => onClickGameBtn('UP')}
          className={classes.upbtn}
          name="HIGHER"
          disabled={inProgess}
          endIcon={<ArrowUpwardIcon />}
        />
        {result === 'WON' && (
          <Typography variant="h5" style={{ color: 'green' }}>
            You Won the game
          </Typography>
        )}
        {result === 'LOST' && (
          <Typography variant="h5" style={{ color: 'red' }}>
            You Lost the game
          </Typography>
        )}
        <Button
          onClick={() => onClickGameBtn('DOWN')}
          endIcon={<ArrowDownwardIcon />}
          disabled={inProgess}
          className={classes.downbtn}
          name="LOWER"
        />
      </CardActions>
    </Card>
  );
};

export default Game;
