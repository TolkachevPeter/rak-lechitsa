export const state = () => ({
  popupShown: false,
  qiuzPopupShown: false,
  isSocLinksShown: false,
  menuMobileShow: false,
  isPopupShown: false,
});

// change state from here

export const mutations = {
  togglePopUp(state) {
    return (state.popupShown = !state.popupShown);
  },

  togglePopupState(state) {
    return (state.isPopupShown = !state.isPopupShown);
  },

  toggleQiuzPopup(state) {
    return (state.qiuzPopupShown = !state.qiuzPopupShown);
  },
  toggleSocLinksPopup(state) {
    return (state.isSocLinksShown = !state.isSocLinksShown);
  },

  closeQiuzPopup(state) {
    return (state.qiuzPopupShown = false);
  },
  closeSocLinksPopup(state) {
    return (state.isSocLinksShown = false);
  },

  toggleMenuMobileShow(state) {
    return (state.menuMobileShow = !state.menuMobileShow);
  },
};

export const getters = {
  getPopupShown(state) {
    return state.popupShown;
  },

  getQiuzPopupState(state) {
    return state.qiuzPopupShown;
  },
  getSocLinksPopupState(state) {
    return state.isSocLinksShown;
  },

  getPopupState(state) {
    return state.isPopupShown;
  },

  getmenuMobileShown(state) {
    return state.menuMobileShow;
  },
};
