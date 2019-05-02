import apiFetch from './apiFetch';

function createTimestampsString(duration) {
  const startTimeStamp = Math.floor(Date.now() / 1000);
  const delta = Math.floor(duration / 10);
  const timeStamps = [];
  for (let i = 0; i < 10; i++) {
    timeStamps.push(startTimeStamp - Math.floor(i * delta * 60));
  }
  return timeStamps.join(',');
}

async function getHistoryPath(duration) {
  const timeStampsStr = createTimestampsString(duration);
  const historyData = await apiFetch.getHistoryPos(timeStampsStr);

  return Array.from(historyData).map(el => ({ lat: el.latitude, lng: el.longitude }));
}
function validateInput(input) {
  return (/^[0-9]/).test(input) && input >= 10 && input <= 120;
}

export default { getHistoryPath, validateInput };
