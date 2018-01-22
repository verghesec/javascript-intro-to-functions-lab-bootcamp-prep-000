
function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {

<<<<<<< HEAD
  if ( string === 'I love you, Grandma.' ) {
    return "I love you, too.";
  }
  else if (string.toLowerCase() === string) {
=======
  if (string.toLowerCase() === string) {
>>>>>>> 2f9866e8b4482756b0781ac6acd8cf257c2185ad
    return "I can't hear you!";
  }
  else if (string.toUpperCase() === string) {
    return "YES INDEED!";
  }

<<<<<<< HEAD
}
=======
  console.log(string);
  if ( string.toEqual('I love you, Grandma.') ) {
    return "I love you, too.";
  }

}

sayHiToGrandma("I love you, Grandma.");
>>>>>>> 2f9866e8b4482756b0781ac6acd8cf257c2185ad
