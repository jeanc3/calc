export const validateInput = state => {
  Object.entries(state).forEach(([key, val]) => {
    if (typeof val === 'string') {
      val = Number(val)
    }
  })
  return state


}
