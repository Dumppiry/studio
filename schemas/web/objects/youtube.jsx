import React from 'react'
import getYouTubeId from 'get-youtube-id'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Preview = (props) => {
  const id = getYouTubeId(props.url)
  console.log(props)
  return (
    <div>
      <LiteYouTubeEmbed
        style={{ width: '100%', height: '400px' }}
        id={id}
        title="Video"
      />
    </div>
  )
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL'
    }
  ],
  components: {
    preview: Preview
  },
  preview: {
    select: {
      url: 'url'
    }
  }
}
