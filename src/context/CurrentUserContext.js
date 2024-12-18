import CreateContextWrapper from './_useContextState'

const [useCurrentUserContext, CurrentUserContextProvider] = CreateContextWrapper(null, "currentUser")

export {useCurrentUserContext, CurrentUserContextProvider}
