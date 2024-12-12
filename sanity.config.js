import { defineConfig } from 'sanity'
import schemas from './schemas/schemas'
import { structureTool } from 'sanity/structure'
import { colorInput } from '@sanity/color-input'
import { visionTool } from '@sanity/vision'
import { dashboardTool, projectInfoWidget } from '@sanity/dashboard'
import { webStructure, dumppiSidesStructure } from './structures'
import { DownloadAttendeesAction } from './actions/DownloadAttendeesAction'
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list'
import { githubActionsWidget } from './plugins/sanity-github-actions-widget'

export default defineConfig([
  {
    title: 'dumppi-website',
    name: 'dumppi-website',
    basePath: '/dumppi-website',
    projectId: 'ubo8m1s0',
    dataset: 'production',
    plugins: [
      dashboardTool({
        widgets: [
          documentListWidget({
            layout: {
              width: 'medium',
              height: 'small'
            },
            title: 'Events',
            createButtonText: 'Create event',
            types: ['event'],
            showCreateButton: true,

            query: `*[_type == "event" && startDate > now()] | order(startDate asc)`
          }),
          githubActionsWidget({
            layout: {
              width: 'medium',
              height: 'small'
            },
            sites: [
              {
                siteName: 'dumppi.fi',
                githubUser: 'Dumppiry',
                githubRepo: 'dumppi-website',
                namespace: 'dummpi-website',
                eventType: 'build-and-deploy-web'
              }
            ]
          }),
          projectInfoWidget()
        ]
      }),
      structureTool({
        structure: webStructure
      }),
      visionTool(),
      colorInput()
    ],
    schema: {
      types: schemas.webSchema
    },
    document: {
      actions: (prev, { schemaType }) => {
        switch (schemaType) {
          case 'event':
            return [...prev, DownloadAttendeesAction]
          default:
            return prev
        }
      }
    }
  },
  {
    title: 'dumppi-sides',
    name: 'dumppi-sides',
    basePath: '/dumppi-sides',
    projectId: 'ubo8m1s0',
    dataset: 'dumppi-sides',
    plugins: [
      dashboardTool({
        widgets: [
          documentListWidget({
            layout: {
              width: 'medium',
              height: 'small'
            },
            title: 'Projects',
            types: ['page'],
            showCreateButton: false,

            query: `*[_type == "page" || _type == "photoSlider"] | order(_updatedAt asc)`
          }),
          githubActionsWidget({
            layout: {
              width: 'medium',
              height: 'small'
            },
            sites: [
              {
                siteName: 'satama-appro.fi',
                githubUser: 'Dumppiry',
                githubRepo: 'dumppi-sides',
                namespace: 'dumppi-sides-satama-appro',
                eventType: 'build-and-deploy-satama-appro'
              },
              {
                siteName: 'vappuappro.fi',
                githubUser: 'Dumppiry',
                githubRepo: 'dumppi-sides',
                namespace: 'dumppi-sides-vappuappro',
                eventType: 'build-and-deploy-vappuappro'
              }
            ]
          }),
          projectInfoWidget()
        ]
      }),
      structureTool({
        structure: dumppiSidesStructure
      }),
      visionTool()
    ],
    schema: {
      types: schemas.dumppiSidesSchema
    }
  }
])
