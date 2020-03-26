# keyboard-symbol
Convert key names to symbols like ⌘, ⇧, ⌥ and many more

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

## List of symbols

⌃ ⌥ ⌘ ❖ ⇪ ⇧ ↑ → ↓ ← ↩ ⌫ ⌦ ⎋ ⇥ ⇞ ⇟ ␣ ctrl alt ([source](https://github.com/ueberdosis/keyboard-symbol/blob/master/src/keyboard-symbol.js))
