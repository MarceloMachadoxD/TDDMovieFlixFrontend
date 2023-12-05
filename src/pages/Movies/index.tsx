import { Link } from 'react-router-dom';
import './styles.css';

const Movies = () => {
  return (
    <>
      <div className="movies-container">
        <div className="movies-title">
          <h1>Tela listagem de filmes</h1>
        </div>
        <div className="movies-list">
          <ul>
            <li>
              <Link to={'/movies/:movieId'}>Acessar /movies/1</Link>
            </li>
            <li>
              <Link to={'/movies/:movieId'}>Acessar /movies/2</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Movies;
