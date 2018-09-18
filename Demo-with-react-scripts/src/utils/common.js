export function clone(oldObject, newObject) {
  return { ...oldObject, ...newObject };
}
