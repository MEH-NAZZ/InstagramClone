import React from "react";
import "../../Styles/searchModel.css"

const SearchUser = ({data}) => {
    console.log(data, "data")
  return (
    <>
      <div className="searchUser d-flex align-items-center mb-3">
        <span>
          <img src={data?.profileUrl} alt="" />
        </span>
        <div className="searchUserDetails d-flex align-items-center justify-content-between">
          <div>
            <h6>{data?.userName}</h6>
            <p>som</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchUser;
