import { LINK_URL, LOGGED } from "../constants";
import {
  Route,
  Redirect,
} from "react-router-dom";

export const PrivateRoute = ({children, ...rest}) => {
  let logged = localStorage.getItem(LOGGED);
  return (
    <Route
      {...rest}
      render={({ location }) =>
      logged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: LINK_URL.login,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
