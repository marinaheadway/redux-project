
import './App.css';
import Cart from './Components/Cart/Cart';
import Dish from './Components/DishesComponents/Dish';
import AllCategories from './Components/Filter/AllCategories';

function App() {
  return (
    <div className="App">
      <div className='block'>
          <AllCategories/>
      <Cart/>
      </div>
      <div className='block'>
<Dish/>
      </div>
    </div>
  );
}

export default App;
