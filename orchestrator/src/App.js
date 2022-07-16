import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Home from './Pages/Home';
import MicroFrontend from './utils/MicroFrontend';
//import About from './About';

const {
  REACT_APP_LIST_CATS_HOST: CatsHost,
  REACT_APP_CAT_DETAIL_HOST: CatTwoHost,
} = process.env;

const PageOne = ({ history }) => {
  return <MicroFrontend history={history} host={CatsHost} name='Pokemons' />;
};

const PageTwo = ({ history }) => {
  return <MicroFrontend history={history} host={CatTwoHost} name='PokemonDetails' />;
};

/* const Restaurant = ({ history }) => (
  <MicroFrontend history={history} host={restaurantHost} name='Restaurant' />
);
const Random = () => <Navigate to={`/restaurant/${getRandomRestaurantId()}`} />; */

const App = () => (
  <BrowserRouter>
    <>
      <AppHeader />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cats' element={<PageOne />} />
        <Route exact path='/catsTwo' element={<PageTwo />} />
      </Routes>
    </>
  </BrowserRouter>
);

export default App;
