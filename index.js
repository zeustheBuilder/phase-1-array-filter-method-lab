// Code your solution here
function findMatching (drivers, taxi) {
    return drivers.filter (
        (possibleMatch) => possibleMatch.toLowerCase() === taxi.toLowerCase()
    );
}

function fuzzyMatch (drivers, oneTaxi) {
    return drivers.filter(
        (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(oneTaxi.toLowerCase()) === 0
    );
}

function matchName (drivers, matchName) {
    return drivers.filter((record) => record.name === matchName);
} 