import { Button } from 'components/Button';
import './styles.css';

const buttonLabel = 'FAZER LOGIN';

export const LoginCard = () => {
  return (
    <>
      <div className="login-card">
        <h1>LOGIN</h1>
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <Button buttonLabel={buttonLabel} />
        </form>
      </div>
    </>
  );
};
