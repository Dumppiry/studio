import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ubo8m1s0',
    dataset: 'production'
  },
  graphql: [
    {
      projectId: 'ubo8m1s0',
      tag: 'website',
      dataset: 'production',
      workspace: 'dumppi-website',
      id: 'website'
    }
  ]
})
