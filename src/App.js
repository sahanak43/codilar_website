import React from 'react';
import './App.css';
import NavBar from './Components/Nav/navbar';
//import Graphql from './Components/Graphql/Graphql1';
import Footer from './Components/Footer/footer';
import Demo from './Components/Demo/demo'; 
import Main from './Components/Main/main';


function App() {
  return (
  <div className='App'>
{/*<Graphql/>*/}
    <NavBar/>
    <Footer/>
    <Demo/>
    <Main/>
  </div>
  )
}
     


export default App;
