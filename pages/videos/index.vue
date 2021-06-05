<template>
  <div>
    <h1>Videos</h1>
    <div v-for="video in videos" :key="video.id">
        <nuxt-link :to="`/videos/${video.id}`">{{ video.name }}</nuxt-link>
    </div>

    <nuxt-child />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Vue Screencast - Video List'
  },
  async asyncData ({ $axios }) {
    let response = await $axios.get('/videos')
    let videos = response.data

    return {
      videos
    }
  }
}
</script>

<style>

</style>
