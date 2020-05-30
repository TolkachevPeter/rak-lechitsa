export const state = () => ({
  popupShown: false,
  qiuzPopupShown: false,
  isSocLinksShown: false,
  menuMobileShow: false,
  isPopupShown: false,
  isContactFormShown: false,
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

  toggleContactFormPopup(state) {
    return (state.isContactFormShown = !state.isContactFormShown);
  },
  closeContactFormPopup(state) {
    return (state.isContactFormShown = false);
  },

  toggleMenuMobileShow(state) {
    return (state.menuMobileShow = !state.menuMobileShow);
  },

  closeMenuMobile(state) {
    return (state.menuMobileShow = false);
  },
};

export const actions = {
  closeAllPopups(state) {
    state.commit('closeQiuzPopup');
    state.commit('closeSocLinksPopup');
    state.commit('closeContactFormPopup');
    state.commit('togglePopupState');
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

  getContactFormState(state) {
    return state.isContactFormShown;
  },
  getmenuMobileShown(state) {
    return state.menuMobileShow;
  },
};
