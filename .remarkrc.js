module.exports = {
  plugins: [
    'remark-frontmatter',
    'remark-preset-lint-recommended',
    'remark-preset-lint-consistent',
    'remark-preset-lint-markdown-style-guide',
  ],
  settings: {
    listItemIndent: '1',
    fences: true,
    incrementListMarker: true,
    emphasis: '*',
    strong: '*',
    bullet: '-',
    incrementListMarker: false,
    commonmark: true,
    footnotes: true,
    pedantic: true,
    gfm: true,
    extensions: ['.md', '.mdx'],
  },
};
