import * as React from "react";
import { graphql } from "gatsby";

const Experiment = ({ data, children }) => {
  return (
    <div>
      {/* {data.mdx.frontmatter.description}  */}
      {data.mdx.frontmatter.iframe ? (
        <iframe
          src={data.mdx.frontmatter.iframe}
          className="h-[100vh] w-[100vw]"
        ></iframe>
      ) : (
        ""
      )}
      <div className="prose ">{children}</div>
    </div>
  );
};

export default Experiment;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        iframe
      }
    }
  }
`;

export const Head = ({ data }) => {
  return <title>{data.mdx.frontmatter.title}</title>;
};
