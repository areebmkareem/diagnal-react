export const getMoviesAPI = (page) => {
  return require(`../../Data/CONTENTLISTINGPAGE-PAGE${page}.json`);
};
