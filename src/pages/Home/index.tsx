import { Link } from 'react-router-dom';

import './styles.css';
import { LoginCard } from 'components/LoginCard';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Link to="/">
          <LoginCard />
        </Link>
      </div>
    </>
  );
};

export default Home;
