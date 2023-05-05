import React from "react";
import "../../Styles/notificationModel.css";

const NotificationAlert = ({data}) => {
    console.log(data, "data")
  return (
    <>
      <div className="NotificationAlert d-flex align-items-center mb-3">
        <span>
          <img src={data?.user?.profileURl} alt="" />
        </span>
        <div className="NotificationAlertDetails d-flex align-items-center justify-content-between">
          <div className="me-2">
            <h6>{data?.user?.userName}</h6>
            <p>{data?.reactionPara}</p>
          </div>
          <span><img src={data?.reactionPost} alt="" /></span>
        </div>
      </div>
    </>
  );
};

export default NotificationAlert;