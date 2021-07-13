import { createUseStyles } from 'react-jss';
import Header from './components/Header';
import Router from './components/Router';

const useStyles = createUseStyles((theme) => ({
  '@global': {
    body: {
      margin: 0,
      background: 'rgb(240, 240, 240)',
    },
    html: {
      fontFamily: 'Avenir',
      fontSize: 16,
      color: 'rgba(0, 0, 0, 0.8)',
    },
    h1: {
      margin: 0,
    },
    h2: {
      margin: 0,
      color: 'rgba(0, 0, 0, 0.5)',
      fontSize: '1.1rem',
      fontWeight: 300,
      textTransform: 'uppercase',
    },
  },
}));

function App() {
  useStyles();
  return (
    <div className='App'>
      <Header />
      <Router />
    </div>
  );
}

export default App;
