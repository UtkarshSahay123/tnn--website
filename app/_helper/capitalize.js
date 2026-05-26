export function capitalize(string) {
  if (!string) return ""; // handle empty string
  return string.charAt(0).toUpperCase() + string.slice(1);
}
