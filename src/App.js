import React from 'react';
import Md from './MarkdownRenderer'

const App = () => (
  <div className="App">
    <Md render={`
      # This is an <h1> tag
      ## This is an <h2> tag
      ###### This is an <h6> tag
    `} />

    <Md render={`
      *This text will be italic*
      _This will also be italic_

      **This text will be bold**
      __This will also be bold__

      _You **can** combine them_
    `} />

    <Md render={`
      1. Item 1
      1. Item 2
      1. Item 3
         1. Item 3a
         1. Item 3b
    `} />

    <Md render={`
      It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)
    `} />


    <Md render={`
      Marked - Markdown Parser
      ========================

      [Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

      How To Use The Demo
      -------------------

      1. Type in stuff on the left.
      2. See the live updates on the right.

      That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:

      - **Preview:**  A live display of the generated HTML as it would render in a browser.
      - **HTML Source:**  The generated HTML before your browser makes it pretty.
      - **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
      - **Quick Reference:**  A brief run-down of how to format things using markdown.

      Why Markdown?
      -------------

      It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

      > The overriding design goal for Markdown's
      > formatting syntax is to make it as readable
      > as possible. The idea is that a
      > Markdown-formatted document should be
      > publishable as-is, as plain text, without
      > looking like it's been marked up with tags
      > or formatting instructions.

      [Marked](https://github.com/markedjs/marked/)
      [Markdown](http://daringfireball.net/projects/markdown/)
    `} />
  </div>
);

export default App;
