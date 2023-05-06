import * as React from "react";
import Header from "../components/Header";
import PostGrid from "../components/PostGrid";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <PostGrid />
      <Link to="/test">test</Link>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
