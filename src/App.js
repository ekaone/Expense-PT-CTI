import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { 
  Landing,
  SignIn,
  SignUp,
  ForgotPassword,
  Dashboard 
} from './views'

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/forgotpassword" component={ForgotPassword} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
