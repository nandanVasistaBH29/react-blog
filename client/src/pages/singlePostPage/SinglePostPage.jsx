import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePostComponent/SinglePost";
import "./SinglePostPage.css";
const SinglePostPage = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default SinglePostPage;
