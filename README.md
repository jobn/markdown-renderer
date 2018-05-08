# React component that renders markdown input

```
import Md from './MarkdownRenderer';

...

<Md render={`
  # This is an <h1> tag
  ## This is an <h2> tag
  ###### This is an <h6> tag
`} />
```

see App.js for further usage examples

to start demo: ```yarn start```

dependencies:
- [marked](https://github.com/markedjs/marked)
- [common-tags](https://github.com/declandewet/common-tags)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

