
// we use this method across the file, so separate it out
//it uses enzymes find method to find an attribute with a value.
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}