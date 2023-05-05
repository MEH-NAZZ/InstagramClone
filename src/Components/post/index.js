import React, { useState } from "react";
import { Card, Modal, ListGroup, Button } from "react-bootstrap";
import "../../Styles/posts.css";

import Moment from "react-moment";

import menuIcon from "../../Assets/images/menuIcon.svg";
import heartIcon from "../../Assets/images/heart.svg";
import commentIcon from "../../Assets/images/chat.svg";
import saveIcon from "../../Assets/images/save.svg";
import ShareIcon from "../../Assets/images/share.svg";

const Posts = ({ data }) => {
  const newData = data.comments.slice(1, 4);
  console.log(newData, "hojabhai");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(!show);
  };

  return (
    <>
      <Card className="postCard">
        <div className="cardHead">
          <div className="userDetails">
            <span>
              <img src={data?.customer?.profileUrl} alt="" />
            </span>
            <div>
              <h4 title={data?.customer?.userName}>
                {data?.customer?.userName}
                <span>
                  <Moment format="DD">{data?.date}</Moment>d
                </span>
              </h4>
              <h6>{data?.location}</h6>
            </div>
          </div>
          <span className="menuIcon" onClick={handleShow}>
            <img src={menuIcon} alt="" />
          </span>
        </div>
        <div className="postHead">
          <img src={data?.postUrl} alt="" />
        </div>
        <div className="postDetails">
          <div className="postIcons">
            <div className="leftIcons">
              <img src={heartIcon} alt="" />
              <img src={commentIcon} alt="" />
              <img src={ShareIcon} alt="" />
            </div>
            <div className="saveIcon">
              <img src={saveIcon} alt="" />
            </div>
            {/* <p>{data.comments.length}dlskha</p> */}
          </div>
          <span className="likes">{data?.likes} likes</span>
          <div className="postDescription">
            <p>
              <span> {data?.customer?.userName} </span>
              {data?.postDescription}
            </p>
          </div>
          <div className="comments">
            <p>Veiw all {data?.comments?.length} comments</p>
            <p>{data?.newData}</p>

            <div className="inputHead">
              <input type="text" placeholder="Add a comment" />
            </div>
          </div>
        </div>
      </Card>
      <Modal show={show}>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <a href="#">report</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">unfollow</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">Add to favourites</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">Go to post</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">share to</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">copy link</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">Embed</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">About this Account</a>
            </ListGroup.Item>
            <Button onClick={handleClose}>Cancel</Button>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Posts;
