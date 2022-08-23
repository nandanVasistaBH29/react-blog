import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import "./Home.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  //that location object has search -> in which you will have those next to ? -> query
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts" + search);
      // console.log(res.data);
      setPosts(res.data);
    };
    fetchPost();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
