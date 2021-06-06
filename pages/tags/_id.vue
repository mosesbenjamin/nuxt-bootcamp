<template>
    <div>
    <h1 class="display-3 ma-4 d-flex justify-center">
      Videos with Tag "{{ tag.name }}"
    </h1>

    <div class="d-flex flex-wrap">
      <div v-for="video in videosOnTag" :key="video.id">
        <VideoListVideo :video="video" :tags="tag"></VideoListVideo>
      </div>
    </div>
  </div>
</template>

<script>
import VideoListVideo from '@/components/VideoListVideo'

export default {
  components: {
    VideoListVideo
  },
  async asyncData({ $axios, params }) {
    let response = await $axios.get(`/tags/${params.id}`)
    let tag = response.data.data
    tag.attributes.id = tag.id

    let videosOnTag = tag.relationships.videos.data

    return {
      tag: tag.attributes,
      videosOnTag
    }
  }
}
</script>

<style>

</style>
