<template>
  <div class="home">
    <div class="display-4 ma-4 d-flex justify-center">
      All Videos
    </div>

    <div class="d-flex flex-wrap">
      <div v-for="video in videos" :key="video.name">
        <VideoListVideo :video="video" :tags="tags"></VideoListVideo>
      </div>
    </div>
  </div>
</template>

<script>
import VideoListVideo from '../components/VideoListVideo.vue'

export default {
  components: {
    VideoListVideo
  },
  async asyncData ({ $axios }) {
     let response = await $axios.get('/videos')
     let videos = response.data
     videos.forEach(v => {
       v.tag_ids = v.tags.map(t => t.id)
     })

     let tags = videos.map(v => v.tags)
     tags = tags[0]
    return {
      videos: videos.map( v => v),
      tags
    }
  }
}
</script>

<style>

</style>
