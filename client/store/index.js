export const state = () => ({
  topNavState: true
})

export const mutations = {
  changeTopNav (state) {
    state.topNavState = !state.topNavState
  }
}
