export default {
  name: 'bannerSection',
  title: 'Banner Section',
  type: 'object',
  fields: [
    {
      name: 'navTitle',
      title: 'Navigation Title',
      type: 'localeString',
      description: 'Title for navbar. Leave empty to hide from navbar.'
    },
    {
      name: 'bannerMobile',
      title: 'Banner Mobile',
      type: 'image',
      description:
        'Usually a tall image. 16:9 aspect ratio vertically works best.'
    },
    {
      name: 'bannerDesktop',
      title: 'Banner Desktop',
      type: 'image',
      description:
        'Usually a wide image. Use 16:9 aspect ratio for best result.'
    }
  ],
  preview: {
    select: {
      title: 'bannerMobile.asset.originalFilename'
    }
  }
}
