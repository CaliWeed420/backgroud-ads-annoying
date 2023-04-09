//This was generated using the popular ai chat gpt
//Whats interesting is chat gpt knew when I first asked it to
//make me this code that it was going to have an error in it.
//my evidence is usually chat gpt is very throughough in its programming explanations
//but purposely left the part out about using await in a non async function.

//For better clarity here is the original snippet chat gpt made for me to run in my browser console

//BROKEN
while (true) {
	document.visibilityState = "visible";
	console.log("Page is visible.");
	await new Promise(resolve => setTimeout(resolve, 1000));
}

//After quite literally saying  it was broken
//Chat gpt was extremely apologetic for the confusion in the previous response
//it then proceeded to give me an updated snippet
//what is double weird is that at the end of explaining the snippet again
//It APOLOGIZES again!

//Here is the the final working snippet that was tweaked and thrown up by chat gpt

//WORKING
while (true) {
	document.visibilityState = "visible";
	console.log("Get rekt Ads aka AIDS!");
  //Increase this a fair amount if lagging your browser xd, default is 10000 
	setTimeout(() => {}, 10000);
}


//This effectivly loops and sets that tab to make it look like you are activly on that current tab.
//This is annoying when you are working on other things and like the background noise of say south park or whatever 
//annoying domain/company uses to ensure you enjoy every juicy moment of that ad
//This solves that by spoofing to those 9gags that we are on the current tab watching the life draining ad
//when really we are on a different tab doing other better things 

//Now was it worth it all to read this no but you probably couldve saved lot more time using an ai xddd.

