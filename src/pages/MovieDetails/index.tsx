import SendReview from 'components/SendReview';
import './styles.css';

const MovieDetails = () => {
  return (
    <>
      <div className="movie-container">
        <div className="movie-title">
          <h1>Movie Title</h1>
          <h1>id: 1</h1>
        </div>
        <div className="movie-send-review">
          <SendReview />
        </div>
        <div className="review-list">
          <h6>componente review</h6>
          <h6>componente review</h6>
          <h6>componente review</h6>
          <h6>componente review</h6>
          <h6>componente review</h6>
          <h6>componente review</h6>
          <h6>componente review</h6>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
