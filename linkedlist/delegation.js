const testingTeam = {
    lead: "Amanda",
    tester: "Bill",
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: "Engineering",
    lead: "Jill",
    manager: "Alex",
    engineer: "Dave",
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;

    yield* TestingTeamIterator(team.testingTeam);
}

function* TestingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}

const names = [];
for (const name of TeamIterator(engineeringTeam)) {
    names.push(name);
}

console.log(names);
