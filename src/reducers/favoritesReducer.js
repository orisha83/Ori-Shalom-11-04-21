

const favoritesReducer = (state = { favorites: [] }, {type, payload}) => {
    switch (type) {
      case "ADD_TO_FAVORITES":
        return {
          favorites: [...state.favorites, payload],
        };
      case "REMOVE_FROM_FAVORITES":
        return {
          favorites: state.favorites.filter((x) => x.key !== payload.key),
        };
      default:
        return state;
    }
  };

  export default favoritesReducer;