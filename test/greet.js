function greeting(nameList) {
  var greetedNames = nameList || {};
  


  function language(name, lang) {
    if (!name){
      return "please enter a name!"
    }
    else if(!lang){
      return "please select language"
    }

    var regex = /^[a-zA-Z]+$/;
    var newName = regex.test(name)
    if (newName === true) {
      if (greetedNames[name] === undefined) {
        greetedNames[name] = 0;
      }
      
      if (lang === 'English') {
        return "Hello, " + name + "!";
      }
      else if (lang === 'Xhosa') {
        return "Molo, " + name + "!";
      }
      else if (lang === 'Afrikaans') {
        return "Hallo, " + name + "!";
      }
  
  }
  else if(newName === false){
    return "Does not take in numbers"
  } 
} 
  
  function getName() {
    return greetedNames;
  }

  function counter() {
    var c = Object.keys(greetedNames)
    return c.length;
  }
  


  return {
    language,
    getName,
    counter
  }
}


