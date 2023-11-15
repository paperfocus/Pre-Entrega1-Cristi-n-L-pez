
import React from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
const App = () => {
  return (
    <div>
        <div>
          <NavBar />
          </div> 
          <div className='espacio-interior' style={{ padding: '1em' /* 1em será igual a 16px. */ }}></div>
        
      <ItemListContainer greeting="¡Hola, bienvenido a mi primera aplicación!" />
    </div>

    
  );
}

export default App;
