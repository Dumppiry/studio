import supportedLanguages from '../../../supportedLanguages'

export default {
  name: 'localeBlock',
  title: 'Block',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    fieldset: lang.isDefault ? null : 'translations',
    type: 'array',
    of: [
      {
        type: 'block',
        styles: [
          { title: 'Headin 1', value: 'h1' },
          { title: 'Heading 2', value: 'h2' },
          { title: 'normal', value: 'normal' }
        ]
      }
    ]
  }))
}
