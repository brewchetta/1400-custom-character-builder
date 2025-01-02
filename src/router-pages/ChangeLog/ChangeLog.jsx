import React from 'react'

function ChangeLog() {
  return (
    <div>
        <h1>Change Log</h1>
        <p>We heard you like patch notes so we're adding a section so you can see what's new for the game and site.</p>

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