import "assets/css/app.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from "pages/HomePage";
import DetailProduct from "pages/DetailProduct";
import Cart from "pages/Cart";
import SuccessOrder from "pages/SuccessOrder";
import ErrorPage from "pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories/:idc" component={DetailProduct} />
          <Route path="/cart" component={Cart} />
          <Route path="/order-success" component={SuccessOrder} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
