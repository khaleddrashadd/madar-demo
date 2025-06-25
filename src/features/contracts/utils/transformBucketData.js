export function transformBucketGrowthRateData(input) {
  // Initialize an empty array to store the transformed data
  const result = [];

  // Create a map to group contractsCount by dateLabel
  const dateMap = {};

  // Iterate through each bucketStatus object in the input
  input?.forEach((bucket) => {
    const status = bucket.bucketStatus;
    bucket.points?.forEach((point) => {
      const dateLabel = point.dateLabel;
      const contractsCount = point.contractsCount;

      // Initialize the date entry if it doesn't exist
      if (!dateMap[dateLabel]) {
        dateMap[dateLabel] = { dateLabel };
      }

      // Assign the contractsCount to the corresponding bucketStatus
      dateMap[dateLabel][status] = contractsCount;
    });
  });

  // Convert the dateMap object into an array of objects
  for (const dateLabel in dateMap) {
    result.push(dateMap[dateLabel]);
  }
  return result;
}
