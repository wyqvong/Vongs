export const state = () => ({
  article: []
})

export const mutations = {
  get (state, data) {
    state.article = data
  }
}
