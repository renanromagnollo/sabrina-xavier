export function slugCreator(text) {
    const getTextOnly = (t) => t.match(/[^?!.:;/"']/g).join('')
    const removeSpaces = (t) => t.replace(/\s+/g, '-')
    const textToLowerCase = (t) => t.toLowerCase()
    const removeAccents = (t) => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    // console.log(text)
    return textToLowerCase(removeAccents(removeSpaces(getTextOnly(text))))
}