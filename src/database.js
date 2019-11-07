const icons = [{
    id: 1,
    name: "fist",
    src: "./assets/img/fist.svg",
    text: "Deals one physical damage"
}, {
    id: 2,
    name: "magic",
    src: "./assets/img/magic.svg",
    text: "Deals one magic damage"
}, {
    id: 3,
    name: "blockM",
    src: "./assets/img/blockM.svg",
    text: "Blocks one magic damage"
}, {
    id: 4,
    name: "blockF",
    src: "./assets/img/blockF.svg",
    text: "Blocks one physical damage"
}, {
    id: 5,
    name: "blockA",
    src: "./assets/img/blockA.svg",
    text: "Blocks one damage"
}, {
    id: 6,
    name: "draw",
    src: "./assets/img/draw.svg",
    text: "Draw one card"
}, {
    id: 7,
    name: "breaker",
    src: "./assets/img/breaker.svg",
    text: "Damage can't be blocked"
}, {
    id: 8,
    name: "drain",
    src: "./assets/img/drain.svg",
    text: "Each unblocked damage heals"
}, {
    id: 9,
    name: "dmgself",
    src: "./assets/img/dmgself.svg",
    text: "You will lose one life"
}, {
    id: 10,
    name: "discard",
    src: "./assets/img/discard.svg",
    text: "If not blocked discard a card"
}, {
    id: 11,
    name: "heart",
    src: "./assets/img/heart.png",
    text: "1 life point"
}];

const cards = [{
        id: 1,
        name: "Half assed punch",
        src: "./assets/img/half-assed-punch.svg",
        icons: ["fist"]
    },
    {
        id: 2,
        name: "Lucky bow",
        src: "./assets/img/lucky-bow.svg",
        icons: ["fist", "fist"]
    },
    {
        id: 3,
        name: "Mage bubble",
        src: "./assets/img/mage-bubble.svg",
        icons: ["magic", "blockM"]
    },
    {
        id: 4,
        name: "Mind fart",
        src: "./assets/img/mind-fart.svg",
        icons: ["magic", "draw"]
    },
    {
        id: 5,
        name: "Zap",
        src: "./assets/img/zap.svg",
        icons: ["magic", "breaker"]
    },
    {
        id: 6,
        name: "Drain life",
        src: "./assets/img/drain-life.svg",
        icons: ["magic", "drain"]
    },
    {
        id: 7,
        name: "Shield's Up",
        src: "./assets/img/shields-up.svg",
        icons: ["blockF", "blockF"]
    },
    {
        id: 8,
        name: "Riposte",
        src: "./assets/img/riposte.svg",
        icons: ["fist", "blockF"]
    },
    {
        id: 9,
        name: "Wut!",
        src: "./assets/img/wut.svg",
        icons: ["blockM", "blockM"]
    },
    {
        id: 10,
        name: "Poison arrow",
        src: "./assets/img/poison-arrow.svg",
        icons: ["fist", "magic"]
    },
    {
        id: 11,
        name: "Cheap trick",
        src: "./assets/img/cheap-trick.svg",
        icons: ["fist", "breaker"]
    },
    {
        id: 12,
        name: "Dodge",
        src: "./assets/img/dodge.svg",
        icons: ["blockA"]
    },
    {
        id: 13,
        name: "Headbutt",
        src: "./assets/img/headbutt.svg",
        icons: ["fist", "dmgself"]
    },
    {
        id: 14,
        name: "Bloodlust",
        src: "./assets/img/bloodlust.svg",
        icons: ["fist", "fist", "dmgself"]
    },
    {
        id: 15,
        name: "Stupid rage",
        src: "./assets/img/stupid-rage.svg",
        icons: ["fist", "fist", "fist", "dmgself"]
    },
    {
        id: 16,
        name: "Oops",
        src: "./assets/img/oops.svg",
        icons: []
    },
    {
        id: 17,
        name: "Arc lightning",
        src: "./assets/img/arc-lightning.svg",
        icons: ["magic", "magic"]
    },
    {
        id: 18,
        name: "Fireball",
        src: "./assets/img/fireball.svg",
        icons: ["magic", "magic", "magic", "blockF"]
    },
    {
        id: 19,
        name: "Charge",
        src: "./assets/img/charge.svg",
        icons: ["fist", "fist", "breaker"]
    },
    {
        id: 20,
        name: "Scare",
        src: "./assets/img/scare.svg",
        icons: ["magic", "blockF"]
    },
    {
        id: 21,
        name: "Spook",
        src: "./assets/img/spook.svg",
        icons: ["magic", "discard"]
    },
    {
        id: 22,
        name: "Mind fry",
        src: "./assets/img/mind-fry.svg",
        icons: ["magic", "magic", "discard"]
    },
    {
        id: 23,
        name: "Poison bite",
        src: "./assets/img/poison-bite.svg",
        icons: ["fist", "fist", "magic"]
    },
    {
        id: 24,
        name: "Spark",
        src: "./assets/img/spark.svg",
        icons: ["magic"]
    },
    {
        id: 25,
        name: "Head hit",
        src: "./assets/img/head-hit.svg",
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
        cards: [13, 14, 16]
    },
    {
        id: 5,
        name: "Albino Goblin",
        cards: [17, 18, 19, 15, 13, 16]
    },
    {
        id: 6,
        name: "Lazy Bat",
        cards: [19, 15, 20, 6]
    },
    {
        id: 7,
        name: "Horrid Eel",
        cards: [21, 5, 22, 17, 9, 1, 2, 19, 23, 16]
    },
    {
        id: 8,
        name: "Fire Imp",
        cards: [24, 5, 10, 16]
    },
    {
        id: 9,
        name: "Frenzied Goblin",
        cards: [19, 15, 1, 25, 1]
    },
    {
        id: 10,
        name: "Ugly Spider",
        cards: [20, 6, 6, 11, 11, 1]
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
        cards: [19, 2, 23, 20, 6, 2]
    },
    {
        id: 14,
        name: "Rat",
        cards: [1, 25, 11, 11]
    },
    {
        id: 15,
        name: "Plague Rat",
        cards: [2, 19, 11, 11, 16]
    },
    {
        id: 16,
        name: "Scary Spider",
        cards: [1, 25, 20, 6, 6]
    }

];

