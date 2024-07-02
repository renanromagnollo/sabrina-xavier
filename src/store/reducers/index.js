export function reducer(state, action) {
  switch (action.type) {
    case "postsAdd":
      return { ...state, posts: action.payload };
    case "homeAdd":
      return { ...state, hygraphHome: action.payload };
    case "instagramPostsAdd": {
      return { ...state, instagramPosts: action.payload };
    }
    default:
      return state;
  }
}
