<template>
<div>
  <nuxt-child :video="video" />
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: '',
      titleTemplate: `%s ${this.video.name} - Video Screencasts`
    }
  },
  async fetch ({$axios, params, store}) {
    let response = await $axios.get(`/videos/${params.id}`)
    let video = response.data

    store.commit('SET_CURRENT_VIDEO', video)
  },
  computed: {
    ...mapState({
      video: 'currentVideo'
    })
    // video () {
    //   return this.$store.state.currentVideo
    // }
  }
}
</script>

<style>

</style>
