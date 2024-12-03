const defaulCharacter = {
    name: "",
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0,
}

const createKnight = (name) => {
    return {
        ...defaulCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8,
    }
}

const createSorcerer = (name) => {
    return {
        ...defaulCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3,
    }
}

const createLitteMonster = (name) => {
    return {
        ...defaulCharacter,
        name: 'Litte Monster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4,
    }
}

const createBigMonster = (name) => {
    return {
        ...defaulCharacter,
        name: 'Big Monster',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6,
    }
}