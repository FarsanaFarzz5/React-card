// BannerCardItem.jsx
import React from 'react';



const BannerCardItem = (props) => {
  const { bannerCard } = props;
  const { headerText, description, className } = bannerCard; // Correct property names

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1> {/* Use correct property name */}
        <p className="para">{description}</p>
        <button className="show-more-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  );
};

export default BannerCardItem;
