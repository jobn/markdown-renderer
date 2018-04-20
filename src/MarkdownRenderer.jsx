import React from 'react'
import marked from 'marked'
import { stripIndent } from 'common-tags'

const procesTag = string => stripIndent`${string}`
const convertToHTML = string => marked(string, { sanitize: true })

const MarkdownRenderer = ({ render }) => (
  <div dangerouslySetInnerHTML={{ __html: convertToHTML(procesTag(render)) }} />
)

export default MarkdownRenderer
