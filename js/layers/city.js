const BUILDING_1_BASE = 1;
const BUILDING_2_BASE = 100;
const BUILDING_3_BASE = 10000;
const BUILDING_4_BASE = 1000000;
const BUILDING_5_BASE = 100000000;
const BUILDING_6_BASE = 10000000000;
const BUILDING_1_COST = 10;
const BUILDING_2_COST = 1000;
const BUILDING_3_COST = 100000;
const BUILDING_4_COST = 10000000;
const BUILDING_5_COST = 1000000000;
const BUILDING_6_COST = 100000000000;

addLayer("p", {
    name: "city", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(1e9), // Can be a function that takes requirement increases into account
    resource: "population", // Name of prestige currency
    baseResource: "bags of money", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    base: new Decimal(1.15),
    type: "static",
    exponent: 1.15, // Prestige currency exponent
    gainMult() { 
        mult = new Decimal(1.05);
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    canBuyMax() {return true},
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    branches: ["c"],
    doReset(resettingLayer) {
        setBuyableAmount("p", 11, new Decimal(1));
        setBuyableAmount("p", 12, new Decimal(0));
        setBuyableAmount("p", 13, new Decimal(0));
        setBuyableAmount("p", 21, new Decimal(0));
        setBuyableAmount("p", 22, new Decimal(0));
        setBuyableAmount("p", 23, new Decimal(0));
    },
    buyables: {
        rows: 2,
        cols: 3,
        11: {
            title: "Lemonade Stand",
            cost() { return new Decimal(BUILDING_1_COST).mul(new Decimal(1.15).pow(getBuyableAmount("p", 11))).round() },
            display() {return `Currently owned: ${format(getBuyableAmount("p",11))}<br/>Currently giving: ${format(buyableEffect("p",11))}/sec<br/><br/>Cost: ${format(this.cost())} bags of money`},
            canAfford() { return player.points.gte(this.cost()) },
            effect() {
                return getBuyableAmount("p", 11)*(BUILDING_1_BASE)+(getBuyableAmount("p", 11)*(BUILDING_1_BASE)*(player[this.layer].points.mul(0.05)));
            },
            buy() {
                player.points = player.points.sub(this.cost());
                setBuyableAmount("p", 11, getBuyableAmount("p", 11).add(1));
            }
        },
        12: {
            title: "Building 1.2",
            cost() { return new Decimal(BUILDING_2_COST).mul(new Decimal(1.15).pow(getBuyableAmount("p", 12))).round() },
            display() {return `Currently owned: ${format(getBuyableAmount("p",12))}<br/>Currently giving: ${format(buyableEffect("p",12))}/sec<br/><br/>Cost: ${format(this.cost())} bags of money`},
            canAfford() { return player.points.gte(this.cost()) },
            effect() {
                return getBuyableAmount("p", 12)*(BUILDING_2_BASE)+(getBuyableAmount("p", 12)*(BUILDING_2_BASE)*(player[this.layer].points.mul(0.05)));
            },
            buy() {
                player.points = player.points.sub(this.cost());
                setBuyableAmount("p", 12, getBuyableAmount("p", 12).add(1));
            }
        },
        13: {
            title: "Building 1.3",
            cost() { return new Decimal(BUILDING_3_COST).mul(new Decimal(1.15).pow(getBuyableAmount("p", 13))).round() },
            display() {return `Currently owned: ${format(getBuyableAmount("p",13))}<br/>Currently giving: ${format(buyableEffect("p",13))}/sec<br/><br/>Cost: ${format(this.cost())} bags of money`},
            canAfford() { return player.points.gte(this.cost()) },
            effect() {
                return getBuyableAmount("p", 13)*(BUILDING_3_BASE)+(getBuyableAmount("p", 13)*(BUILDING_3_BASE)*(player[this.layer].points.mul(0.05)));
            },
            buy() {
                player.points = player.points.sub(this.cost());
                setBuyableAmount("p", 13, getBuyableAmount("p", 13).add(1));
            }
        },
        21: {
            title: "Building 2.1",
            cost() { return new Decimal(BUILDING_4_COST).mul(new Decimal(1.15).pow(getBuyableAmount("p", 21))).round() },
            display() {return `Currently owned: ${format(getBuyableAmount("p",21))}<br/>Currently giving: ${format(buyableEffect("p",21))}/sec<br/><br/>Cost: ${format(this.cost())} bags of money`},
            canAfford() { return player.points.gte(this.cost()) },
            effect() {
                return getBuyableAmount("p", 21)*(BUILDING_4_BASE)+(getBuyableAmount("p", 21)*(BUILDING_4_BASE)*(player[this.layer].points.mul(0.05)));
            },
            buy() {
                player.points = player.points.sub(this.cost());
                setBuyableAmount("p", 21, getBuyableAmount("p", 21).add(1));
            }
        },
        22: {
            title: "Building 2.2",
            cost() { return new Decimal(BUILDING_5_COST).mul(new Decimal(1.15).pow(getBuyableAmount("p", 22))).round() },
            display() {return `Currently owned: ${format(getBuyableAmount("p",22))}<br/>Currently giving: ${format(buyableEffect("p",22))}/sec<br/><br/>Cost: ${format(this.cost())} bags of money`},
            canAfford() { return player.points.gte(this.cost()) },
            effect() {
                return getBuyableAmount("p", 22)*(BUILDING_5_BASE)+(getBuyableAmount("p", 22)*(BUILDING_5_BASE)*(player[this.layer].points.mul(0.05)));
            },
            buy() {
                player.points = player.points.sub(this.cost());
                setBuyableAmount("p", 22, getBuyableAmount("p", 22).add(1));
            }
        },
        23: {
            title: "Building 2.3",
            cost() { return new Decimal(BUILDING_6_COST).mul(new Decimal(1.15).pow(getBuyableAmount("p", 23))).round() },
            display() {return `Currently owned: ${format(getBuyableAmount("p",23))}<br/>Currently giving: ${format(buyableEffect("p",23))}/sec<br/><br/>Cost: ${format(this.cost())} bags of money`},
            canAfford() { return player.points.gte(this.cost()) },
            effect() {
                return getBuyableAmount("p", 23)*(BUILDING_6_BASE)+(getBuyableAmount("p", 23)*(BUILDING_6_BASE)*(player[this.layer].points.mul(0.05)));
            },
            buy() {
                player.points = player.points.sub(this.cost());
                setBuyableAmount("p", 23, getBuyableAmount("p", 23).add(1));
            }
        },
    }
})