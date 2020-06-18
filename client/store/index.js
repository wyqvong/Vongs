export const state = () => ({
  topNavState: 1
})

export const mutations = {
  changeTopNav (state) {
    state.topNavState = !state.topNavState
  }
}
