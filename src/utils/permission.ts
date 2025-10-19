/**
 * @desc 判断是否有权限
 * @param access 需要的权限
 * @param auth 用户的权限
 * @returns 如果有权限则返回true，否则返回false
 */
function hasPermission(access: string[], auth: string[]) {
  const set1 = new Set(access)
  return auth.some((item) => set1.has(item))
}

export { hasPermission }
