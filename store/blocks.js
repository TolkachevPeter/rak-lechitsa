import axios from 'axios';
export const state = () => ({
  blocks: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  // fetchBlocks(state) {
  //   return axios.get(process.env.BASE_URL + '/blocks').then(response => {
  //     return state.commit('setState', {
  //       name: 'blocks',
  //       value: response.data,
  //     });
  //   });
  // },

  fetchBlocks(state) {
    return axios
      .get(process.env.BASE_URL + '/blocks')
      .then(response => {
        return state.commit('setState', {
          name: 'blocks',
          value: response.data,
        });
      })
      .catch(error => console.log('fetchBlocks', error));
  },
};

export const getters = {
  getBlocks(state) {
    return state.blocks;
  },
};

/*[
  {
    id: 1,
    block: 'cover',
    hashtag: '#РАКЛЕЧИТСЯ',
    title: null,
    note: null,
    text: null,
    created_at: '2020-05-20T17:45:12.817Z',
    updated_at: '2020-05-20T17:45:12.817Z',
    extraTexts: [],
  },
  {
    id: 2,
    block: 'note-1',
    hashtag: '#ЭТОНЕЛЕЧИТСЯ',
    title: 'И В ОТЛИЧИЕ ОТ РАКА,',
    note: null,
    text: null,
    created_at: '2020-05-20T17:46:47.031Z',
    updated_at: '2020-05-20T17:46:47.031Z',
    extraTexts: [],
  },
  {
    id: 3,
    block: 'note-2',
    hashtag: '#ЭТОНЕЛЕЧИТСЯ',
    title: 'РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ',
    note: null,
    text: null,
    created_at: '2020-05-20T17:47:33.139Z',
    updated_at: '2020-05-20T17:47:33.139Z',
    extraTexts: [],
  },
  {
    id: 4,
    block: 'videos',
    hashtag: null,
    title: 'Истории людей, победивших рак, но не свои привычки',
    note: 'Все видео вы можете найти на нашем YouTube канале.',
    text:
      '<p>Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии, страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с их историями.</p>',
    created_at: '2020-05-20T17:53:53.864Z',
    updated_at: '2020-05-20T17:53:53.864Z',
    extraTexts: [],
  },
  {
    id: 5,
    block: 'stories',
    hashtag: null,
    title: 'Истории неизлечимых привычек',
    note: null,
    text: null,
    created_at: '2020-05-20T17:54:48.594Z',
    updated_at: '2020-05-20T17:54:48.594Z',
    extraTexts: [],
  },
  {
    id: 6,
    block: 'instagram',
    hashtag: null,
    title: 'Инстаграм',
    note: null,
    text:
      '<p>Два раза в неделю мы просматриваем все посты по хештегу #этонелечится. Все истории, где нет нецензурных выражений и запрещенного контента попадают сюда. Следите за правильным написанием хештега, чтобы мы не пропустили вашу историю.</p>',
    created_at: '2020-05-20T17:56:04.847Z',
    updated_at: '2020-05-20T17:56:04.847Z',
    extraTexts: [],
  },
  {
    id: 8,
    block: 'statistics',
    hashtag: null,
    title: 'Статистика по онкозаболеваниям',
    note: null,
    text: null,
    created_at: '2020-05-20T18:01:51.067Z',
    updated_at: '2020-05-20T18:01:51.067Z',
    extraTexts: [],
  },
  {
    id: 10,
    block: 'footer',
    hashtag: null,
    title: 'Спасибо всем, кто помог состояться этому проекту',
    note: null,
    text: '<p>Рак Лечится</p>',
    created_at: '2020-05-20T18:05:37.312Z',
    updated_at: '2020-05-20T18:05:37.312Z',
    extraTexts: [],
  },
  {
    id: 11,
    block: 'header',
    hashtag: null,
    title: 'Проект Благотворительного Фонда Константина Хабенского',
    note: null,
    text: null,
    created_at: '2020-05-20T18:06:01.276Z',
    updated_at: '2020-05-20T18:06:01.276Z',
    extraTexts: [],
  },
  {
    id: 7,
    block: 'story',
    hashtag: null,
    title: 'Расскажите свою историю',
    note: null,
    text:
      '<p>Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта поделиться своей историей неизлечимых привычек, навязчивых идей и болезненных привязанностей.</p>',
    created_at: '2020-05-20T17:57:49.369Z',
    updated_at: '2020-05-20T17:57:49.369Z',
    extraTexts: [
      {
        id: 1,
        title: '1-й вариант',
        text:
          '<p>Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю после проверки. Пожалуйста, заполняйте все пункты корректно, если вы испытаете какие-то сложности, воспользуйтесь 2-м вариантом.</p>',
      },
      {
        id: 3,
        title: '2-й вариант',
        text:
          '<p>Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.</p>',
      },
    ],
  },
  {
    id: 9,
    block: 'about',
    hashtag: '#РАКЛЕЧИТСЯ',
    title: 'О проекте',
    note: null,
    text:
      '<p>Этот проект был создан благотворительным фондом Константина Хабенского.</p>',
    created_at: '2020-05-20T18:04:11.903Z',
    updated_at: '2020-05-20T18:04:11.903Z',
    extraTexts: [
      {
        id: 2,
        title: 'Рак Лечится',
        text:
          '<p>Есть вещи, которые не лечатся. Особенности характера, страстные увлечения, привычки, ставшие частью нашего «я», фобии, которые мы приобрели в детстве. Список можно продолжать до бесконечности, но одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и лучшее доказательство — люди с их неизлечимыми особенностями, которые сумели победить рак.&lt;br&gt;<br>&nbsp; &nbsp; &nbsp; Рак лечится — проект Благотворительного Фонда Константина Хабенского и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей к раку и заставить каждого поверить: онкологическое заболевание — это не приговор.</p>',
      },
      {
        id: 4,
        title: 'Фонд Хабенского',
        text:
          '<p>Благотворительный Фонд Константина Хабенского с 2008 года помогает детям с онкологическими и другими тяжелыми заболеваниями головного мозга. Фонд не только поддерживает семью заболевшего ребенка в самый сложный момент, оплачивая обследования, лечение и медицинские препараты, но и в целом меняет систему оказания помощи детям с опухолями мозга в России.</p>',
      },
    ],
  },
];
*/
