<template>
  <div>
    Video number {{ video.name }}
    <nuxt-link :to="`/videos/${video.id}/edit`">
    <button>Edit</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['video'],
  head: {
    title: 'Watch'
  }
}
</script>

<style>

</style>
