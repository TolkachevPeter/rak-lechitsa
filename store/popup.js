export const state = () => ({
  popupShown: false,
  qiuzPopupShown: false,
  menuMobileShow: false,
});

// change state from here

export const mutations = {
  togglePopUp(state) {
    return (state.popupShown = !state.popupShown);
  },

  toggleQiuzPopUp(state) {
    return (state.qiuzPopupShown = !state.qiuzPopupShown);
  },
  toggleMenuMobileShow(state) {
    return (state.menuMobileShow = !state.menuMobileShow);
  },
};

export const getters = {
  getPopupShown(state) {
    return state.popupShown;
  },

  getQiuzPopupShown(state) {
    return state.qiuzPopupShown;
  },

  getmenuMobileShown(state) {
    return state.menuMobileShow;
  },
};
