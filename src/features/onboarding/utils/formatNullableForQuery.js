export const formatNullableForQuery = (data) => {
  const modifiedData = { ...data };
  Object.keys(data).forEach((key) => {
    if (modifiedData[key] === null || modifiedData[key] === undefined) {
      modifiedData[key] = '--'; // Replace null or undefined with '--'
    }
  });
  return modifiedData;
};
