import arrow from 'assets/images/triangle-icon.png'

function CollapsibleOpenButton({ isOpen, toggleOpen }) {
  return (
    <button
    onClick={ toggleOpen }
    className={ `collapsible-button border-none background-none ${isOpen ? 'open' : 'closed' }` }
    >
      <img src={arrow} alt={'arrow to toggle collapsible'} />
    </button>
  )
}

export default CollapsibleOpenButton

// example:
// <CollapsibleOpenButton isOpen={ isOpen } toggleOpen={ () => setIsOpen(!isOpen) } />
