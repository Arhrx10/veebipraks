const Containers = {
    OLME: "olme",
    PAKEND: "pakend", 
    PABER: "paber", 
    KLAAS: "klaas", 
    BIO: "bio", 

}

const selectedContainers = [Containers.BIO, Containers.OLME]

localStorage.setItem("containers", JSON.stringify(selectedContainers));

export const wasteDB = [
    { 
      name: "plastpudel", 
      container: "pakend",
      instructions: "Eemalda kork, loputa ja pane kollasesse konteinerisse."
    },
    { 
      name: "kilekott", 
      container: "pakend",
      instructions: "Puhas kilekott läheb kollasesse konteinerisse."
    },
    { 
      name: "klaaspudel", 
      container: "klaas",
      instructions: "Eemalda kork ja pane rohelisse klaasikonteinerisse."
    },
    { 
      name: "ajaleht", 
      container: "paber",
      instructions: "Pane sinisesse paberikonteinerisse."
    },
    { 
      name: "õunakoored", 
      container: "bio",
      instructions: "Pane pruunisse biokonteinerisse."
    },
    { 
      name: "metallpurk", 
      container: "pakend",
      instructions: "Loputa ja pane kollasesse konteinerisse."
    },
    { 
      name: "pappkast", 
      container: "paber",
      instructions: "Lamekas ja pane paberikonteinerisse."
    },
    { 
      name: "kuivanud leib", 
      container: "bio",
      instructions: "Pane biokonteinerisse."
    }
];

