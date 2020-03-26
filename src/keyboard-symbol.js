export default function keyboardSymbol(key = '', os = 'mac') {
  const formattedKey = key.toLowerCase()

  const baseFormats = {
    capslock: '⇪',
    shift: '⇧',
    arrowup: '↑',
    arrowright: '→',
    arrowdown: '↓',
    arrowleft: '←',
    enter: '↩',
    backspace: '⌫',
    delete: '⌦',
    escape: '⎋',
    tab: '⇥',
    pageup: '⇞',
    pagedown: '⇟',
    space: '␣',
  }

  const macFormats = {
    control: '⌃',
    alt: '⌥',
    option: '⌥',
    meta: '⌘',
    super: '⌘',
    cmd: '⌘',
    command: '⌘',
  }

  const winFormats = {
    control: 'ctrl',
    option: 'alt',
    meta: '❖',
    super: '❖',
    cmd: '❖',
    command: '❖',
  }

  const formats = os === 'mac'
    ? { ...baseFormats, ...macFormats }
    : { ...baseFormats, ...winFormats }

  return formats[formattedKey] ? formats[formattedKey] : key
}