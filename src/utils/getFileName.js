export function getFileName(contentDisposition, fallback) {
  const regex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
  const matches = regex.exec(contentDisposition);
  if (matches != null && matches[1]) {
    return matches[1].replace(/['"]/g, '');
  }
  return fallback;
}
