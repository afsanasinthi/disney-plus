import React, { useEffect } from 'react';
import styled from 'styled-components';
import db from '../firebase';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';

function Home() {
  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        console.log(doc.data());
        return { id: doc.id, ...doc.data() };
      });
      console.log(tempMovies);
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    background-image: url('/images/home-background.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
