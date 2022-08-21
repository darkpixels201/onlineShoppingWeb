import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Furniture from './pages/Furniture'
import Fashion from './pages/Fashion'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import MainProducts from "./Products/MainProducts";
import ProductDetailScreen from "./pages/ProductDetailScreen";
import ProductDescriptionInfo from "./components/ProductDetail/ProductDescriptionInfo";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router >
      {/* <MainProducts /> */}
      {/* <ProductDetailScreen /> */}
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/furniture" component={Furniture}/>
      <Route path="/fashion" component={Fashion}/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/product/:id" component={ProductDetailScreen} />
      <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
