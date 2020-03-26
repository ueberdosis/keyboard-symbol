# keyboard-symbol
Convert key names to symbols like ⌘, ⇧ or ⌥

## Usage
```js
import keyboardSymbol from 'keyboard-symbol'

keyboardSymbol('meta', 'mac') // ⌘
keyboardSymbol('meta', 'win') // ❖
keyboardSymbol('control', 'mac') // ⌃
keyboardSymbol('control', 'win') // ctrl
keyboardSymbol('unknownKeyName', 'mac') // unknownKeyName
```