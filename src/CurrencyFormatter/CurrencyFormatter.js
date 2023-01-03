export const currencyFormatter = (strValue) => {
  if (typeof strValue === 'undefined' || strValue === null) return '';
  strValue = strValue.toString();
  const pos = strValue.indexOf('.');
  if (pos <= 0) {
    return '';
  }

  const left = strValue.substring(0, pos);
  let right = strValue.substring(pos + 1);

  if (right.length === 1) {
    right += '0';
  } else if (right.length > 2) {
    right = right.substring(0, 2).toString();
  }


  return `${left}.${right}`;
}


// 1.29
// 1.2
// "bullshit"
// "1-1-2023"