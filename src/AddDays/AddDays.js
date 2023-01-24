export const AddDays = (date, days) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  result = (result.getMonth() + 1) + '/' + result.getDate() + '/' + result.getFullYear();
  return result;
}