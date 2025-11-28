export const Containers = {
    OLME: "olme",
    PAKEND: "pakend",
    PABER: "paber",
    KLAAS: "klaas",
    BIO: "bio"
};

export const containerColors = {
    olme: "hall",
    pakend: "kollane",
    paber: "sinine",
    klaas: "roheline",
    bio: "pruun"
};

const selectedContainers = [Containers.BIO, Containers.OLME];
localStorage.setItem("containers", JSON.stringify(selectedContainers));

export const wasteDB = [
    {
        name: "plastpudel",
        container: "pakend",
        instructions: "Eemalda kork, loputa ja pane kollasesse konteinerisse.",
        keywords: ["plast", "pudel", "jook", "pakend"],
        image: ""
    },
    {
        name: "kilekott",
        container: "pakend",
        instructions: "Puhas kilekott läheb kollasesse konteinerisse.",
        keywords: ["kile", "kott", "pakend"],
        image: ""
    },
    {
        name: "metallpurk",
        container: "pakend",
        instructions: "Loputa ja pane kollasesse konteinerisse.",
        keywords: ["metall", "purk", "karp", "toit"],
        image: ""
    },
    {
        name: "joogipakk",
        container: "pakend",
        instructions: "Loputa ja pane kollasesse konteinerisse.",
        keywords: ["tetrapak", "piimapakk", "mahlapakk"],
        image: ""
    },
    {
        name: "šampoonipudel",
        container: "pakend",
        instructions: "Loputa ning pane kollasesse konteinerisse.",
        keywords: ["plast", "šampoon", "kosmeetika"],
        image: ""
    },
    {
        name: "plastkarp",
        container: "pakend",
        instructions: "Puhas plastkarp läheb kollasesse konteinerisse.",
        keywords: ["karp", "plast", "toit"],
        image: ""
    },
    {
        name: "ajaleht",
        container: "paber",
        instructions: "Pane sinisesse paberikonteinerisse.",
        keywords: ["paber", "leht", "trükis"],
        image: ""
    },
    {
        name: "pappkast",
        container: "paber",
        instructions: "Lamekas ja pane paberikonteinerisse.",
        keywords: ["papp", "kast", "karp"],
        image: ""
    },
    {
        name: "vihik",
        container: "paber",
        instructions: "Pane sinisesse paberikonteinerisse.",
        keywords: ["paber", "kool", "kaustik"],
        image: ""
    },
    {
        name: "ümbrik",
        container: "paber",
        instructions: "Pane sinisesse paberikonteinerisse.",
        keywords: ["paber", "post", "ümbrik"],
        image: ""
    },
    {
        name: "kartong",
        container: "paber",
        instructions: "Pane sinisesse paberikonteinerisse.",
        keywords: ["papp", "kartong"],
        image: ""
    },
    {
        name: "klaaspudel",
        container: "klaas",
        instructions: "Eemalda kork ja pane rohelisse klaasikonteinerisse.",
        keywords: ["pudel", "klaas", "jook"],
        image: ""
    },
    {
        name: "klaaspurk",
        container: "klaas",
        instructions: "Eemalda kaas ja pane klaasikonteinerisse.",
        keywords: ["purk", "klaas", "toit"],
        image: ""
    },
    {
        name: "purunenud klaas",
        container: "klaas",
        instructions: "Pane klaasikilde klaasikonteinerisse.",
        keywords: ["klaas", "kild", "purunenud"],
        image: ""
    },
    {
        name: "õunakoored",
        container: "bio",
        instructions: "Pane pruunisse biokonteinerisse.",
        keywords: ["õun", "bio", "koor"],
        image: ""
    },
    {
        name: "kuivanud leib",
        container: "bio",
        instructions: "Pane biokonteinerisse.",
        keywords: ["leib", "bio", "söök"],
        image: ""
    },
    {
        name: "kohvipaks",
        container: "bio",
        instructions: "Pane biokonteinerisse.",
        keywords: ["kohv", "bio"],
        image: ""
    },
    {
        name: "banaanikoored",
        container: "bio",
        instructions: "Pane biokonteinerisse.",
        keywords: ["banaan", "koor", "bio"],
        image: ""
    },
    {
        name: "muna kest",
        container: "bio",
        instructions: "Pane biokonteinerisse.",
        keywords: ["muna", "kest", "bio"],
        image: ""
    },
    {
        name: "hügieeniside",
        container: "olme",
        instructions: "Pane olmeprügisse.",
        keywords: ["hügieen", "olme"],
        image: ""
    },
    {
        name: "määrdunud papp",
        container: "olme",
        instructions: "Rasvane või toiduga määrdunud papp läheb olmeprügisse.",
        keywords: ["papp", " määrdunud"],
        image: ""
    },
    {
        name: "katkine keraamika",
        container: "olme",
        instructions: "Pane katkine keraamika olmeprügisse.",
        keywords: ["katkine", "keraamika", "kruus"],
        image: ""
    },
    {
        name: "tolmukoti sisu",
        container: "olme",
        instructions: "Pane olmeprügisse.",
        keywords: ["tolm", "kott", "olme"],
        image: ""
    },
    {
        name: "sigaretikonid",
        container: "olme",
        instructions: "Pane täielikult kustutatud konid olmeprügisse.",
        keywords: ["sigaret", "tuhk"],
        image: ""
    }
];
