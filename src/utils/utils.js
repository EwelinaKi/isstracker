import apiFetch from './apiFetch';

const MAX_NUMBER_OF_STAMPS = 10;

function createTimestampsString(duration) {
  const startTimeStamp = Math.floor(Date.now() / 1000);
  const delta = Math.floor(duration / MAX_NUMBER_OF_STAMPS);
  const timeStamps = [];
  for (let i = 0; i < MAX_NUMBER_OF_STAMPS; i += 1) {
    timeStamps.push(startTimeStamp - Math.floor(i * delta * 60));
  }
  return timeStamps.join(',');
}

async function getHistoryPath(duration) {
  const timeStampsStr = createTimestampsString(duration);
  const historyData = await apiFetch.getHistoryPositions(timeStampsStr);
  return Array.from(historyData).map(el => ({ lat: el.latitude, lng: el.longitude }));
}

function validateInput(input, min, max) {
  return (/^[0-9]+$/).test(input) && input >= min && input <= max;
}

async function getActualPositions() {
  const data = await apiFetch.getActualPositions();
  return {
    lat: data.latitude,
    lng: data.longitude,
  };
}

export default { getHistoryPath, validateInput, getActualPositions };
