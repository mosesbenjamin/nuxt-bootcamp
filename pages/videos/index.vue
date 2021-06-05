<template>
  <div>
    <h1>Videos</h1>
    <div v-for="video in $store.state.videos" :key="video.id">
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
  async fetch ({ $axios, store }) {
    let response = await $axios.get('/videos')
    let videos = response.data

    store.commit('SET_VIDEOS', videos)
  }
}
</script>

<style>

</style>
