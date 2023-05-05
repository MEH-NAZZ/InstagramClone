import React, { useState } from "react";
import "../../Styles/searchModel.css";
import { Offcanvas, InputGroup, Form } from "react-bootstrap";
import SearchIcon from "../../Assets/images/search.svg";
import Profile1 from "../../Assets/images/post1.jpg";
// component

import SearchUser from "./SearchUser.js";

const users = [
  { userName: "john", profileUrl: Profile1 },
  { userName: "jane", profileUrl: Profile1 },
  { userName: "david", profileUrl: Profile1 },
  { userName: "emily", profileUrl: Profile1 },
  { userName: "oliver", profileUrl: Profile1 },
  { userName: "chloe", profileUrl: Profile1 },
  { userName: "liam", profileUrl: Profile1 },
  { userName: "samantha", profileUrl: Profile1 },
  { userName: "william", profileUrl: Profile1 },
  { userName: "lucy", profileUrl: Profile1 },
  { userName: "jacob", profileUrl: Profile1 },
  { userName: "ava", profileUrl: Profile1 },
  { userName: "james", profileUrl: Profile1 },
  { userName: "madison", profileUrl: Profile1 },
  { userName: "ethan", profileUrl: Profile1 },
  { userName: "grace", profileUrl: Profile1 },
  { userName: "michael", profileUrl: Profile1 },
  { userName: "natalie", profileUrl: Profile1 },
  { userName: "benjamin", profileUrl: Profile1 },
  { userName: "hannah", profileUrl: Profile1 },
  { userName: "logan", profileUrl: Profile1 },
  { userName: "mia", profileUrl: Profile1 },
  { userName: "samuel", profileUrl: Profile1 },
  { userName: "lily", profileUrl: Profile1 },
  { userName: "isaac", profileUrl: Profile1 },
  { userName: "ella", profileUrl: Profile1 },
  { userName: "alexander", profileUrl: Profile1 },
  { userName: "olivia", profileUrl: Profile1 },
  { userName: "noah", profileUrl: Profile1 },
  { userName: "sophia", profileUrl: Profile1 },
];

const Search = ({ show, setShow }) => {
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  
  const handleClose = () => setShow(false);
  const handleInput = (e) => {
    setQuery(e.target.value);
    const filtered = users.filter((user) => {
      const usernameMatch = user.userName
        .toLowerCase()
        .includes(query.toLowerCase());
      return usernameMatch;
    });
    setFilteredUsers(filtered);
  };

  return (
    <div className="">
      <Offcanvas show={show} onHide={handleClose} className="searchModel">
        <Offcanvas.Header className="flex-column align-items-start searchModelHeader">
          <Offcanvas.Title className="mb-5">Search</Offcanvas.Title>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <img src={SearchIcon} alt="" width={16} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
              value={query}
              onChange={(e) => handleInput(e)}
            />
          </InputGroup>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {filteredUsers.length ? (
            filteredUsers.map((user) => {
              return <SearchUser data={user} />;
            })
          ) : (
            <h6>No results found.</h6>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Search;
