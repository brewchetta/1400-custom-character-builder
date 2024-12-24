import CreateContextWrapper from './_useContextState'
import { getLocalDarkMode } from 'utils/local-storage'

const browserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const initialDarkMode = getLocalDarkMode() !== null ? getLocalDarkMode() : browserDarkMode

const [useDarkModeContext, DarkModeContextProvider] = CreateContextWrapper(initialDarkMode, "darkMode")

export { useDarkModeContext, DarkModeContextProvider }
