export default {
  name: 'contactSection',
  title: 'Contact Section',
  type: 'object',
  fields: [
    {
      name: 'navTitle',
      title: 'Navigation Title',
      type: 'localeString',
      description: 'Title for navbar. Leave empty to hide from navbar.'
    },
    {
      name: 'header',
      title: 'Header',
      description:
        'Header is normal text rendered between title and contact persons.',
      type: 'localeBlock'
    },
    {
      name: 'content',
      title: 'Content',
      description:
        'Contact persons. Rendered as cards with name, title and contact info in a grid.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'contactPerson' }] }]
    }
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Contact Section'
      }
    }
  }
}
