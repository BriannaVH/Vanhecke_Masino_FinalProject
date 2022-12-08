    //This function randomly returns a true or false value or a number between 0 and 10 in order to help randomize certain customizations
    function random() {
        let randomNumber = Math.round(Math.random() * 10); //Creates a random number between 0 and 10
        if (randomNumber % 2 == 0) { //If the random number is even
            return true;
        }
        else {
            return false;
        }
    }


    function createRandomPosOrNeg(max, min) {
        let number = Math.random() * max + min
        if (random() == true) {
            number *= -1;
        }
        return number;
    }

    function play(path) {
        audio = new Audio(path);
        audio.volume = .2;
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




        
        function newRandom(min, max) {
            let num = Math.random() * max + min;
            let rand = Math.random();
            if (rand > .5) {
                num *= -1;
            }
            return num;
        }
