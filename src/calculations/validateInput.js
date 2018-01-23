export const validateInput = state => {
  Object.entries(state).forEach(([key, val]) => {
    if (typeof val === 'string') {
      //state[key] = Number(val)
      state[key] = val
        console.log(val, Number(val));
    }
  })
  return state
}
