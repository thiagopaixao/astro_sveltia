export function SetColorsVars(colors = {}) {
  if(typeof colors !== 'object') return

  return Object.entries(colors).reduce((acc, curr) => {
    return curr[1] ? acc + `--clr-${curr[0]}: ${curr[1]};` : acc;
  }, '');
}