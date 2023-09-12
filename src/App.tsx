import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'; // Importa el Header
import Footer from './components/Footer'; // Importa el Footer
import MainPage from './components/MainPage';
import CarouselPage from './components/CarouselPage';
import './App.css'; // Importa los estilos de App.css
 
const App: React.FC = () => {
  return (
    <Router>
      <Header /> 
      <Switch>
        <Route path="/carousel">
          <CarouselPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      <Footer /> 
    </Router>
  );
};

export default App;

