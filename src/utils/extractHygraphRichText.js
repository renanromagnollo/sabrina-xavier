export function extractHygraphRichText(richText) {
  if (richText) {
    return richText.children?.map(child => child.children?.map(inner => inner.text).join(' ') || '')
      .join('\n');
  }
  return null
};