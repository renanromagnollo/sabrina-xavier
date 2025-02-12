export function extractHygraphRichText(richText) {
  return richText.children
    .map(child => child.children?.map(inner => inner.text).join(' ') || '')
    .join('\n');
};