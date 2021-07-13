import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import axios from 'axios';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    maxWidth: 1080,
    margin: '90px auto 0',
  },
  image: {
    marginRight: 24,
    borderRadius: 8,
  },
  list: {
    listStyleType: 'none',
    margin: '18px 0 0 0',
    padding: 0,
  },
  listItem: {
    margin: 0,
  },
  link: {
    textDecoration: 'none',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    padding: '8px 24px',
    borderRadius: '18px',
    color: 'rgba(0, 0, 0, 0.5)',
  },
}));

const ResultsContainer = () => {
  const classes = useStyles();
  const { titleId } = useParams();
  const [title, setTitle] = useState({
    result: { Title: '', Poster: '', Plot: '', Runtime: '' },
    providers: [],
  });

  useEffect(() => {
    const getTitle = async () => {
      const { data } = await axios.get(`/titles/${titleId}`);
      setTitle(data);
    };
    getTitle();
  }, []);
  return (
    <main>
      <div className={classes.root}>
        <img className={classes.image} src={title.result.Poster} />
        <div>
          <h1>{title.result.Title}</h1>
          <h2>
            {title.result.Runtime} | {title.result.Released}
          </h2>
          <p>{title.result.Plot}</p>
          {!!title.providers.length && (
            <div>
              <h2>Streaming On</h2>
              <ul className={classes.list}>
                {title.providers.map((provider) => (
                  <li className={classes.listItem}>
                    <a
                      className={classes.link}
                      target='_blank'
                      href={provider.link}
                    >
                      {provider.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ResultsContainer;
