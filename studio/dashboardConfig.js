export default {
  widgets: [
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
                  buildHookId: '5ed41fce02b14990f8b58c1f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-b7kknc7p',
                  apiId: '74e4cdf6-e287-4fc6-9cc9-461c8040f770'
                },
                {
                  buildHookId: '5ed41fce02b14990f8b58c20',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-r5o8xos5',
                  apiId: 'e5e9c94a-e77b-4caa-a59d-78bf7ad55627'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/floydianslips/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-r5o8xos5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
