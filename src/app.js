/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let a = Math.floor(Math.random() * 4);
  let b = Math.floor(Math.random() * 4);
  let c = Math.floor(Math.random() * 3);
  let d = Math.floor(Math.random() * 5);

  // console.log(who[a] + " " + action[b] + " " + what[c] + " " + when[d]);

  let excuseGenerator = document.getElementById("excuse");
  excuseGenerator.textContent =
    who[a] + " " + action[b] + " " + what[c] + " " + when[d];
};
