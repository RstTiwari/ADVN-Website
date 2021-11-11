import React from 'react';
import Navbar from './Navbar';
import Home from './Home'



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cards from './Cards';
import CardItem from './CardItem';
import Footer from './Footer';



function App() {
  return (
    <>
     
      <Router>
      <Navbar />
        <Switch>
      
        <Route to='/home'>
        
        <Home />
        <Cards />
        <Footer />
       
        </Route>
        <Route >
      
       
        </Route>     
        </Switch>
      </Router>
    </>
  );
}

export default App;
