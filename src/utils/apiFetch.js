const ISS_API_URL = 'https://api.wheretheiss.at/v1/satellites/25544';

async function fetchIssApi(url) {
  try {
    const response = await fetch(`${ISS_API_URL}${url}`);
    const { status } = response;
    if (status !== 200) {
      throw new Error(`Invalid status received: ${status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(`Couldn't fetch position at ${ISS_API_URL}: `, error.message);
    return {};
  }
}

async function getActualPositions() {
  return fetchIssApi('/');
}

async function getHistoryPositions(timestamps) {
  return fetchIssApi(`/positions?timestamps=${timestamps}`);
}

export default { getActualPositions, getHistoryPositions };
