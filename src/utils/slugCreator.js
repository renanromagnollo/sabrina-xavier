export function slugCreator(text) {
  try {
    const getTextOnly = (t) => t.match(/[^?!.:;/"']/g).join("");
    const removeSpaces = (t) => t.replace(/\s+/g, "-");
    const textToLowerCase = (t) => t.toLowerCase();
    const removeAccents = (t) =>
      t.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // console.log(text)
    return textToLowerCase(removeAccents(removeSpaces(getTextOnly(text))));
  } catch (error) {
    console.log("slugCreator: NO SLUG!");
    return "";
  }
}

export function setSlugInPosts(posts) {
  return posts.map((post) => ({ ...post, slug: slugCreator(post.title) }));
}
