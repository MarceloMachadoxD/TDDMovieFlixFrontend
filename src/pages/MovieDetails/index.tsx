import SendReview from 'components/SendReview';
import './styles.css';
import Review from 'components/Review';

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
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
