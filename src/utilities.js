export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

export function toSpinalCase(string) {
  return string.toLowerCase().replace(/[\s_]+/g, "-")
}
