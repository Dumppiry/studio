import supportedLanguages from '../../../../supportedLanguages'

export default {
  name: 'localePortableText',
  title: 'Portable text',
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
    type: 'portableText',
    fieldset: lang.isDefault ? null : 'translations'
  }))
}
