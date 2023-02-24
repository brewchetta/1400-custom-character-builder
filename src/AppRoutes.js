import { Routes, Route } from 'react-router-dom'
import NewCharacterForm from 'router-pages/NewCharacterFormPage'
import CharacterSheet from 'router-pages/CharacterSheetPage/'
import CharactersIndex from 'router-pages/CharactersIndexPage'
import Rulebook from 'router-pages/RulebookPage'
import { CharacterContextProvider } from 'context/CharacterContext'
import { EditableContextProvider } from 'context/EditableContext'

// ALL ROUTES ADDED HERE
// - NewCharacterForm
// - CharactersIndex
// - CharacterSheet

function AppRoutes(props) {
  return (
    <Routes>
      <Route path='/' element={<CharactersIndex />} />
      <Route path='create-character' element={<NewCharacterForm />} />
      <Route path='characters/:nameSlug/:id' element={
        <EditableContextProvider>
          <CharacterContextProvider>
            <CharacterSheet />
          </CharacterContextProvider>
        </EditableContextProvider>
      } />
      <Route path='rulebook' element={<Rulebook />} />      
    </Routes>
  )
}

export default AppRoutes
