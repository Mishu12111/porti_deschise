import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostGrid from "../components/PostGrid";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <PostGrid />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Footer</title>;
