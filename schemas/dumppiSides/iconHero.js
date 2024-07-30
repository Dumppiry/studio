export default {
  name: 'iconHero',
  title: 'Icon Hero',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description:
        'Title for the hero. Rendered as a big heading below the icon.',
      type: 'localeString'
    },
    {
      name: 'content',
      title: 'Content',
      description:
        'Content for the hero. Rendered as normal text below the title.',
      type: 'localeBlock'
    },
    {
      name: 'icon',
      title: 'Icon',
      description: 'Icon for the hero. Rendered as a big icon above the title.',
      type: 'string',
      options: {
        list: ['card', 'clock', 'book', 'pin'],
        layout: 'radio'
      }
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title ? title.fi : 'Icon Hero'
      }
    }
  }
}
