export const formatNumber = (value) => {
  if (value < 10000) {
    return value.toString();
  } else if (value < 1000000) {
    return `${(value / 1000).toFixed(1)}K`;
  } else {
    return `${(value / 1000000).toFixed(1)}M`;
  }
};
