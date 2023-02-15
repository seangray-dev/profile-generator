const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name?", (name) => {
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question("What do you listen to while doing that?", (listensTo) => {
      rl.question(
        "Which meal is your favourite? (Breakfast, Lunch, Dinner, etc.)?",
        (favMeal) => {
          rl.question(
            "What's your favourite thing to eat for that meal?",
            (favFood) => {
              rl.question("Which sport is your absolute favorite?", (sport) => {
                rl.question("What is your super power?", (superPower) => {
                  console.log(
                    `${name} likes to ${activity} and listens to ${listensTo}, while doing it. ${name} also likes to eat ${favFood} for ${favMeal}. ${name}'s favourite sport is ${sport} and also is ${superPower}`
                  );
                  rl.close();
                });
              });
            }
          );
        }
      );
    });
  });
});
