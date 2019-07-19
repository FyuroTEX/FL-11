function Fighter(info) {
    this.getName = () => info.name;
    this.getDamage = () => info.damage;
    this.getHealth = () => info.hp;
    this.getAgility = () => info.agility;
    this.win = () => 0;
    this.lose = () => 0;
    this.heal = (healing) => {
        this.getHealth = () => healing;
    };
    this.dealDamage = (damage) => {
        let hp = this.getHealth();
        this.getHealth = () => hp - damage;
    };
    this.attack = (enemy) => {
        let max = 100;
        if (Math.floor(Math.random() * Math.floor(max)) > enemy.getAgility()) {
            enemy.dealDamage(this.getDamage());
            console.log(`${this.getName()} make ${this.getDamage()} damage to ${enemy.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    };
    this.logCombatHistory = () => {
        console.log(`Name: ${this.getName()}, Wins: ${this.win()}, Losses: ${this.lose()}`)
    };
    this.addWin = () => {
        let winCouter = this.win();
        this.win = () => winCouter + 1;
    };
    this.addLoss = () => {
        let loseCouter = this.lose();
        this.lose = () => loseCouter + 1;
    };
}

function battle(firstFighter, secondFighter) {
    if (firstFighter.getHealth() <= 0 || secondFighter.getHealth() <= 0) {
        console.log((firstFighter.getHealth() <= 0 ? firstFighter.getName() :
            secondFighter.getName()) + ' is dead and can\'t fight.')
    }
    if (firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
        firstFighter.attack(secondFighter);
    }
    if (firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
        secondFighter.attack(firstFighter);
    }
    if (firstFighter.getHealth() <= 0) {
        firstFighter.addLoss();
        secondFighter.addWin();
    } else if (secondFighter.getHealth() <= 0) {
        firstFighter.addWin();
        secondFighter.addLoss();
    }
    if (firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
        battle(firstFighter, secondFighter);
    }
}
