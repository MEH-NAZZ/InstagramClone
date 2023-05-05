import React, { useEffect, useState } from "react";
import "../../Styles/sidebar.css";
import { ListGroup } from "react-bootstrap";

// icons
import { List, House, Search, SearchHeart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

// images
import Logo from "../../Assets/images/Logo-Instagram.png";
import Instagram from "../../Assets/images/instagram.svg";
import HomeIcon from "../../Assets/images/home.svg";
import SearchIcon from "../../Assets/images/search.svg";
import ExploreIcon from "../../Assets/images/explore.svg";
import NotificationIcon from "../../Assets/images/heart.svg";

// components
import SearchOffcanvas from "../../Components/Search";
import NotificationsModel from "../../Components/notification";

const Sidebar = ({ onDataChanged }) => {
  const [activePage, setActivePage] = useState("");
  const [show, setShow] = useState(false);
  const [notificationModel, setNotificationModel] = useState(false);
  const handleNotificationShow = () => setNotificationModel(!notificationModel);
  const handleShow = () => {
    setShow(!show);
  };
  useEffect(() => {
    onDataChanged(show);
  }, [show]);

  useEffect(() => {
    onDataChanged(notificationModel);
  }, [notificationModel]);

  return (
    <>
      <div className="sidebar">
        <div className="logoHead">
          {show || notificationModel ? (
            <img src={Instagram} alt="" className="miniLogo" />
          ) : (
            <img src={Logo} alt="" className="lgLogo" />
          )}
        </div>
        <ListGroup>
          <Link to="/">
            <ListGroup.Item>
              <img src={HomeIcon} alt="not found" />
              <span>home</span>
            </ListGroup.Item>
          </Link>
          <ListGroup.Item onClick={handleShow}>
            <img src={SearchIcon} alt="not found" />
            <span>search</span>
          </ListGroup.Item>
          <Link to="/explore">
            <ListGroup.Item>
              <img src={ExploreIcon} alt="not found" />
              <span>explore</span>
            </ListGroup.Item>
          </Link>
          <ListGroup.Item onClick={handleNotificationShow}>
            <img src={NotificationIcon} alt="not found" />
            <span>Notificatons</span>
          </ListGroup.Item>
        </ListGroup>
        <SearchOffcanvas show={show} setShow={setShow} />
        <NotificationsModel
          notificationModel={notificationModel}
          setNotificationModel={setNotificationModel}
        />
      </div>
    </>
  );
};
export default Sidebar;
