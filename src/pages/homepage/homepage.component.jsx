import React from 'react';
import { useLocation } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';

const HomePage = (props) => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;

// useLocation - {
//     "pathname": "/",
//     "search": "",
//     "hash": "",
//     "state": null,
//     "key": "default"
// }
