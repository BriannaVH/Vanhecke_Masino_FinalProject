// a file to hold functions that are not reliant on threejs to reduce the clutter in our main file


// a function that creates a new position randomly
function createRandomPosOrNeg(max, min) {
    // let number = Math.random() * max + min
    // if (random() == true) {
    //     number *= -1;
    // }
    let number = newRandom(min, max);
    return number;
}

// a function that plays an audio clip
function play(path) {
    audio = new Audio(path);
    audio.volume = 1;
    audio.play();
}

//src:https://developer.mozilla.org/en-US/docs/Games/Techniques/3D_collision_detection
function calcPointDistance(point, point2) {
    //This calculates the distance of two points based on the distance formula
    const distance = Math.sqrt(
        (point.x - point2.x) * (point.x - point2.x) +
        (point.y - point2.y) * (point.y - point.y) +
        (point.z - point2.z) * (point.z - point2.z)
    )
    return distance; //Returns distance
}


// a function that creates a random number given the min and max, the result can be negative or positive 
function newRandom(min, max) {
    let num = Math.random() * max + min;
    let rand = Math.random();
    if (rand > .5) {
        num *= -1;
    }
    return num;
}
