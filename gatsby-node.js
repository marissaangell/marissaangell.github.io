exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }

    type MdxFrontmatter {
      title: String!
      description: String!
      category: String
      longDescription: String
      languages: [String]
      tags: [String]
      externalLinks: [ExternalLink]
      featuredLinks: [ExternalLink]
      factoids: [Factoid]
      projectMedia: String @mdx
      itchEmbed: String @mdx
      thumbnail: File
    }

    type Factoid {
      heading: String
      body: String
    }

    type ExternalLink {
      url: String!
      desc: String
      icon: String
      text: String
      showOnCard: Boolean
      showInLinkRow: Boolean
    }
  `);
};