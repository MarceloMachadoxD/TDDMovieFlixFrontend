import { Button } from 'components/Button';
import './styles.css';

const SendReview = () => {
  return (
    <div className="review-form">
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Deixe sua avaliação aqui"
          required
        />
        <Button buttonLabel="SALVAR AVALIAÇÃO" />
      </form>
    </div>
  );
};

export default SendReview;
