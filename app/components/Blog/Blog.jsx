import React from "react";
import BlogBanner from "./parts/BlogBanner";
import Nav from "../Navbar/Nav";
import BlogFeed from "./parts/BlogFeed";
import Footer from "../utils/Footer";
import { Stack } from "@mui/material";

const Blog = () => {
  return (
    <>
      <Nav />
      <BlogBanner GrayBanner={false} />
      <BlogFeed />
      <Footer />
    </>
  );
};

export default Blog;
