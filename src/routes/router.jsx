import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Spinner } from "components";

const Products = lazy(() => import("pages/products/products"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact component={Products} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
