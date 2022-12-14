import { buildMatchMemberExpression } from "@babel/types";
import { createStarkTree } from "./families/stark";
import { Person } from "./personTypes";

export function logAllPeopleInTree(topPerson: Person): string[] {
  console.log("TODO!  First person is " + topPerson.name);
  const workStack: Person[] = [];
  const personArr: string[] = [];
  workStack.push(topPerson);

  while (workStack.length > 0) {
    let currentPerson: Person | undefined = workStack.pop();
    if (!currentPerson) {
      throw new Error("Pop unexpectedly returned undefined.");
    }
    personArr.push(currentPerson.name);

    currentPerson.children.forEach((ele) => {
      workStack.push(ele);
    });
  }
  return personArr;
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): string[] {
  console.log("TODO!  First person is " + topPerson.name);
  const workStack: Person[] = [];
  const personArr: string[] = [];
  workStack.push(topPerson);

  while (workStack.length > 0) {
    let currentPerson: Person | undefined = workStack.pop();
    if (!currentPerson) {
      throw new Error("Pop unexpectedly returned undefined.");
    }
    personArr.push(currentPerson.name);

    currentPerson.children.forEach((ele) => {
      workStack.unshift(ele);
    });
  }
  const count = personArr.length;
  console.log("This family tree contains: ", count, " members.");
  return personArr;
}

export function logIfInTree(targetName: string, topOfTree: Person): void {
  console.log("Searching for ", targetName);
  const workStack: Person[] = [];
  workStack.push(topOfTree);

  while (workStack.length > 0) {
    let currentPerson: Person | undefined = workStack.pop();
    if (!currentPerson) {
      throw new Error("Pop unexpectedly returned undefined.");
    }
    if (currentPerson.name === targetName) {
      console.log("Found ", targetName, "!!");
      return;
    }
    currentPerson.children.forEach((ele) => {
      workStack.unshift(ele);
    });
  }
  console.log("No such Person found ", targetName);
}
export function FindDescedent(targetName: string, topOfTree: Person): boolean {
  console.log("Searching for ", targetName);
  const workStack: Person[] = [];
  workStack.push(topOfTree);

  while (workStack.length > 0) {
    let currentPerson: Person | undefined = workStack.pop();
    if (!currentPerson) {
      throw new Error("Pop unexpectedly returned undefined.");
    }
    if (currentPerson.name === targetName && targetName !== topOfTree.name) {
      console.log("Descedant Found: ", targetName, "!!");
      return true;
    }
    currentPerson.children.forEach((ele) => {
      workStack.unshift(ele);
    });
  }
  console.log("Descedant Not Found: ", targetName);
  return false;
}

export function isDescedent(
  descedantName: string,
  ancestorName: string,
  topPerson: Person,
): boolean {
  console.log("Looking for Ancestor " + ancestorName);
  const workStack: Person[] = [];
  workStack.push(topPerson);
  while (workStack.length > 0) {
    let currentPerson: Person | undefined = workStack.pop();
    if (!currentPerson) {
      throw new Error("Pop unexpectedly returned undefined.");
    }
    if (currentPerson.name === ancestorName) {
      return FindDescedent(descedantName, currentPerson);
    } else {
      currentPerson.children.forEach((ele) => {
        workStack.unshift(ele);
      });
    }
  }
  console.log("Ancestor not found:", ancestorName);
  return false;
}

/*
program: 
    function name: isDescedent
        params: 
            descendantName:string
            ancestorName:string
            topOfTree:Person
        return:
            boolean
=====================================
    Look throw Top of Person Tree until we find Ancestor
    Call function to look through Tree with ancestor as top person and descedantName as target:





*/

/*
		while workStack is not empty: 
        currentPerson = pop person off workStack
        log the name property of currentPerson

        push each element of currentPerson's children onto the workStack
        */
