import React from "react";
import { Card } from "react-bootstrap";
import "../../Styles/Story.css";


const Story = ({data}) => {
  return (
    <>
      <Card className="storyCard">
        <div className="imgHead">
          <img src={data?.customer?.profileUrl} alt="" />
        </div>
        <h6>{data?.customer?.userName}</h6>
      </Card>
    </>
  );
};
export default Story;
