import React, { useState } from "react";
import "../../Styles/notificationModel.css";
import { Offcanvas, InputGroup, Form } from "react-bootstrap";

import profile from "../../Assets/images/story1.jpg";
import Post from "../../Assets/images/post1.jpg";

// components
import NotificationAlert from "./alerts";

const notificationAlert = [
  {
    user: {
      userName: "Alexa",
      profileURl: profile,
    },
    reactionPara: "Liked your comment : jeel❤️",
    reactionPost: Post,
  },
  {
    user: {
      userName: "Alexa",
      profileURl: profile,
    },
    reactionPara: "Liked your comment : jeel❤️",
    reactionPost: Post,
  },
  {
    user: {
      userName: "Alexa",
      profileURl: profile,
    },
    reactionPara: "Liked your comment : jeel❤️",
    reactionPost: Post,
  },
  {
    user: {
      userName: "Alexa",
      profileURl: profile,
    },
    reactionPara: "Liked your comment : jeel❤️",
    reactionPost: Post,
  },
];

const Notifications = ({ notificationModel, setNotificationModel }) => {
  const handleNotificationClose = () => setNotificationModel(false);

  return (
    <>
      <div className="offCanvas">
        <Offcanvas
          show={notificationModel}
          onHide={handleNotificationClose}
          className="NotificationsModel"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Notifications</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <h6>This week</h6>
            {notificationAlert?.map((item) => {
              return <NotificationAlert data={item} />;
            })}
            <h6>This Month</h6>
            {notificationAlert?.map((item) => {
              return <NotificationAlert data={item} />;
            })}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Notifications;
