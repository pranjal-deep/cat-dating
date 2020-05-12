const content = [
  {name: "Awesome Cat",
  description: "This is an awesome cat",
  image:"assets/images/cat1.jpg"
},{name: "Great Cat",
description: "This is a great cat",
image:"assets/images/cat2.png"
},{name: "Evil Cat",
description: "This is an evil cat",
image:"assets/images/cat3.jpg"
},{name: "Another Cat",
description: "This is another cat",
image:"assets/images/cat4.jpg"
}]; var page = 0;

//////// using p5
var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
foo.onResult = getResult; // bind callback function to trigger when speech is recognized
foo.continuous = true;
// foo.interimResults = true;
foo.start(); // start listening

function getResult()
{
  console.log(foo.resultString);
  
  if(foo.resultString == "yes" || foo.resultString == "no"){
    nextCat(foo.resultString);
  } else if(foo.resultString == "start"){
    page = 0;
    document.getElementById('title').innerHTML = content[page].name;
    document.getElementById('content').innerHTML = content[page].description;
    document.getElementById('image').src = content[page].image;

    document.getElementById('title').style.color = "white";
    document.getElementById('content').style.color = "white";
    document.getElementById('card').style.borderColor = "white";
    document.getElementById('image').style.display = 'inline';
  }
  console.log(foo.resultString); // log the result
}
//////////



///////using ml5

function nextCat(choice){

  if(choice == "yes"){
    document.getElementById('title').style.color = "#14f55f";
    document.getElementById('content').style.color = "#14f55f";
    document.getElementById('card').style.borderColor = "#14f55f";
    
  } else{
    document.getElementById('title').style.color = "red";
    document.getElementById('content').style.color = "red";
    document.getElementById('card').style.borderColor = "red";
    setTimeout(2000);
  }


  if(page<content.length-1){
    page++;
    // setTimeout(2000);
    document.getElementById('title').innerHTML = content[page].name;
    document.getElementById('content').innerHTML = content[page].description;
    document.getElementById('image').src = content[page].image;

    document.getElementById('title').style.color = "white";
    document.getElementById('content').style.color = "white";
    document.getElementById('card').style.borderColor = "white";
  } else{
    document.getElementById('title').innerHTML = "No more cats!";
    document.getElementById('content').innerHTML = "You have seen all the cats. Say 'start' to try again";
    document.getElementById('image').style.display = 'none';
  }
  // document.getElementById('image').src = content[page].image;
}