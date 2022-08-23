import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const { user } = useContext(Context);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  const PF = "http://localhost:8000/images/"; //PF
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        {user && <span className="sidebarTitle">ABOUT ME</span>}
        {user?.profilePic ? (
          <img src={PF + user?.profilePic} alt="pic not uploaded" />
        ) : (
          <i className="fa fa-user" aria-hidden="true"></i>
        )}
        {user && (
          <p>
            <b> Hi, my self {user.username}</b> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptate qui necessitatibus nostrum
            illum reprehenderit.
          </p>
        )}
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            //c->category
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
