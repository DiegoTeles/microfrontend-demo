import React, { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import Details from './pages/Details';

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => {
  return (
    <>
      <HistoryRouter history={history}>
        <>
          <Details />
          {/*   <Routes>
            <Route exact path='/catsTwo' element={<Details />} />
          </Routes> */}
        </>
      </HistoryRouter>
    </>
  );
};

export default App;
