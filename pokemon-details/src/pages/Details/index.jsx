import React from 'react';
import styled from 'styled-components';

const Details = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 89vh;
  `;

  return (
    <>
      <Container>
        <h1> Página 2</h1>
        <img
          src='https://c.tenor.com/s0e4H0pKwOcAAAAd/meoware-csgo.gif'
          alt=''
        />
      </Container>
    </>
  );
};

export default Details;
