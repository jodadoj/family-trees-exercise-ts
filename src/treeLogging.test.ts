import { createStarkTree } from "./families/stark";
import { Person } from "./personTypes";
import { logAllPeopleInTreeWithQueue, isDescedent } from "./treeLogging";

const robertsKids: Person[] = [
  { name: "Edric", children: [] },
  { name: "Mya", children: [] },
  { name: "Gendry", children: [] },
  { name: "Barra", children: [] },
  { name: "Bella", children: [] },
];

const steffonsKids: Person[] = [
  { name: "Robert", children: robertsKids },
  { name: "Stannis", children: [] },
  { name: "Renly", children: [] },
];

const steffon: Person = { name: "Steffon", children: steffonsKids };

const topPerson: Person = { name: "Rhaelle", children: [steffon] };

test("logAllPeopleInTreeWithQueue should return all members of tree in queue, in order", () => {
  expect(logAllPeopleInTreeWithQueue(topPerson)).toEqual([
    "Rhaelle",
    "Steffon",
    "Robert",
    "Stannis",
    "Renly",
    "Edric",
    "Mya",
    "Gendry",
    "Barra",
    "Bella",
  ]);
});

test("isDescendent should return true if one name is a descedant of another", () => {
  expect(isDescedent("Jon", "Rickard", createStarkTree())).toBe(true);
  expect(isDescedent("Jon", "Benjen", createStarkTree())).toBe(false);
  expect(isDescedent("Jon", "Robert", createStarkTree())).toBe(false);
  expect(isDescedent("Eddard", "Eddard", createStarkTree())).toBe(false);
});
