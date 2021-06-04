<template>
<div>
  <nuxt-child :video="video" />
</div>
</template>

<script>
export default {
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
