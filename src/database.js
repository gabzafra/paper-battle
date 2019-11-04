const icons = [{
    name: "fist",
    src: "./assets/img/red.svg"
}, {
    name: "magic",
    src: "./assets/img/red.svg"
}, {
    name: "blockM",
    src: "./assets/img/red.svg"
}, {
    name: "blockF",
    src: "./assets/img/red.svg"
}, {
    name: "blockA",
    src: "./assets/img/red.svg"
}, {
    name: "draw",
    src: "./assets/img/red.svg"
}, {
    name: "breaker",
    src: "./assets/img/red.svg"
}, {
    name: "drain",
    src: "./assets/img/red.svg"
}, {
    name: "fist",
    src: "./assets/img/red.svg"
}, {
    name: "dmgself",
    src: "./assets/img/red.svg"
}, {
    name: "discard",
    src: "./assets/img/red.svg"
}];

const cards = [{
        id: 1,
        name: "Half assed punch",
        src: "./assets/img/blue.svg",
        icons: ["fist"]
    },
    {
        id: 2,
        name: "Lucky bow",
        src: "./assets/img/blue.svg",
        icons: ["fist", "fist"]
    },
    {
        id: 3,
        name: "Mage bubble",
        src: "./assets/img/blue.svg",
        icons: ["magic", "blockM"]
    },
    {
        id: 4,
        name: "Mind fart",
        src: "./assets/img/blue.svg",
        icons: ["magic", "draw"]
    },
    {
        id: 5,
        name: "Zap",
        src: "./assets/img/blue.svg",
        icons: ["magic", "breaker"]
    },
    {
        id: 6,
        name: "Drain life",
        src: "./assets/img/blue.svg",
        icons: ["magic", "drain"]
    },
    {
        id: 7,
        name: "Shield's Up",
        src: "./assets/img/blue.svg",
        icons: ["blockF", "blockF"]
    },
    {
        id: 8,
        name: "Riposte",
        src: "./assets/img/blue.svg",
        icons: ["fist", "blockF"]
    },
    {
        id: 9,
        name: "Wut!",
        src: "./assets/img/blue.svg",
        icons: ["blockM", "blockM"]
    },
    {
        id: 10,
        name: "Poison arrow",
        src: "./assets/img/blue.svg",
        icons: ["magic", "fist"]
    },
    {
        id: 11,
        name: "Cheap trick",
        src: "./assets/img/blue.svg",
        icons: ["fist", "breaker"]
    },
    {
        id: 12,
        name: "Dodge",
        src: "./assets/img/blue.svg",
        icons: ["blockA"]
    },
    {
        id: 13,
        name: "Headbutt",
        src: "./assets/img/blue.svg",
        icons: ["fist", "dmgself"]
    },
    {
        id: 14,
        name: "Bloodlust",
        src: "./assets/img/blue.svg",
        icons: ["fist", "fist", "dmgself"]
    },
    {
        id: 15,
        name: "Stupid rage",
        src: "./assets/img/blue.svg",
        icons: ["fist", "fist", "fist", "dmgself"]
    },
    {
        id: 16,
        name: "Oops",
        src: "./assets/img/blue.svg",
        icons: []
    },
    {
        id: 17,
        name: "Arc lighning",
        src: "./assets/img/blue.svg",
        icons: ["magic", "magic"]
    },
    {
        id: 18,
        name: "Fireball",
        src: "./assets/img/blue.svg",
        icons: ["magic", "magic", "magic", "blockF"]
    },
    {
        id: 19,
        name: "Charge",
        src: "./assets/img/blue.svg",
        icons: ["fist", "fist", "breaker"]
    },
    {
        id: 20,
        name: "Scare",
        src: "./assets/img/blue.svg",
        icons: ["magic", "blockF"]
    },
    {
        id: 21,
        name: "Spook",
        src: "./assets/img/blue.svg",
        icons: ["magic", "discard"]
    },
    {
        id: 22,
        name: "Mind fry",
        src: "./assets/img/blue.svg",
        icons: ["magic", "magic", "discard"]
    },
    {
        id: 23,
        name: "Poison bite",
        src: "./assets/img/blue.svg",
        icons: ["fist", "fist", "magic"]
    },
    {
        id: 24,
        name: "Spark",
        src: "./assets/img/blue.svg",
        icons: ["magic"]
    },
    {
        id: 25,
        name: "Head hit",
        src: "./assets/img/blue.svg",
        icons: ["fist", "discard"]
    }

];

const deckCollection = [{
        id: 1,
        name: "Warrior",
        cards: [1, 1, 7, 8, 2, 9]
    }, {
        id: 2,
        name: "Sorcerer",
        cards: [3, 4, 5, 5, 6]
    }, {
        id: 3,
        name: "Rogue",
        cards: [10, 11, 12, 2, 2]
    },
    {
        id: 4,
        name: "Rubber Duck",
        cards: [1, 1, 1, 2]
    },
    {
        id: 5,
        name: "Albino Goblin",
        cards: [17, 18, 19, 15, 13]
    },
    {
        id: 6,
        name: "Lazy Bat",
        cards: [19, 15, 20, 6]
    },
    {
        id: 7,
        name: "Horrid Eel",
        cards: [21, 5, 22, 17, 9, 1, 2, 19, 23]
    },
    {
        id: 8,
        name: "Fire Imp",
        cards: [24, 5, 10, 16]
    },
    {
        id: 9,
        name: "Frenzied Goblin",
        cards: [19, 15, 1, 25]
    },
    {
        id: 10,
        name: "Ugly Spider",
        cards: [20, 6, 6, 11, 11]
    },
    {
        id: 11,
        name: "Goblin",
        cards: [13, 25, 13, 14, 15]
    },
    {
        id: 12,
        name: "Bubbly Ozee",
        cards: [24, 24, 5, 20, 6]
    },
    {
        id: 13,
        name: "Leggy Spider",
        cards: [19, 2, 23, 20, 6]
    },
    {
        id: 14,
        name: "Rat",
        cards: [1, 25, 11, 11]
    },
    {
        id: 15,
        name: "Plague Rat",
        cards: [2, 19, 11, 11]
    },
    {
        id: 16,
        name: "Scary Spider",
        cards: [1, 25, 20, 6, 6]
    }

];