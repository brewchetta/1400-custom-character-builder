export function capitalize(string) {
  return toSpaceCase(string).split(" ").map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(" ")
}

export function toSpinalCase(string) {
  return string.toLowerCase().replace(/[\s_]+/g, "-")
}

export function toSpaceCase(string) {
  return string.replace(/[_-]/g, " ")
}
