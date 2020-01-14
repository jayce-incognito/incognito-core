import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from 'src/core/components/auth/auth.selector';
import { IRoute } from 'src/app/routes/routesMap';

const PrivateRoute = (props: IRoute) => {
  const { component: Component, ...rest } = props;
  const { isAuthen } = useSelector(authSelector);
  return (
    <Route {...rest}>
      {isAuthen ? <Component {...props} /> : <Redirect to='/sign-in' />}
    </Route>
  );
};

export default PrivateRoute;
