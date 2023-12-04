import { Link } from 'react-router-dom';

import { ReactComponent as MainImage } from 'assets/images/Desenho.svg';

import './styles.css';
import { LoginCard } from 'components/LoginCard';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-banner">
          <h1>Avalie Filmes</h1>
          <p>Diga o que você achou do seu filme favorito</p>
          <MainImage />
        </div>
        <LoginCard />
      </div>
    </>
  );
};

export default Home;
