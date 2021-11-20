import React from 'react';
import { useLocation } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';



const HomePage = (props) => {
  const a = useLocation();
  console.log(a);
  return (
<div className='homepage'>
    <Directory />
  </div>
  )
  
  };

export default HomePage;

// useLocation - {
//     "pathname": "/",
//     "search": "",
//     "hash": "",
//     "state": null,
//     "key": "default"
// }