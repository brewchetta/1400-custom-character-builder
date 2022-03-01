export function capitalize(string) {
  return toSpaceCase(string).split(" ").map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(" ")
}

export function toSpinalCase(string) {
  return string.toLowerCase().replace(/[\s_]+/g, "-")
}

export function toSpaceCase(string) {
  return string.replace(/[_-]/g, " ")
}

export function randomArrayItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function randomAttribute(allAttributes, currentAttributes) {
  const possibleAttributes = allAttributes.filter(attr => !currentAttributes.includes(attr))
  if (possibleAttributes.length) {
    return randomArrayItem(possibleAttributes)
  }
}