const heroes = [{
    id: 1,
    name: "Warrior",
    life: 5,
    deckId: 1,
    src: "./assets/img/warrior.svg"
}, {
    id: 2,
    name: "Sorcerer",
    life: 5,
    cdeckId: 2,
    src: "./assets/img/sorcerer.svg"
}, {
    id: 3,
    name: "Rogue",
    life: 5,
    deckId: 3,
    src: "./assets/img/rogue.svg"
}];

const monsters = [{
        id: 4,
        name: "Rubber Duck",
        life: 4,
        deckId: 4,
        src: "./assets/img/rubber-duck.svg"
    },
    {
        id: 5,
        name: "Albino Goblin",
        life: 8,
        deckId: 5,
        src: "./assets/img/albino-goblin.svg"
    },
    {
        id: 6,
        name: "Lazy Bat",
        life: 6,
        deckId: 6,
        src: "./assets/img/lazy-bat.svg"
    },
    {
        id: 7,
        name: "Horrid Eel",
        life: 6,
        deckId: 7,
        src: "./assets/img/horrid-eel.svg"
    },
    {
        id: 8,
        name: "Fire Imp",
        life: 5,
        deckId: 8,
        src: "./assets/img/fire-imp.svg"
    },
    {
        id: 9,
        name: "Frenzied Goblin",
        life: 6,
        deckId: 9,
        src: "./assets/img/frenzied-goblin.svg"
    },
    {
        id: 10,
        name: "Ugly Spider",
        life: 4,
        deckId: 10,
        src: "./assets/img/ugly-spider.svg"
    },
    {
        id: 11,
        name: "Goblin",
        life: 6,
        deckId: 11,
        src: "./assets/img/goblin.svg"
    },
    {
        id: 12,
        name: "Bubbly Ozee",
        life: 7,
        deckId: 12,
        src: "./assets/img/bubbly-ozee.svg"
    },
    {
        id: 13,
        name: "Leggy Spider",
        life: 7,
        deckId: 13,
        src: "./assets/img/leggy-spider.svg"
    },
    {
        id: 14,
        name: "Rat",
        life: 5,
        deckId: 14,
        src: "./assets/img/rat.svg"
    },
    {
        id: 15,
        name: "Plague Rat",
        life: 6,
        deckId: 15,
        src: "./assets/img/plague-rat.svg"
    },
    {
        id: 16,
        name: "Scary Spider",
        life: 6,
        deckId: 16,
        src: "./assets/img/scary-spider.svg"
    }

];

const backgrounds = [{
    id: 1,
    name: 1,
    src: "./assets/img/backgrounds/tile01sm.png"
}, {
    id: 2,
    name: 2,
    src: "./assets/img/backgrounds/tile02sm.png"
}, {
    id: 3,
    name: 3,
    src: "./assets/img/backgrounds/tile03sm.png"
}, {
    id: 4,
    name: 4,
    src: "./assets/img/backgrounds/tile04sm.png"
}, {
    id: 5,
    name: 5,
    src: "./assets/img/backgrounds/tile05sm.png"
}, {
    id: 6,
    name: 6,
    src: "./assets/img/backgrounds/tile06sm.png"
}, {
    id: 7,
    name: 7,
    src: "./assets/img/backgrounds/tile07sm.png"
}, {
    id: 8,
    name: 8,
    src: "./assets/img/backgrounds/tile08sm.png"
}, {
    id: 9,
    name: 9,
    src: "./assets/img/backgrounds/tile09sm.png"
}, {
    id: 10,
    name: 10,
    src: "./assets/img/backgrounds/tile10sm.png"
}, {
    id: 11,
    name: 11,
    src: "./assets/img/backgrounds/tile11sm.png"
}];