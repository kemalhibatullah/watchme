import "assets/css/app.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from "pages/HomePage";
import DetailProduct from "pages/DetailProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/categories/:idc" component={DetailProduct} />
      </Router>
    </div>
  );
}

export default App;
