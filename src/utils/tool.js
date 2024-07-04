export const changeUnit = (unit) => {
  switch(unit) {
    case '米':
      return 'METER'
    case '千米':
      return 'KILOMETER'
    case 'METER':
      return '米'
    case 'KILOMETER':
      return '千米'
    case 'area-meter':
      return '平方米'
    case 'area-kilometer':
      return '平方千米'
  }
}
