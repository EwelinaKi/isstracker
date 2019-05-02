
async function getActualPos() {
  const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
  const body = await response.json();
  return body;
}


// export const apiFetch = api;
export default { getActualPos };
