import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Homepage from "./homepage/index";
import Destination from "./homepage/Destination";
import Detail from "./homepage/Detail";
import RequestToBook from "./homepage/RequestToBook";
import Booking from "./homepage/Booking";
import Wishlist from "./homepage/Wishlist";
import Faq from "./homepage/Faq";
import Contact from "./homepage/Contact";
import Personal from "./homepage/Profile/Personal";
import LoginSecurity from "./homepage/Profile/LoginSecurity";
import Payment from "./homepage/Profile/Payment";
import Notification from "./homepage/Profile/Notification";
import Privacy from "./homepage/Profile/Privacy";

const Index = (props) => {
  return (
    <Fragment>
      <Router forceRefresh>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/destination">
            <Destination />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
          <Route exact path="/request-to-book">
            <RequestToBook />
          </Route>
          <Route exact path="/booking">
            <Booking />
          </Route>
          <Route exact path="/wishlist">
            <Wishlist />
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/profile/personal">
            <Personal />
          </Route>
          <Route exact path="/profile/security">
            <LoginSecurity />
          </Route>
          <Route exact path="/profile/payment">
            <Payment />
          </Route>
          <Route exact path="/profile/notification">
            <Notification />
          </Route>
          <Route exact path="/profile/privacy">
            <Privacy />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Index;
