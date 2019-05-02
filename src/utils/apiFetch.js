
async function getActualPos() {
  const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
  const body = await response.json();
  return body;
}

export default { getActualPos };
