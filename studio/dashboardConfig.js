export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb7b1109c03ba01ddf07dfc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pahbyh6c',
                  apiId: '5ea04514-d86f-4846-a8b1-2c12a10b548b'
                },
                {
                  buildHookId: '5fb7b110e1370a0de837ec86',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bo4ztxq8',
                  apiId: '31360ca9-cb9e-4b16-9ba0-396d9213123f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/serkanokur79/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bo4ztxq8.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
