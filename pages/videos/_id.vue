<template>
<div>
  <nuxt-child :video="video" />
</div>
</template>

<script>
export default {
  data () {
    return {
      videos: [
        {
          id: "1",
          name: "one"
        },
        {
          id: "2",
          name: "two"
        },
        {
          id: "3",
          name: "three"
        }
      ]
    }
  },
  computed: {
    video () {
      return this.videos.find( v => v.id == this.$route.params.id)
    }
  }
}
</script>

<style>

</style>
