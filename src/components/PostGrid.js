import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";

const PostGrid = () => {
  const data = useStaticQuery(graphql`
    query Experimente {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            description
            elevi
            img {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const exps = data.allMdx.nodes;

  return (
    <div className="bg-slate-100 flex justify-around flex-wrap p-4 ">
      {exps.map((exp) => {
        const image = getImage(exp.frontmatter.img);
        return (
          // the card component
          <div className="h-auto rounded-md overflow-hidden bg-white shadow-lg flex-none p-3 m-2 max-w-[300px]">
            <GatsbyImage image={image} className="rounded-md w-full" />

            <div className="m-2">
              <h3 className="text-2xl font-bold mb-1">
                {exp.frontmatter.title}
              </h3>

              <ul className="list-disc text-gray-700">
                {exp.frontmatter.elevi.map((elev) => {
                  return <li className="ml-6">{elev}</li>;
                })}
              </ul>
              <p className="text-gray-500 mb-3">
                {exp.frontmatter.description}
              </p>
              <Link
                to={exp.frontmatter.slug}
                className="bg-[#e3f2fd]  py-2 px-4 rounded-md"
              >
                Descopera mai mult
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PostGrid;
