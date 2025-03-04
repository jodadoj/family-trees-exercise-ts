import { createBaratheonTree } from "./families/baratheon";
import { createBritishSuccessionTree } from "./families/britain";
import { createLannisterTree } from "./families/lannister";
import { createStarkTree } from "./families/stark";
// import { logAllPeopleInTree, logAllPeopleInTreeWithQueue } from "./solutions/solution";
import {
  isDescedent,
  logAllPeopleInTree,
  logAllPeopleInTreeWithQueue,
  logIfInTree,
} from "./treeLogging";
import { printBanner } from "./utils/bannerUtils";
import { printPersonTreeAsAscii } from "./utils/toAsciiTree";

async function mainProgram() {
  // printBanner("BARATHEON");
  // printPersonTreeAsAscii(createBaratheonTree());

  // printBanner("STARK");
  // printPersonTreeAsAscii(createStarkTree());

  // Uncomment to test your work..

  // printBanner("LANNISTER");
  // printPersonTreeAsAscii(createLannisterTree());

  //printBanner("All people in STARK");
  //logAllPeopleInTree(createStarkTree());
  //printBanner("All people in STARK");
  //console.log(logAllPeopleInTreeWithQueue(createStarkTree()));
  //logIfInTree("Arya", createStarkTree());
  console.log(isDescedent("Jon", "Benjen", createStarkTree()));
  // printBanner("WITH STACK - british royals")
  // logAllPeopleInTree(createBritishSuccessionTree());
  // printBanner("WITH QUEUE - british royals")
  // logAllPeopleInTreeWithQueue(createBritishSuccessionTree());

  // You'll need to add more test code for later exercises, too.
}

mainProgram();
