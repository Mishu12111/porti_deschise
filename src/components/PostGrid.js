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
    <div className="flex flex-wrap justify-around bg-slate-100 p-4 ">
      {exps.map((exp) => {
        const image = getImage(exp.frontmatter.img);
        return (
          // the card component
          <div className="m-2 flex h-auto max-w-[300px] flex-col overflow-hidden rounded-md bg-white p-3 shadow-lg">
            <GatsbyImage image={image} className="w-full rounded-md" />

            <div className="m-2">
              <h3 className="mb-1 text-2xl font-bold">
                {exp.frontmatter.title}
              </h3>

              <ul className="list-disc text-gray-700">
                {exp.frontmatter.elevi.map((elev) => {
                  return <li className="ml-6">{elev}</li>;
                })}
              </ul>
              <p className="mb-3 text-gray-500">
                {exp.frontmatter.description}
              </p>
            </div>
            <Link
              to={exp.frontmatter.slug}
              className="m-2 mt-auto block rounded-md  bg-[#e3f2fd] px-4 py-2 text-center"
            >
              Descopera mai mult
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default PostGrid;
