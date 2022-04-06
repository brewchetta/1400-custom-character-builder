import CreateStatefulContextWrapper from './_useContextState'

const [useStatusConditionsContext, StatusConditionsContextProvider] = CreateStatefulContextWrapper({hindered: false}, 'statusConditions')

export {useStatusConditionsContext, StatusConditionsContextProvider}
