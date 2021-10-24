import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';


function App() {
  return (
    <div>

      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/product/add">
            <AddProduct />
          </Route>
          <Route path="/products/update/:id">
            <UpdateProduct></UpdateProduct>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
