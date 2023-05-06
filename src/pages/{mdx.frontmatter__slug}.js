import * as React from "react";
import { graphql } from "gatsby";

const Experiment = ({ data, children }) => {
  console.log(data);
  return <div>{data.mdx.frontmatter.description}</div>;
};

export default Experiment;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;

export const Head = ({ data }) => {
  return <title>{data.mdx.frontmatter.title}</title>;
};
