import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Spinner } from "components";

const Products = lazy(() => import("pages/products/products"));
const ProductDetails = lazy(() => import("pages/products/product-details"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/produtos/:id" exact component={ProductDetails} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
