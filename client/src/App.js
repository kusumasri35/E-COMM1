import "./App.css"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./components/Home";
import Products from "./components/Products";
import { useEffect } from "react";
import LoginProtected from "./components/LoginProtected";
import Payment from "./components/Payment";
import ChangePassword from "./components/ChangePassword";
import Admin from "./components/Admin";
import Contact from "./components/Contact";


function App() {

  

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={Admin} />
        <LoginProtected exact path="/products" component={Products} />
        <LoginProtected exact path="/payment" component={Payment} />
        <LoginProtected exact path="/changePassword" component={ChangePassword} />
        <LoginProtected exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
