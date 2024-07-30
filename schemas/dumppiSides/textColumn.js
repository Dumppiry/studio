export default {
  name: 'textColumn',
  title: 'Text column',
  type: 'object',
  fields: [
    {
      name: 'previewTitle',
      title: 'Preview title',
      type: 'string',
      description:
        'Something to help recognize in the list. Not shown in the actual page.'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'localeBlock'
    }
  ],
  preview: {
    select: {
      title: 'previewTitle'
    }
  }
}
