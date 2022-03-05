import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { PlayerRoute } from 'views/Player/Routes';

// import AuthenticatedRouteWrapper from './layouts/AuthenticatedRouteWrapper';
import PublicRouteWrapper from './layouts/PublicRouteWrapper';
import { IRoute } from './common/types';

const Routes = () => {
  // const { role } = useSelector(({ Auth }: RootState) => Auth.user);

  const PublicRoutes = [PlayerRoute];

  return (
    <Switch>
      {PublicRoutes.map((route: IRoute, index: number) => (
        <PublicRouteWrapper key={`public-route-wrapper-${index}`} {...route} />
      ))}
    </Switch>
  );
};

export default Routes;
