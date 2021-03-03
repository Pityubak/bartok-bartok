
export const useExtendedQuery=(name,path)=>{
    return(
    `    ${name}: file(relativePath: { eq: ${path} }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }`
    )
}