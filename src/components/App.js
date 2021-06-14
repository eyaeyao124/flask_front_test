import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage"
import NavBar from "./NavBar/NavBar"
import Footer from "./Footer/Footer"
import product from './Product/Product';


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/category/:item" component={product} />
          <Route exact path="/cart" component={LandingPage} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
