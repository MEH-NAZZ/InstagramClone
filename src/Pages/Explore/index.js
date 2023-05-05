import React from "react";
import "../../Styles/explore.css";
import { Card } from "react-bootstrap";
import Masonry from "react-masonry-css";

import Img1 from "../../Assets/images/post1.jpg";
import Img2 from "../../Assets/images/post2.jpg";
import Img3 from "../../Assets/images/img1.jpg";
import Img4 from "../../Assets/images/img8.jpg";
import Img5 from "../../Assets/images/img2.jpg";
import Img6 from "../../Assets/images/img7.jpg";
import Img7 from "../../Assets/images/img3.avif";
import Img8 from "../../Assets/images/img4.jpg";

const cardData = [
  {
    image: Img1,
    likes: 400,
    comment: 100,
  },

  {
    image: Img3,
    likes: 400,
    comment: 100,
  },
  {
    image: Img2,
    likes: 400,
    comment: 100,
  },

  {
    image: Img4,
    likes: 400,
    comment: 100,
  },
  {
    image: Img5,
    likes: 400,
    comment: 100,
  },
  {
    image: Img7,
    likes: 400,
    comment: 100,
  },
  {
    image: Img6,
    likes: 400,
    comment: 100,
  },

  {
    image: Img1,
    likes: 400,
    comment: 100,
  },
  {
    image: Img8,
    likes: 400,
    comment: 100,
  },

  {
    image: Img5,
    likes: 400,
    comment: 100,
  },
  {
    image: Img7,
    likes: 400,
    comment: 100,
  },
  {
    image: Img6,
    likes: 400,
    comment: 100,
  },

  {
    image: Img1,
    likes: 400,
    comment: 100,
  },
  {
    image: Img8,
    likes: 400,
    comment: 100,
  },
  {
    image: Img1,
    likes: 400,
    comment: 100,
  },

  {
    image: Img3,
    likes: 400,
    comment: 100,
  },
  {
    image: Img2,
    likes: 400,
    comment: 100,
  },

  {
    image: Img4,
    likes: 400,
    comment: 100,
  },
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const Explore = () => {
  return (
    <>
      <div className="explore">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {cardData.map((card, index) => (
            <Card key={index} className="mb-4">
              <Card.Img variant="top" src={card.image} />
              <div className="overlay d-flex justify-content-center align-item-center">
                <div className="div mx-1">
                  <p>{card.likes}</p>
                  <span></span>
                </div>
                <div className="div mx-1">
                  <p>{card.comment}</p>
                  <span></span>
                </div>
              </div>
            </Card>
          ))}
        </Masonry>
      </div>
    </>
  );
};

export default Explore;
// ****************************
