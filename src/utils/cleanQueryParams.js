export function cleanQueryParams(q) {
  const cleanedQuery = {};

  for (const key in q) {
    const value = q[key];

    // Skip falsy values except for `0` and `false`
    if (
      value === null ||
      value === undefined ||
      (typeof value === 'string' && !value.trim()) ||
      (Array.isArray(value) && value.length === 0)
    ) {
      continue;
    }

    // Handle Date objects
    if (value instanceof Date && !isNaN(value)) {
      // Format date as ISO string (YYYY-MM-DD)
      cleanedQuery[key] = value.toISOString().split('T')[0];
      continue;
    }

    // Handle arrays
    if (Array.isArray(value)) {
      // Check for Date objects within arrays
      cleanedQuery[key] = value
        .map((v) => {
          if (v instanceof Date && !isNaN(v)) {
            return v.toISOString().split('T')[0]; // Format date as ISO string (YYYY-MM-DD)
          }
          return String(v).trim();
        })
        .filter(Boolean); // Trim and filter out empty values
      continue;
    }

    // Handle other values
    cleanedQuery[key] = String(value).trim();
  }

  // Flatten arrays into repeated keys
  const params = new URLSearchParams();
  for (const key in cleanedQuery) {
    const value = cleanedQuery[key];
    if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, v)); // Append each array item as a separate key-value pair
    } else {
      params.set(key, value); // Set single values
    }
  }

  // Return the query string
  const queryString = params.toString();
  return queryString ? `?${queryString}` : '';
}
