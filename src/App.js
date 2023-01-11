import 'bootstrap/dist/css/bootstrap.min.css';
import './Resets/_resets.scss';
import './Resets/_variables.scss';
import Header from './Components/Header/header';
import Main from './Components/Main/Main';
import React, {useEffect, useState} from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import './App.scss';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {setLoading(false)}, 0)
  }, [])

  return (
    <>
      { 
        loading ?

        <div className='loading'>
          <BeatLoader 
            color={'#ffffff'}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
      </div>

      :
      <div className='App'>
        <div className='App-components'>
          <div className='header'>
            <Header />
          </div>
          <div className='main'>
            <Main />
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default App;
