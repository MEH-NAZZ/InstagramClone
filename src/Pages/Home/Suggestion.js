import React from "react";
import "../../Styles/home.css";


const Suggestions = ({data}) => {
  console.log(data , "kasjhdjksh")
  return (
    <>
      <div className="suggestion d-flex align-items-center">
        <span>
          <img src={data?.customer?.profileUrl} alt="" />
        </span>
        <div className="suggestionDetails d-flex align-items-center justify-content-between">
          <div>
            <h6>{data?.customer?.userName}</h6>
            <p>som</p>
          </div>
          <button>
            <a href="#">follow</a>
          </button>
        </div>
      </div>
    </>
  );
};
export default Suggestions;
