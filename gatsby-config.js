module.exports = {
  siteMetadata: {
    title: "Azoff Thayer Wedding",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/styles/typography",
      },
    },
  ],
}
