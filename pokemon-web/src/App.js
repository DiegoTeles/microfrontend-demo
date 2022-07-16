import React, { useEffect, useState } from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import Service from './services';
import * as S from './components/Loading';
import Dashboard from './pages/Dashboard';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  background: red;
`;

const defaultHistory = createBrowserHistory();

const App = ({ history }) => {
  return (
    <>
      <HistoryRouter history={history || defaultHistory}>
        <>
          <Dashboard />
        </>
      </HistoryRouter>
    </>
  );
};

export default App;
