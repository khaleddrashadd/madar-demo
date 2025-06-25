export const numberSeparator = (number) => {
  return number ? number?.toLocaleString('EN-GB') : '--';
};
