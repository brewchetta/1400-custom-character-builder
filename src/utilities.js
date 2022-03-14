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

export function buildUpgradedSkillsList(charSkills, ...newSkills) {
  console.log("NEW SKILLS: ", ...newSkills);
  const skills = {...charSkills}
  newSkills.forEach(newSkill => {
    if (!skills[newSkill]) {
      skills[newSkill] = 6
    } else if (skills[newSkill] >= 12) {
      console.error(`Could not increase ${newSkill} over a d12`)
    } else {
      skills[newSkill] += 2
    }
  })
  return skills
}
