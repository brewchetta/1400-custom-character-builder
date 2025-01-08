import React from 'react'

function ChangeLog() {
  return (
    <div className="list-style-square">
        <h1>Change Log</h1>
        <p>Previous and future patch notes for both the game and website will go here.</p>

        <h2>01.08.2025</h2>
        <h3>Quarter Century Fixes</h3>
        <ul>
          <li>You may now sign in with either your email or username</li>
          <li>You may now banish characters to the shadow realm with the Delete Character button</li>
          <li>Dark mode icons should be consistent across devices and browsers</li>
          <li>Skill names have been changed for better clarity (older characters will not be updated)</li>
          <li>Removed exhaust option for spells/rituals</li>
          <li>Removed obsolete custom rules section of rulebook</li>
          <li>Images get preloaded for a smoother experience</li>
          <li>The rulebook is now available without logging in</li>
          <li>Each section of the character sheet can now be edited individually by clicking the edit icon</li>
          <li>Characters can now be assigned a gender unless you want to leave it blank to spice up their mystery</li>
          <li>Added a search bar to the store</li>
          <li>Added version number and changelog accessible in the lower right hand corner</li>
          <li>Added distinct background for character trainings</li>
          <li>Fixed not being able to toggle light/dark mode without logging in</li>
          <li>Fixed buying items not actually buying the items</li>
          <li>Fixed items moving forward not interfering with each other's durability (current items will need to be removed and re-added)</li>
          <li>Fixed dropdowns being unreadable</li>
          <li>Fixed dropdown options being blue on certain mobile browsers</li>
          <li>Fixed gold getting accidentally removed when leveling up spells</li>
        </ul>

        <h2>12.25.2024</h2>
        <h3>Site 2.0 Launched with User Accounts</h3>
        <ul>
            <li>Site 2.0 launched!</li>
            <li>Characters are now stored in our shiny new database</li>
            <li>You may now login to see all your beautiful characters from any device</li>
            <li>Added character trainings</li>
            <li>Characters can access  'level up' screen to learn new skills, trainings, or spells</li>
            <li>Tweaks to rules for spellcasting and maximum number of spells</li>
            <li>Removed certain unused optional rules</li>
            <li>Various bug fixes</li>
        </ul>

        <h2>10.23.2024</h2>
        <h3>The Darkmode Update</h3>
        <ul>
            <li>Added darkmode option</li>
            <li>Unlisted and unlistable bug fixes</li>
        </ul>
    </div>
  )
}

export default ChangeLog