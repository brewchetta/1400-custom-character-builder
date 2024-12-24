import CreateContextWrapper from './_useContextState'

const [useLoadingContext, LoadingContextProvider] = CreateContextWrapper(true, "loading")

export {useLoadingContext, LoadingContextProvider}