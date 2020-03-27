# keyboard-symbol
Convert key names to symbols like ⌘, ⇧, ⌥ and many more. Supports common symbols for Mac and Windows keyboards.

[![](https://img.shields.io/npm/v/keyboard-symbol.svg?label=version)](https://www.npmjs.com/package/keyboard-symbol)
[![](https://img.shields.io/npm/dm/keyboard-symbol.svg)](https://npmcharts.com/compare/keyboard-symbol?minimal=true)
[![](https://img.shields.io/npm/l/keyboard-symbol.svg)](https://www.npmjs.com/package/keyboard-symbol)
[![](https://img.badgesize.io/https://unpkg.com/keyboard-symbol/dist/keyboard-symbol.js?compression=gzip&label=size&colorB=000000)](https://www.npmjs.com/package/keyboard-symbol)

## List of supported symbols

⌃ ⌥ ⌘ ❖ ⇪ ⇧ ↑ → ↓ ← ↩ ⌫ ⌦ ⎋ ⇥ ⇞ ⇟ ␣ ctrl alt ([source](https://github.com/ueberdosis/keyboard-symbol/blob/master/src/keyboard-symbol.js))

## Install
```
npm install keyboard-symbol
```

## Usage
```js
import keyboardSymbol from 'keyboard-symbol'

keyboardSymbol('meta', 'mac')
//=> ⌘

keyboardSymbol('meta', 'win')
//=> ❖

keyboardSymbol('control', 'mac')
//=> ⌃

keyboardSymbol('control', 'win')
//=> ctrl

keyboardSymbol('unknownKeyName', 'mac')
//=> unknownKeyName
```

## API

### keyboardSymbol(key, OS)

#### key

Type: `string`\
Default: `''`

Your [KeyboardEvent.key](https://developer.mozilla.org/de/docs/Web/API/KeyboardEvent/key).

#### OS

Type: `string`\
Default: `mac`

Can be `mac` or `win`.
