export const colorMap = {
  Brown: '#6d5c4a',
  Black: '#11111d',
  Gray: '#b2b0b3',
  Navy: '#171727',
  Red: '#920624',
  Beige: '#e4e2d9',
  Camal: '#482913',
  Blue: '#617599',
  White: '#f6f4f4',
  Chocolate: '#291f1c',
  Pink: '#edcaca'
}

export function getColorValue(colorName) {
  return colorMap[colorName] || colorName.toLowerCase()
}
