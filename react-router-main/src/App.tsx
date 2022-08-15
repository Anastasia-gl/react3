import './App.css';
import { Link, Outlet, Route, Routes} from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

type Product = {name: string};

function App() {
  return (
    <div>
    <h1>My Shop</h1>

    <Routes>
        <Route path="/" element={<LayoutComponent />}></Route>
        <Route path="katalog" element={<KatalogComponent />} ></Route>
        <Route path="basket" element={<BasketComponent />} ></Route>
        <Route path="/about/1" element={<AboutComponent />}></Route>
    </Routes>

  </div>
  );
}


function LayoutComponent() {
  return (
    <div>
      Nav
      <nav>
        <ul>
          <li><Link to="katalog">Product</Link></li>
          <li><Link to="basket">Basket</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
      <h1>Hello!</h1>
    </div>
   
  );
}

const KatalogComponent= () => {  
  return (
    <div>
      <h2>Home</h2>
      <li className='linkProduct'><Link to="/">Back</Link></li>
      <li className='linkProduct'><Link to="/basket">Basket</Link></li>
      <Card className='firstProduct'>
          <img className='p1' src="https://static.wixstatic.com/media/e08af0_403c16ccff894ccebcd6a85df7e2ef0e~mv2_d_1200_1200_s_2.jpg/v1/fill/w_1200,h_1200,al_c,q_85/e08af0_403c16ccff894ccebcd6a85df7e2ef0e~mv2_d_1200_1200_s_2.jpg" alt="" />Pixi
          <li className='linkProduct'><Link to="/about/1">About</Link></li>
          <Button variant="primary btnFirst" type="submit" onClick={Click}>Add To Basket</Button>
      </Card>
    </div>
  );
}

const BasketComponent = () => {
  return (
    <div>
      <h2>Basket</h2>
      <p>{localStorage.getItem("App_localStorage1")}</p>
    </div>
  );
}

const AboutComponent = () => {
  return (
    <div>
      <h2>About</h2>
      <li className='linkProduct'><Link to="/katalog">Back</Link></li>
      <li className='linkProduct'><Link to="/basket">Basket</Link></li>
      <Card className='aboutProduct'>
        <div className='container'>
         <img className='p1' src="https://static.wixstatic.com/media/e08af0_403c16ccff894ccebcd6a85df7e2ef0e~mv2_d_1200_1200_s_2.jpg/v1/fill/w_1200,h_1200,al_c,q_85/e08af0_403c16ccff894ccebcd6a85df7e2ef0e~mv2_d_1200_1200_s_2.jpg" alt="" />    
         <div>
          <p>Tonic бренда PIXI с витамином С и феруловой кислотой, обладает омолаживающими и осветляющими свойствами, освежает кожу, придает сияние, выравнивает цвет лица, увлажняет и защищает от свободных радикалов, убирает ощущение стянутости после умывания, смягчает кожу, выравнивает текстуру.</p>
          <Button variant="primary btnFirst" type="submit" onClick={Click}>Add To Basket</Button>    
        </div>
        </div>
      </Card>
    </div>
  );
}

function Click(){
  localStorage.setItem("App_localStorage1", JSON.stringify({name: "Pixi"}));
}
export default App;
