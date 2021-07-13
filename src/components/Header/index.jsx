import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    height: 55,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.8rem',
    padding: '0 24px',
    background: '#fff',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <h1>Forgotten Flix</h1>
    </header>
  );
};

export default Header;
