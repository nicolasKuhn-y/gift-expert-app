import React from "react";
import PropTypes from "prop-types";

export const GiftGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInUp">
      
      <img src={url} alt={title} />
      <p className="card__p">{title}</p>
    </div>
  );
};

GiftGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
