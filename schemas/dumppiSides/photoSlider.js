export default {
  name: 'photoSlider',
  title: 'Photo Slider',
  type: 'document',
  fields: [
    {
      name: 'autoPlaySpeed',
      title: 'Auto play speed',
      type: 'number',
      description: 'For how many seconds each slide is shown',
      initialValue: 10
    },
    {
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ]
    }
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Photo Slider'
      }
    }
  }
}
