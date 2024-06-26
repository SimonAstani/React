function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
    //   console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  

  //Closure and lexical sciping when it is useful
  /* lexical scioping accesisng parent varialbes from child*/




  const div = document.createElement("div");
  div.id = "c1"

  const button1 = document.createElement("button");
  button1.id = "button1"
  button1.innerHTML = "click me to change font size";


  const button2 = document.createElement("button");
  button2.id = "color1"
  button2.innerHTML = "click me to change color to green";

  document.body.appendChild(div);
  div.appendChild(button1);
  div.appendChild(button2);

  function makeSize(v) {

    return function() {
        document.getElementById("button1").style.fontSize = `${v}px`;
        // document.body.style.fontSize = `${v}px`;
    };
    
  };

//   const size12 = makeSize(40);
//   console.log(size12);





document.getElementById("button1").onclick = makeSize(40);







