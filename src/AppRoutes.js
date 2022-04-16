import { Routes, Route } from 'react-router-dom'
import CharacterForm from '1-CharacterForm'
import CharacterSheet from '4-CharacterSheet'
import CharactersIndex from '6-CharactersIndex'
import { CharacterContextProvider } from 'context/CharacterContext'
import { EditableContextProvider } from 'context/EditableContext'

// ALL ROUTES ADDED HERE

function AppRoutes(props) {
  return (
    <Routes>
      <Route path='/' element={<CharactersIndex />} />
      <Route path='create-character' element={<CharacterForm />} />
      <Route path='characters/:id' element={
        <EditableContextProvider>
          <CharacterContextProvider>
            <CharacterSheet />
          </CharacterContextProvider>
        </EditableContextProvider>
      } />
    </Routes>
  )
}

export default AppRoutes
