export default async function({ store, route, params }) {
  await store.dispatch('stories/fetchStories');
  await store.dispatch('statistics/fetchStatistics');
  await store.dispatch('blocks/fetchBlocks');
  await store.dispatch('videos/fetchVideos');
  await store.dispatch('instagram/GET_PHOTOS');

  if (route.params.id) {
    await store.dispatch('stories/fetchStoryWithId', { id: route.params.id });
  }
}

// export async function({ store, params }) {
//   await store.dispatch('instagram/GET_PHOTOS');
// }
