// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Scuber headquarters location
    return Math.abs(pickupLocation - hqLocation);
}
function distanceFromHqInFeet(pickupLocation) {
    const blocks =  distanceFromHqInBlocks (pickupLocation)
    const feetPerBlock = 264;
    return blocks * feetPerBlock;

}
function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(endBlock - startBlock);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fee for distances over 2000 feet
    } else {
        return 'cannot travel that far'; // Rides over 2500 feet are not allowed
    }
}

