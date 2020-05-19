import axios from 'axios';

export const state = () => ({
  stories: STORIES,
  currentStory: {},
});

// change state from here

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

/*
export const actions = {
  fetchStories(state) {
    return state.commit('setState', {
      name: 'stories',
      value: stories,
    });
  },
};
*/

/*
export const actions = {
  fetchLessons(state) {
    return axios.get('https://api-test.pa7lux.ru/streams').then(response => {
      return state.commit('setState', {
        name: 'lessons',
        value: response.data,
      });
    });
  },
  fetchLessonWithId(state, payload) {
    return axios
      .get(`https://api-test.pa7lux.ru/streams/${payload.id}`)
      .then(response => {
        return state.commit('setState', {
          name: 'currentLesson',
          value: response.data,
        });
      });
  },
};
*/
// get data about my state
export const getters = {
  getStories(state) {
    return state.stories;
  },
  getCurrentStory(state) {
    return state.currentStory;
  },
};

const STORIES = [
  {
    story_id: 1,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '1 Владимир Тен',
    story_text:
      'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
  },
  {
    story_id: 2,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '1 Владимир Познер',
    story_text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
  },
  {
    story_id: 3,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '1 Александр Тарханов',
    story_text: 'Я не могу победить свою пунктуальность в отличии от рака.',
  },
  {
    story_id: 4,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '1 Владимир Тен',
    story_text:
      'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
  },
  {
    story_id: 5,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '2 Владимир Познер',
    story_text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
  },
  {
    story_id: 6,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '2 Александр Тарханов',
    story_text: 'Я не могу победить свою пунктуальность в отличии от рака.',
  },
  {
    story_id: 7,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '2 Владимир Тен',
    story_text:
      'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
  },
  {
    story_id: 8,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '2 Владимир Познер',
    story_text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
  },
  {
    story_id: 9,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '3 Владимир Тен',
    story_text:
      'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
  },
  {
    story_id: 10,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '3 Владимир Познер',
    story_text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
  },
  {
    story_id: 11,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '3 Владимир Тен',
    story_text:
      'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
  },
  {
    story_id: 12,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '3 Владимир Познер',
    story_text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
  },
  {
    story_id: 13,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '4 Владимир Тен',
    story_text:
      'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
  },
  {
    story_id: 14,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '4 Владимир Познер',
    story_text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
  },
  {
    story_id: 15,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '4 Владимир Тен',
    story_text:
      'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
  },
  {
    story_id: 16,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '4 Владимир Познер',
    story_text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
  },
  {
    story_id: 17,
    photo_url:
      'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    photo_alt: 'Фото человека с историей',
    name: '5 Владимир Познер',
    story_text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
  },
];
