<template>
<div>
  <nuxt-child :video="video" />
</div>
</template>

<script>
export default {
  head() {
    return {
      title: '',
      titleTemplate: `%s ${this.video.name} - Video Screencasts`
    }
  },
  async asyncData ({$axios, params}) {
    let response = await $axios.get(`/videos`)
    let videos = response.data

    let video = videos.filter(v => v.id == params.id)

    return {
      video: video[0]
    }
  },

}
</script>

<style>

</style>
