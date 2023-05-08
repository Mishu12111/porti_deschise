import * as React from "react";
import Header from "../components/Header";
import PostGrid from "../components/PostGrid";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <PostGrid />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Fizica si Informatica</title>;
