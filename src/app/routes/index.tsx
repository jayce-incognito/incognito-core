import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import routesMap, { IRoute } from './routesMap';
import './reset.scss';
import './animate.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrivateRoute from 'src/core/components/privateRoute';
import { Styled } from './index.styled';

interface IProps {}

const App = (props: IProps) => {
  return (
    <Styled className='app'>
      <Switch>
        {routesMap.map((route: IRoute) =>
          route.private ? (
            <PrivateRoute {...route} key={route.path} />
          ) : (
            <Route {...route}  key={route.path} />
          )
        )}
      </Switch>
    </Styled>
  );
};

export default App;
