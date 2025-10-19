/** 判断 path 是否为外链 */
export const isExternal = (path: string) => {
  const reg = /^(?:https?:|mailto:|tel:)/
  return reg.test(path)
}
