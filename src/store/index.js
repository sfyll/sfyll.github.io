import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [
    createPersistedState({
      key: 'state',
      storage: window.localStorage
    })
  ],
  state: {
    dark: window.matchMedia('(prefers-color-scheme: dark)').matches,
    showMobileNav: false,
  },
  mutations: {
    switchTheme(state) {
      state.dark = !state.dark;

      document.querySelector("meta[name=theme-color]").setAttribute("content", state.dark ? "#2e3440" : "#eceff4");

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return document.body.classList.replace((state.dark ? 'light' : 'dark'), (state.dark ? 'dark' : 'light'))
      }

      let transitionClass = (state.dark ? 'light-to-dark' : 'dark-to-light');
      document.body.classList.add(transitionClass);
      document.body.classList.remove((state.dark ? 'light' : 'dark'));
      setTimeout(() => {
        document.body.classList.add((state.dark ? 'dark' : 'light'));
        document.body.classList.remove(transitionClass);
      }, 600);
    },
    toggleMobileNav(state, payload) {
      state.showMobileNav = payload;
    }
  },
  actions: {
  },
  modules: {
  }
});
