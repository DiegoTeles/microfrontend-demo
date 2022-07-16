import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPokemonData, getPokemons } from '../../services/http';

const Dashboard = (props) => {
  const [pokemons, setPokemons] = useState([0, 1, 2, 3]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(6, 10 * 1);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      console.log('results :>> ', results);
      setPokemons(results);
    } catch (err) {
      console.log('err :>> ', err);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  console.log('pokemons :>> ', pokemons);

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
        <h1> Página 1</h1>
        <img
          src='https://c.tenor.com/EBCVBM4P6F4AAAAd/cat-fashion.gif'
          alt=''
        />
      </Container>
    </>
  );
};

export default Dashboard;
