/*
1. create a circle with random radium  when ever button is clicked
2. if max two circle. remove /clear circle and create new one
3. if circle intersect. return true. else false.



*/ 
let intersectCordinates = [];

function getRandomRadius() {
    return Math.floor(Math.random() * 50) + 50; // Random radius between 50 and 100
}


function circlesIntersect(x1, y1, r1, x2, y2, r2) {
    const dx = x1 - x2;
    const dy = y1 - y2;
    const distance = Math.sqrt(dx * dx + dy * dy);
    console.log(distance, r1 + r2);
    return distance <= r1 + r2? true: false;
    
    // return distance < r1 + r2;
}


document.addEventListener('click', e => {
    // var isIntersection = True;
    const noOfCircle = document.querySelectorAll('.circle');

    if (noOfCircle.length === 2){
        //remove all circle and create new one
        noOfCircle.forEach(circ => {
            document.body.removeChild(circ);

        });
        // Calculated if interested or not
        // circlesIntersect()   

        //remove array
        intersectCordinates = [];

    }


    const x = e.clientX;
    const y = e.clientY;
    const radius = getRandomRadius() * 2;
    intersectCordinates.push({x,y, radius}) *2 ;

    const circle = document.createElement("div");
    circle.classList.add('circle');
    var eStyle = circle.style;

    circle.style.top = y-50+ "px";
    circle.style.left = x-50 + "px";
    
    eStyle.width = radius  + "px";
    eStyle.height = radius  + "px";

    document.body.appendChild(circle);

    console.log(intersectCordinates);


    // calcluate intersection
    if(intersectCordinates.length === 2){
        const isIntrescted = circlesIntersect(intersectCordinates[0].x, intersectCordinates[0].y, intersectCordinates[0].radius, intersectCordinates[1].x, intersectCordinates[1].y, intersectCordinates[1].radius);
        console.log(isIntrescted);

        //display bingo intrescted message.
        const msg= document.createElement("p");
        document.body.appendChild(msg);
        msg.innerHTML = isIntrescted;
        

    }





});

// myModule.js
export const myVariable = "I am an exported variable";

export function myFunction() {
    console.log("I am an exported function");
}

