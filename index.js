//HTML imports
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

//The regex 'filter':

//This filter out the commen sentece 'please help' and/or 'assist me'
const helpRegex = /please help|assist me/i;
//This filter out words 'hundred', 'thousand', 'million', and/of 'billion', as well 'dollars'
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;
//This filter out any misspelled words that tries to simulate 'free money'
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
//This filter out any misspelled words that tries to simulate 'Stock alert'
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
//This filter out any misspelled words that tries to simulate 'dear friend'
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

//This is where all the filters come together as a whole
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

//Here when input is added will evaluate with all filter as one (denyList) to conclude if the message is spam
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

//Button action. what would happened when button is click, in this case adtivate the 'filter'
checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  //The outcome messages depending on the result 
  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});