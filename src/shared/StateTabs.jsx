import React from 'react'

// tabs: array - different tabs for tab states
// current: string - currently chosen tab
// onChoose: function - triggers on click tab event, feeds clicked tab name into callback
function StateTabs({ tabs, current, onChoose }) {

    const renderedTabs = tabs.map(t => <button key={t} className={current === t ? "background-dark-grey text-white padding-small" : "border-none text-black padding-small"} onClick={() => onChoose(t)}>{t}</button>)

    return (
    <div className="border-bottom-black margin-small">
        { renderedTabs }
    </div>
  )
}

export default StateTabs