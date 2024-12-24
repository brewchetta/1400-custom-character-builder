export function capitalize(string) {
  return toSpaceCase(string).split(" ").map(s => s[0].toUpperCase() + s.slice(1)).join(" ")
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


// newSkills --> { name: String, diceSize: Number }
// newSkills with no diceSize will either default to 8 or increase a previous skill size by 2
// newSkills with diceSize will set skill to that dice size
// skills cannot be upgraded past diceSize 12
export function buildUpgradedSkillsList(charSkills, ...newSkills) {
  const skills = [...charSkills]

  newSkills.forEach(newSkill => {
    const foundSkill = skills.find(s => s.name === newSkill.name)
    if (!newSkill?.name) return // exit if skill is undefined

    if (!foundSkill && (!newSkill.diceSize || newSkill.diceSize <= 12)) { // for valid diceSizes
      skills.push({ name: newSkill.name, diceSize: newSkill.diceSize || 8 })

    } else if (!foundSkill) { // for invalid diceSizes
      skills.push({ name: newSkill.name, diceSize: 12 })

    } else {
      foundSkill.diceSize = newSkill.diceSize || foundSkill.diceSize + 2
      if (foundSkill.diceSize > 12) foundSkill.diceSize = 12
    }
    
  })
  return skills
}
