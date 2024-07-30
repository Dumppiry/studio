export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'navTitle',
      title: 'Navigation Title',
      type: 'localeString',
      description: 'Title for navbar. Leave empty to hide from navbar.'
    },
    {
      name: 'title',
      title: 'Title',
      description:
        'Title for the section. Rendered as a big heading top middle of the section.',
      type: 'localeString'
    },
    {
      name: 'header',
      title: 'Header',
      description: 'Header is normal text rendered between title and heroes.',
      type: 'localeText'
    },
    {
      name: 'content',
      title: 'Heroes',
      description:
        'Heroes are rendered as big icons with small headline and text body.',
      type: 'array',
      of: [{ type: 'iconHero' }]
    },
    {
      name: 'footer',
      title: 'Footer',
      description:
        'Footer is normal text rendered below heroes as the last element of the section.',
      type: 'localeText'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title ? title.fi : 'Hero Section'
      }
    }
  }
}
