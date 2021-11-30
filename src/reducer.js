export function reducer(state, {type, payload}) {
  switch (type) {
    case 'DISABLE_LOADING':
      return{
        ...state,
        loading: false
      }
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload
      }
    default:
      return state
  }
}