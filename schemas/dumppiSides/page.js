import { validation } from 'sanity'

// Used in satama-appro project
export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    // Project field is used to choose the data to be loaded on each side project
    {
      name: 'project',
      title: 'Project',
      type: 'string',
      readOnly: true,
      hidden: true
    },
    {
      name: 'banner',
      title: 'Banner',
      description:
        'Banner image for the page. This should be 16:9 aspect ratio.',
      type: 'image',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'bannerMobile',
      title: 'Banner Mobile',
      description:
        'Banner image for the page on mobile. This should be 16:9 aspect ratio vertically.',
      type: 'image',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'contrastColor',
      title: 'Contrast color',
      description:
        'Darker color to render every other section. Give in hex format, e.g. #2f5e91',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'eventDate',
      title: 'Event date',
      description: 'Start date of the event',
      type: 'datetime',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'ticketSaleStart',
      title: 'Ticket sale start',
      description: 'Start date of the ticket sale',
      type: 'datetime'
    },
    {
      name: 'mainEmail',
      title: 'Main email',
      description: 'Email address for the main contact eg. projekti@dumppi.fi',
      type: 'string'
    },
    {
      name: 'ticketUrl',
      title: 'Ticket URL',
      type: 'url'
    },
    {
      name: 'content',
      title: 'Content Sections',
      description:
        'Each section will be displayed as opposite color to the previous one',
      type: 'array',
      of: [
        { type: 'textSection' },
        { type: 'heroSection' },
        { type: 'contactSection' },
        { type: 'bannerSection' }
      ]
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'Instagram page url in the form of https://...'
    }
  ]
}
