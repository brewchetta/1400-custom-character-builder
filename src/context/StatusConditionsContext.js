import CreateStatefulContextWrapper from './_useContextState'

const [useStatusConditionsContext, StatusConditionsContextProvider] = CreateStatefulContextWrapper({injured: false, luck: true}, 'statusConditions')

export {useStatusConditionsContext, StatusConditionsContextProvider}
