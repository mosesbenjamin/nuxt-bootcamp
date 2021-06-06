export const state = () => ({
  videos: [],
  tags: []
});

export const mutations = {
  SET_VIDEOS(state, videos) {
    state.videos = videos;
  },
  SET_TAGS(state, tags) {
    state.tags = tags;
  }
};

export const actions = {
  async loadAllVideos({ commit }) {
    let response = await this.$axios.get("/videos");
    let videos = response.data;

    videos.forEach(v => {
      v.tag_ids = v.tags.map(t => t.id);
    });

    let tags = videos.map(v => v.tags);
    tags = tags[0];

    commit(
      "SET_VIDEOS",
      videos.map(v => v)
    );
    commit("SET_TAGS", tags);
  },
  async loadVideo({ commit }, { videoId }) {
    let response = await this.$axios.get(`/videos/${videoId}`);
    let video = response.data;

    video.tag_ids = video.tags.map(t => t.id);
    let tags = video.tags;

    commit("SET_TAGS", tags);
    commit("SET_VIDEOS", [video]);
  },
  async loadTagAndRelationships({ commit }, { tagId }) {
    console.log(tagId);
    let response = await this.$axios.get(`/tags/${tagId}`);
    let tag = response.data.data;
    tag.attributes.id = tag.id;

    let videosOnTag = tag.relationships.videos.data;

    commit("SET_TAGS", [tag.attributes]);
    commit("SET_VIDEOS", videosOnTag);
  }
};
