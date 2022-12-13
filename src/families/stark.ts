import { Person } from "../personTypes";

export function createStarkTree(): Person {

    const EddardKids: Person[] = [
        { name: "Rickon", children: [] },
        { name: "Bran", children: [] },
        { name: "Arya", children: [] },
        { name: "Sansa", children: [] },
        { name: "Robb", children: [] },
        { name: "Jon", children: [] },
    ]

    const rickardKids: Person[] = [
        { name: "Benjen", children: [] },
        { name: "Lyanna", children: [] },
        { name: "Eddard", children: EddardKids },
        { name: "Brandon", children: [] },
    ]

    const topPerson: Person = { name: "Rickard", children: rickardKids };

    return topPerson;
}