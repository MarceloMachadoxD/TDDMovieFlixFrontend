import './styles.css';

import Star from 'assets/images/star.png';

const Review = () => {
  let name = 'Maria Silva';
  let review =
    'Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.';
  return (
    <div className="review-container">
      <div className="review-title">
        <div className="review-star">
          <img src={Star} alt="Star" />
        </div>
        <div className="reviewer-name">{name}</div>
      </div>
      <div className="review-text">
        <span>{review}</span>
      </div>
    </div>
  );
};

export default Review;
