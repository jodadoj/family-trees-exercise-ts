import { buildMatchMemberExpression } from "@babel/types";
import { Person } from "./personTypes";


export function logAllPeopleInTree(topPerson: Person): void {
    console.log("TODO!  First person is " + topPerson.name);
    const workStack:Person[] = [];
    workStack.push(topPerson);

    while (workStack.length>0){
        let currentPerson:Person|undefined = workStack.pop();
        if (!currentPerson){
            throw new Error('Pop unexpectedly returned undefined.');
        }
        console.log(currentPerson.name);

        currentPerson.children.forEach(ele => {workStack.push(ele)});

    }
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
    console.log("TODO!  First person is " + topPerson.name);
    const workStack:Person[] = [];
    workStack.push(topPerson);

    while (workStack.length>0){
        let currentPerson:Person|undefined = workStack.pop();
        if (!currentPerson){
            throw new Error('Pop unexpectedly returned undefined.');
        }
        console.log(currentPerson.name);

        currentPerson.children.forEach(ele => {workStack.unshift(ele)});

    }
}

/*
		while workStack is not empty: 
        currentPerson = pop person off workStack
        log the name property of currentPerson

        push each element of currentPerson's children onto the workStack

        */