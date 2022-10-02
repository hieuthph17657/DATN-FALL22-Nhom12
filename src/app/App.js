import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import home from '../pages/home';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import checkout from '../pages/checkout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Navbar />
        <Switch>
          <Route path="/checkout" component={checkout} />
          <Route path="/" component={home} /> 
        </Switch>
        <NewsLetter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
