export const getCurrentDateFormatted = (): string => {
  return new Date().toISOString().split('T')[0].replace(/-/g, '')
}
