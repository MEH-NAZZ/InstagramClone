import React, { useRef, useState } from "react";
import "../../Styles/home.css";
import { ListGroup } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// components
import Story from "../../Components/story";
import Posts from "../../Components/post";
import Suggestions from "./Suggestion";
import Footer from "../../Components/footer";

// story imagess
import StoryImg1 from "../../Assets/images/story1.jpg";
import StoryImg2 from "../../Assets/images/story2.jpg";
import NextIcon from "../../Assets/images/right.svg";
import leftIcon from "../../Assets/images/left.svg";

// posts images
import Profile from "../../Assets/images/story1.jpg";
import postImg1 from "../../Assets/images/post1.jpg";
import postImg2 from "../../Assets/images/post2.jpg";

const storys = [
  {
    customer: {
      userName: "Soma",
      profileUrl: StoryImg1,
    },
    story: StoryImg1,
  },
  {
    customer: {
      userName: "mehnaz",
      profileUrl: StoryImg2,
    },
    story: StoryImg2,
  },
  {
    customer: {
      userName: "Soma",
      profileUrl: StoryImg1,
    },
    story: StoryImg1,
  },
  {
    customer: {
      userName: "mehnaz",
      profileUrl: StoryImg2,
    },
    story: StoryImg2,
  },
  {
    customer: {
      userName: "Soma",
      profileUrl: StoryImg1,
    },
    story: StoryImg1,
  },
  {
    customer: {
      userName: "mehnaz",
      profileUrl: StoryImg2,
    },
    story: StoryImg2,
  },
  {
    customer: {
      userName: "Soma",
      profileUrl: StoryImg1,
    },
    story: StoryImg1,
  },
  {
    customer: {
      userName: "mehnaz",
      profileUrl: StoryImg2,
    },
    story: StoryImg2,
  },
  {
    customer: {
      userName: "Soma",
      profileUrl: StoryImg1,
    },
    story: StoryImg1,
  },
  {
    customer: {
      userName: "mehnaz",
      profileUrl: StoryImg2,
    },
    story: StoryImg2,
  },
  {
    customer: {
      userName: "Soma",
      profileUrl: StoryImg1,
    },
    story: StoryImg1,
  },
  {
    customer: {
      userName: "mehnaz",
      profileUrl: StoryImg2,
    },
    story: StoryImg2,
  },
  {
    customer: {
      userName: "Soma",
      profileUrl: StoryImg1,
    },
    story: StoryImg1,
  },
  {
    customer: {
      userName: "mehnaz",
      profileUrl: StoryImg2,
    },
    story: StoryImg2,
  },
  {
    customer: {
      userName: "Soma",
      profileUrl: StoryImg1,
    },
    story: StoryImg1,
  },
  {
    customer: {
      userName: "mehnaz",
      profileUrl: StoryImg2,
    },
    story: StoryImg2,
  },
  {
    customer: {
      userName: "Soma",
      profileUrl: StoryImg1,
    },
    story: StoryImg1,
  },
  {
    customer: {
      userName: "mehnaz",
      profileUrl: StoryImg2,
    },
    story: StoryImg2,
  },
  {
    customer: {
      userName: "Soma",
      profileUrl: StoryImg1,
    },
    story: StoryImg1,
  },
  {
    customer: {
      userName: "mehnaz",
      profileUrl: StoryImg2,
    },
    story: StoryImg2,
  },
];

const posts = [
  {
    customer: {
      profileUrl: Profile,
      userName: "educative",
    },
    postUrl: postImg1,
    date: "2022-04-19T12:59-0500",
    likes: 2333,
    postDescription: "smmmmm",
    location: "",
    comments: [
      {
        name: "soma",
        comment: "shhhhhhhhh shssss",
      },
      {
        name: "som",
        comment: "shhhhhhhhh shssss eeeee",
      },
    ],
  },
  {
    customer: {
      profileUrl: postImg2,
      userName: "Jhon",
    },
    postUrl: postImg2,
    date: "2023-04-19T12:59-0500",
    likes: 100,
    postDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, quas.",
    location: "CodeArena",
    comments: [
      {
        name: "soma",
        comment: "shhhhhhhhh shssss",
      },
      {
        name: "som",
        comment: "shhhhhhhhh shssss eeeee",
      },
    ],
  },
];

const suggestions = [
  {
    customer: {
      userName: "butterfly188544",
      profileUrl: Profile,
    },
    suggestion: "follow",
  },
  {
    customer: {
      userName: "toktobekov_009",
      profileUrl: postImg2,
    },
    suggestion: "follow",
  },
  {
    customer: {
      userName: "butterfly188544",
      profileUrl: Profile,
    },
    suggestion: "follow",
  },
  {
    customer: {
      userName: "sajalbaig7",
      profileUrl: postImg2,
    },
    suggestion: "follow",
  },
  {
    customer: {
      userName: "toktobekov_009",
      profileUrl: postImg2,
    },
    suggestion: "follow",
  },
];
console.log(posts[0].comments.length, "khasghidg");

const Home = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const handleSwiperUpdate = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <>
      <div className="home">
        <div className="part1">
          <div className="storiesHead">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              modules={[Navigation]}
              onSwiper={handleSwiperUpdate}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 8,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              {storys?.map((item) => {
                return (
                  <>
                    <SwiperSlide>
                      <Story data={item} />
                    </SwiperSlide>
                  </>
                );
              })}
              <div
                className={`swiper-button-prev${
                  isBeginning ? " disabled" : ""
                }`}
              >
                <img src={leftIcon} alt="" />
              </div>
              <div className={`swiper-button-next${isEnd ? " disabled" : ""}`}>
                <img src={NextIcon} alt="" />
              </div>
            </Swiper>
          </div>
          <div className="postsHead">
            {posts?.map((item) => {
              return (
                <>
                  <Posts data={item} />
                </>
              );
            })}
          </div>
        </div>
        <div className="part2">
          <div className="suggestionPart">
            <div className="profileHead d-flex align-items-center pb-3">
              <span>
                <img src={Profile} alt="" />
              </span>
              <div className="profileDetails d-flex align-items-center justify-content-between">
                <div>
                  <h6>Soma</h6>
                  <p>som</p>
                </div>
                <button>
                  <a href="#">switch</a>
                </button>
              </div>
            </div>
            <div className="suggestionHead">
              <div className="head d-flex align-items-center justify-content-between">
                <h4>Suggested for you</h4>
                <a href="#">See All</a>
              </div>
              <ListGroup>
                {suggestions?.map((item) => {
                  return (
                    <>
                      <ListGroup.Item>
                        <Suggestions data={item} />
                      </ListGroup.Item>
                    </>
                  );
                })}
              </ListGroup>
            </div>
          </div>
          <div className="footer">
          <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
