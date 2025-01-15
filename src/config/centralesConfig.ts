interface Centrale {
    name: string;
    geojson: any;
    arbreDesEquipements: string;
    production: string;
    center: [number, number];
}

const centrales: Record<string, Centrale> = {

    C3583: {
        name: "CS La Dominelais - Les Gressières (3583)",
        geojson: require("../centrales/C3583/C3583.geojson"),
        arbreDesEquipements: require("../centrales/C3583/Arbre des équipement 3583.json"),
        production: require("../centrales/C3583/production 3583.json"),
        center: [-1.645134, 47.746891],
    },
    C1752: {
        name: "CS Moissac 1 (1752)",
        geojson: require("../centrales/C1752/C1752.geojson"),
        arbreDesEquipements: require("../centrales/C1752/Arbre des équipement 1752.json"),
        production: require("../centrales/C1752/production 1752.json"),
        center: [6.186636, 43.660420],
    },
    C2488: {
        name: "CS Pujaut (2488)",
        geojson: require("../centrales/C2488/C2488.geojson"),
        arbreDesEquipements: require("../centrales/C2488/Arbre des équipement 2488.json"),
        production: require("../centrales/C2488/production 2488.json"),
        center: [4.739697, 43.977956],
    },
};

export default centrales;
