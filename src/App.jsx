import { useContext,  } from 'react';

import './App.css';
import AuthContext from './context/AuthContext';

function App() {
 
  const {name} = useContext(AuthContext)

  return (
    <>
     
      
        <p>{name}</p>
      
     
    </>
  );
}

export default App;




