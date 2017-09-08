# react-native-horizontal-progress-bar

Simple animated horizontal <ProgressBar /> component for React Native.

--------------------------------

[![Travis](https://img.shields.io/travis/jkomyno/react-native-horizontal-progress-bar.svg)](https://travis-ci.org/jkomyno/react-native-horizontal-progress-bar) [![npm](https://img.shields.io/npm/v/react-native-horizontal-progress-bar.svg)](https://npmjs.com/package/react-native-horizontal-progress-bar) [![npm](https://img.shields.io/npm/dm/react-native-horizontal-progress-bar.svg)](https://npmjs.com/package/react-native-horizontal-progress-bar) [![Issue Stats](https://img.shields.io/issuestats/i/github/jkomyno/react-native-horizontal-progress-bar.svg)](http://github.com/jkomyno/react-native-horizontal-progress-bar/issues)

# Installation

- `yarn add react-native-horizontal-progress-bar`

Or, if you prefer using npm:

- `npm i -S react-native-horizontal-progress-bar`

## Available Props

Check the [TypeScript type definition file](src/index.d.ts) for further info.

Prop     | Type   | Default   | Description
-------- | ------ | --------- | -----------------------------------------
progress | number |           | Current progress of the <ProgressBar /> component
animated | bool   | true      | If set to false, the animation will be disabled
color    | string | '#7D85BE' | Background color of the progress bar
duration | number | 500       | Duration of the transition between the current progress and the next one.
style    |        |           | Style of the ProgressBar container View. Check below for the default style definition

```javascript
  const defaultStyle = {
    width: '100%',
    height: 10,
    backgroundColor: 'transparent',
  };
```

## Example (TODO)

## Contributing

PRs are obviously welcome! :octocat:

## Available scripts

- **lint**: verify that the eslint configuration is respected

## License

[MIT](LICENSE)
