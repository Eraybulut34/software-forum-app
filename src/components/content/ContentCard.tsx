import React from "react";


function ContentCard(props: any) {
  const { title, description, image } = props;

  return (
    <div className="content-card">
      <img src={image} alt={title} />
      <div className="content-card__text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ContentCard;