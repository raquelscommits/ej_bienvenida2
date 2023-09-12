import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <main>
      <div className="content">
        <h2>Los 100</h2>
        <p>Los 100 ​ es una serie de televisión estadounidense de drama y ciencia ficción postapocalíptica que se estrenó el 19 de marzo de 2014 en The CW. La serie, desarrollada por Jason Rothenberg, se basa vagamente en la serie de novelas del mismo nombre de Kass Morgan.</p>
        <img src="https://i.imgur.com/eDCfhRt.jpg" alt="Serie" />
      </div>
      <Link to="/carousel">
        <button id="gotoPage2">Ver Galería</button>
      </Link>
    </main>
  );
}

export default MainPage;