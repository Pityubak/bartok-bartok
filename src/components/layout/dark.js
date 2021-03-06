import { useStaticQuery } from "gatsby"


const DarkImage=()=>{
    const data = useStaticQuery(
        graphql`
          query {
            allFile(filter: { dir: { regex: "/background_light/" } }) {
              edges {
                node {
                  id
                  childImageSharp {
                    fluid(maxWidth: 1580) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            icon: file(relativePath: { eq: "logo2.png" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `
      )

      return data;
}

export default DarkImage