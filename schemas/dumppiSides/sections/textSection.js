export default {
  name: 'textSection',
  title: 'Text Section',
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
      name: 'content',
      title: 'Content',
      description: 'Content of the section.',
      type: 'array',
      of: [{ type: 'textColumn' }], // TODO Add imageSection, contactSection
      validation: (Rule) =>
        Rule.custom((items) => {
          if (items.length > 2) {
            return 'Pls only 2 columns of content :D.'
          }
          return true
        })
    },
    {
      name: 'layoutType',
      title: 'Layout Type',
      type: 'string',
      description:
        'How the contents are laid out. Column is vertical, grid is horizontal on wide enough screens.',
      initialValue: 'column',
      options: {
        list: [
          { title: 'Column', value: 'column' },
          { title: 'Grid', value: 'grid' }
        ],
        layout: 'radio'
      }
    }
  ],
  preview: {
    select: {
      title: 'title.fi'
    }
  }
}
