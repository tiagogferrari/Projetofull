import './App.css';
import React from 'react';
import Home from './pages/Home';
import Insert from './pages/Insert';
import Login from './pages/Login';
import Navigation from './pages/Navigation'
import { useState } from 'react';

function App() {

  const [pagina, setPagina] = useState('home')
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarInsert, setMostrarInsert] = useState(false);

  let conteudo

  const fecharPopUp = () => {
    setMostrarLogin(false);
    setMostrarInsert(false);
    setPagina('home'); // Adicionando isso para retornar à página inicial ao fechar o pop-up
  };

  if (pagina === 'home') {
    conteudo = <Home onPageChange={setPagina} />;
  } else if (pagina === 'insert' && mostrarInsert) {
    conteudo = (
      <>
        <div className="overlay" onClick={fecharPopUp} />
        <div className="popup">
          <Insert onPageChange={setPagina} />
        </div>
      </>
    );
  } else if (pagina === 'login' && mostrarLogin) {
    conteudo = (
      <>
        <div className="overlay" onClick={fecharPopUp} />
        <div className="popup">
          <Login onPageChange={setPagina} />
        </div>
      </>
    );
  }

  return (
    <div className='divPrinc'>
      <Navigation onPageChange={setPagina} setMostrarLogin={setMostrarLogin} setMostrarInsert={setMostrarInsert} />
      <main>
        <div>
          {conteudo}
        </div>
      </main>
    </div>
  )
}

export default App;