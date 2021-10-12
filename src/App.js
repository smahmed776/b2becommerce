import { Switch, Route } from 'react-router-dom'
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Pages/Home/Main/Main';
import Products from './Components/Pages/Product/Products';


function App() {
  return (
    <div className="bg-light">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
