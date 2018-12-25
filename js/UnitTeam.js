//хэлпер найти ближайший юнит в заданном range
function findClosestUnitInRange(fromX, fromY, maxRange, inUnitList) {
  let nearestUnitDist = maxRange;
  let nearestUnitFound = null;
  for (let i = 0; i < inUnitList.length; i++) {
    let distTo = inUnitList[i].distFrom(fromX, fromY);
    if (distTo < nearestUnitDist) {
      nearestUnitFound = inUnitList[i];
      nearestUnitDist = distTo;
    }
  }
  return nearestUnitFound
}


function populateTeam(whichTeam, howMany, isPlayerControlled) {
  for (let i = 0; i < howMany; i++) {
    let spawnUnit = new Unit();
    spawnUnit.resetAndSetPlayerTeam(isPlayerControlled)
    addNewUnitToTeam(spawnUnit, whichTeam)
  }
}


function addNewUnitToTeam(spawnedUnit, fightsForTeam) {
  fightsForTeam.push(spawnedUnit);
  allUnits.push(spawnedUnit)
}