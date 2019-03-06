sillySentence = "What is the average airspeed velocity of a laden swallow?";
sillyReply = "An African Swallow or a European Swallow?"
document.write(sillySentence);
document.write("<p> This sentence is written in UPPER CASE: " + sillySentence.toUpperCase() + "</p>");
document.write("<p> This sentence is written in lower case: " +sillySentence.toLowerCase() + "</p>");
document.write("<p> There are " + sillySentence.length + " characters in this string.");
document.write("<p> The characters between index 5 and index 10 are: " + sillySentence.slice(5,10) + "</p>");
document.write("<p> The 5 characters starting from position 8 are: " + sillySentence.slice(8,12) + "</p>");
newString=sillySentence + "An African Swallow or a European Swallow?";
document.write(newString);

newString + newString.replace(".", "")
newString + newString.replace(".", "")
myArray = newString.split(" ");
document.write("<p> My array values are: " +myArray + "</p>");

document.write("<p>There are this many items in my array: " + myArray.length + "</p>");

document.write ("<p> This is my array without the first item:" +myArray.slice (1) + "</p>");

myArray.push("banana")

document.write("<p> This is my array with 'banana' added to the end: " + myArray +"</p>");

document.write("<p> This is my Array with the elements reversed: " + myArray.reverse() +"</p>");
myArray.reverse() + myArray.splice(1, 0, "stardust")

document.write ("<p> This is my array with 'stardust' added as my 2nd item: " + myArray +"</p>");

document.write ("<p> This is my array in alphabetical order: " +myArray.sort()+ " </p>");