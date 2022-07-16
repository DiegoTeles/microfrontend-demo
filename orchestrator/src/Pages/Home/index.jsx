import React from 'react';
import * as S from './styles';
const Home = () => (
  <S.HomeWrapper>
    <S.ContentWrapper>
      <S.ImgWrapper src='https://s3-sa-east-1.amazonaws.com/thedevconf/photos/df5ca12cf2c29547ed9ebfff9fbbd6abaa4e98d4.jpg' alt='' />
      <p>
        Tech manager na Sami Saude, Formado em Análise de Sistemas, Mozillian
        Member pela Mozilla, com experiencias em desenvolvimento NodeJs, IoT,
        React e IA, produz conteúdos técnicos, é palestrante e co-organizador
        das comunidades Unicorn Tech.
      </p>
    </S.ContentWrapper>
  </S.HomeWrapper>
);

export default Home;
