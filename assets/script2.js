var page = 0,count=0;
  
  //////// using p5
  var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
  foo.onResult = getResult; // bind callback function to trigger when speech is recognized
  foo.continuous = true;
  foo.interimResults = true;
  foo.start(); // start listening
  
  function getResult()
  {
    // console.log(foo.resultString);
    
    if(foo.resultString.includes("basically")){
      nextCat(foo.resultString);
    } 
    // else if(foo.resultString == "start"){
    //   page = 0;
    //   document.getElementById('title').innerHTML = content[page].name;
    //   document.getElementById('content').innerHTML = content[page].description;
    //   document.getElementById('image').src = content[page].image;
  
    //   document.getElementById('title').style.color = "white";
    //   document.getElementById('content').style.color = "white";
    //   document.getElementById('card').style.borderColor = "white";
    //   document.getElementById('image').style.display = 'inline';
    // }
    console.log(foo.resultString); // log the result
  }
  //////////
  
  
  
  ///////using ml5
  
  function nextCat(choice){
  
    count++;
    // document.getElementById('title').innerHTML ="";
    document.getElementById('Content').innerHTML =count;
    // document.getElementById('image').src = content[page].image;
  }