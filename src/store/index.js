import { createStore } from 'vuex';

export default createStore({
  state: {
    navBarSelected: '0',
    siderSelected: '0',
    siderMenu: [],
  },
  mutations: {
    changeNavBarSelected(state, value) {
      state.navBarSelected = value;
    },
    changeSiderSelected(state, value) {
      state.siderSelected = value;
    },
    changeSiderMenu(state, value) {
      state.siderMenu = value;
    },
  },
});
