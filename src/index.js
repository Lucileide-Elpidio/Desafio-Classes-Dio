class AdventureHero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    strike() {
        let attack = "";

        switch (this.type) {
            case "Mage":
                attack = "Magic";
                break;
            case "Warrior":
                attack = "Sword";
                break;
            case "Monk":
                attack = "Martial arts";
                break;
            case "Ninja":
                attack = "Shuriken";
                break;
            default:
                attack = "Used an unknown method of attack";
        }

        console.log(`The ${this.type} attacked using ${attack}`);
    }
}


const hero = new AdventureHero("Gandalf", 120, "Mage");
hero.strike();

const hero2 = new AdventureHero("Aragorn", 35, "Warrior");
hero2.strike();

const hero3 = new AdventureHero("Bruce Lee", 32, "Monk");
hero3.strike();

const hero4 = new AdventureHero("Hanzo", 28, "Ninja");
hero4.strike();

