export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f970fa19614995784c77249',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-1-studio-k6vj1ncb',
                  apiId: '6e4ae6f7-3869-431f-8ec0-99a904f4703b'
                },
                {
                  buildHookId: '5f970fa2c908db504312c89e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-1-web',
                  apiId: '433df568-260c-42cd-a644-b56d713982cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ivanmauricio/sanity-nextjs-landing-pages-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-1-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
