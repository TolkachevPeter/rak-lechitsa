import axios from 'axios';

export const state = () => ({
  // instgramData: INSTADATA,
  instgramData: {},
});

// change state from here

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const getters = {
  getInstagramData(state) {
    return state.instgramData;
  },
  //   getCurrentStory(state) {
  //     return state.currentStory;
  //   },
};

// export const actions = {
//   async GET_PHOTOS({ commit }) {
//     const data = await this.$axios.$get(
//       'https://www.instagram.com/raklechitsa/?__a=1'
//     );
//     const formatData = getPosts(data);
//     // commit('addPhotos', formatData);
//     commit('setState', formatData);
//   },
// };

export const actions = {
  GET_PHOTOS(state, payload) {
    return axios
      .get('https://www.instagram.com/raklechitsa/?__a=1')
      .then(response => {
        return state.commit('setState', {
          name: 'instgramData',
          value: getPosts(response.data),
        });
      })
      .catch(error => console.log('fetchGET_PHOTOS', error));
  },
};

const getPosts = data => {
  return data.graphql.user.edge_owner_to_timeline_media.edges.map(post => {
    const {
      node: { display_url, accessibility_caption, shortcode },
    } = post;
    return {
      display_url,
      accessibility_caption,
      url: `https://www.instagram.com/p/${shortcode}`,
    };
  });
};

const INSTADATA = [
  {
    inst_id: 1,
    inst_url:
      'https://images.unsplash.com/photo-1578496781985-452d4a934d50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    inst_alt: 'Фото из инстаграма',
    inst_post_url: '#',
  },
  {
    inst_id: 2,
    inst_url:
      'https://images.unsplash.com/photo-1495653797063-114787b77b23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    inst_alt: 'Фото из инстаграма',
    inst_post_url: '#',
  },
  {
    inst_id: 3,
    inst_url:
      'https://images.unsplash.com/photo-1578496781379-7dcfb995293d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    inst_alt: 'Фото из инстаграма',
    inst_post_url: '#',
  },
  {
    inst_id: 4,
    inst_url:
      'https://images.unsplash.com/photo-1576089172869-4f5f6f315620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2640&q=80',
    inst_alt: 'Фото из инстаграма',
    inst_post_url: '#',
  },
  {
    inst_id: 5,
    inst_url:
      'https://images.unsplash.com/photo-1581595220975-119360b1c63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
    inst_alt: 'Фото из инстаграма',
    inst_post_url: '#',
  },
  {
    inst_id: 6,
    inst_url:
      'https://images.unsplash.com/photo-1581056771392-8a90ddb76831?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    inst_alt: 'Фото из инстаграма',
    inst_post_url: '#',
  },
  {
    inst_id: 7,
    inst_url:
      'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2054&q=80',
    inst_alt: 'Фото из инстаграма',
    inst_post_url: '#',
  },
  {
    inst_id: 8,
    inst_url:
      'https://images.unsplash.com/photo-1581056771188-021d4a0f8ec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    inst_alt: 'Фото из инстаграма',
    inst_post_url: '#',
  },
];
