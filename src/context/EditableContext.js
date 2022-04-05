import CreateStatefulContextWrapper from './_useContextState'

const [useEditableContext, EditableContextProvider] = CreateStatefulContextWrapper(false, 'editable')

export {useEditableContext, EditableContextProvider}
