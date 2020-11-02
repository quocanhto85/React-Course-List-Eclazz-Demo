import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap-css-only/css/bootstrap.min.css";
import { Auth0Provider } from "authen/auth0Service";
import config from "authen/auth0Config.json";
import { Spinner } from "react-bootstrap";
const LazyApp = lazy(() => import("./App"))

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin + process.env.REACT_APP_PUBLIC_PATH}>
    <Suspense fallback={<Spinner />}>
      <LazyApp />
    </Suspense>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
