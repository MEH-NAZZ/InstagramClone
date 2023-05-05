import React from "react";
import { ListGroup } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <ListGroup horizontal>
        <ListGroup.Item>
          
          <a href="#">About.</a>
        </ListGroup.Item>
        <ListGroup.Item>
          
          <a href="#">help.</a>
        </ListGroup.Item>
        <ListGroup.Item>
          
          <a href="#">Press.</a>
        </ListGroup.Item>
        <ListGroup.Item>
          
          <a href="#">Jobs.</a>
        </ListGroup.Item>
        <ListGroup.Item>
          
          <a href="#">Privacy.</a>
        </ListGroup.Item>
        <ListGroup.Item>
          
          <a href="#">Terms.</a>
        </ListGroup.Item>
        <ListGroup.Item>
          
          <a href="#">Locations.</a>
        </ListGroup.Item>
        <ListGroup.Item>
          
          <a href="#">Language.</a>
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <a href="#">Meta verified.</a>
        </ListGroup.Item>
      </ListGroup>
      <p>© 2023 INSTAGRAM FROM META</p>
    </>
  );
};
export default Footer;
