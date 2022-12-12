const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answerArr = [];

rl.question(
  "What's your name? Nicknames are also acceptable :)? ",
  (answer) => {
    answerArr.push(answer);

    rl.question("What's an activity you like doing? ", (answer) => {
      answerArr.push(answer);

      rl.question("What do you listen to while doing that? ", (answer) => {
        answerArr.push(answer);

        rl.question(
          "Which meal is your favourite (eg: dinner, brunch, etc.) ",
          (answer) => {
            answerArr.push(answer);

            rl.question(
              "What's your favourite thing to eat for that meal? ",
              (answer) => {
                answerArr.push(answer);

                rl.question(
                  "Which sport is your absolute favourite? ",
                  (answer) => {
                    answerArr.push(answer);
                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at! ",
                      (answer) => {
                        answerArr.push(answer);
                        console.log(
                          `Thank you for your valuable feedback, ${answerArr[0]}`
                        );
                        console.log(
                          ` ${answerArr[0]}'s favourite food is ${answerArr[4]} at ${answerArr[3]} time. Their favourite sport is ${answerArr[5]} and they're really good at ${answerArr[6]}. Their favourite activity is ${answerArr[1]} and they love to listen to ${answerArr[2]}. `
                        );
                        rl.close();
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);
