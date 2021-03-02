
// function fetchMessage () {
//     let messages = ['You\'re all business under Monday\'s cosmic landscape, Taurus! Follow the drive you\'re feeling towards productive action today, as the skies are aligning to catapult you towards new realms of possibility. The moon cruises through balanced Libra all day, directing your energy toward your current to-do list. Luna\'s supportive alignment with dream-big Jupiter and expressive Mercury makes it easy to talk business and boost visibility of your personal potential.', 'Single or attached, the enchanting effects of your luscious planetary ruler, Venus, amidst its journey through your eleventh house space is hard to ignore, especially when you find yourself crushing left and right. And though you\'re also prone to rebellion with the Great Awakener planet (Uranus) in your sign, the desire to spiritually merge is in full effect throughout this Venusian transit. In the meantime, however, today\'s moon in Libra will shake up your responsible sixth house of daily rituals and due diligence, all the while making a sweet trine to both Mercury and Jupiter. Do your best to stay focused and tackle your to-do list for now.', 'Conflict erupts over the stupidest stuff today, but that doesn\'t mean you get to back down. Pick your battles wisely, just like always, but try to make sure you fight your hardest when it\'s most important.']
//     messageLength = messages.length
//     let randomNumber = Math.floor(Math.random() * messageLength)
//     for (let i = 0; i < messageLength; i++) {
//         return messages[randomNumber]
//     }
//    }
// console.log(fetchMessage())
// document.querySelector('button').addEventListener('onclick', fetchMessage());

function displayMessage() {
   //random messages
   const messages = [
      "hello everyone",
      "how are you doing today",
      "I hope you are doing well",
      "Tell me if you are enjoying the city of Delhi",
      "I know India is a very beautiful country",
   ];

   // where we want to display the message
   let display = document.getElementById("display");

   // getrandom number based on the length of messages
   let randomNumber = Math.floor(Math.random() * messages.length);

   //message to display now
   const message = messages[randomNumber];

   console.log(message);
   display.innerHTML = message;
   display.style.padding = "10px";
}

//callback function to run when we click a button. Remember, we don't execute callback functions with ()
document.querySelector("button").addEventListener("click", displayMessage);
=======
function fetchMessage () {
    let messages = ['You\'re all business under Monday\'s cosmic landscape, Taurus! Follow the drive you\'re feeling towards productive action today, as the skies are aligning to catapult you towards new realms of possibility. The moon cruises through balanced Libra all day, directing your energy toward your current to-do list. Luna\'s supportive alignment with dream-big Jupiter and expressive Mercury makes it easy to talk business and boost visibility of your personal potential.', 'Single or attached, the enchanting effects of your luscious planetary ruler, Venus, amidst its journey through your eleventh house space is hard to ignore, especially when you find yourself crushing left and right. And though you\'re also prone to rebellion with the Great Awakener planet (Uranus) in your sign, the desire to spiritually merge is in full effect throughout this Venusian transit. In the meantime, however, today\'s moon in Libra will shake up your responsible sixth house of daily rituals and due diligence, all the while making a sweet trine to both Mercury and Jupiter. Do your best to stay focused and tackle your to-do list for now.', 'Conflict erupts over the stupidest stuff today, but that doesn\'t mean you get to back down. Pick your battles wisely, just like always, but try to make sure you fight your hardest when it\'s most important.']
    messageLength = messages.length
    let randomNumber = Math.floor(Math.random() * messageLength)
    for (let i = 0; i < messageLength; i++) {
        return messages[randomNumber]
    }
   }
document.getElementById('display').innerHTML = fetchMessage()
document.querySelector('button').addEventListener('onclick', fetchMessage());
