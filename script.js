// Your Ship
class USS_Schwarzenegger {
  constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = .7
  }

  attack() {
    let rand = Math.random()
    if (rand < this.accuracy) {
      invader.hull -= this.firepower;
      alert(`YOUR ATTACK WAS SUCCESSFUL! \n\n PREPARE FOR INCOMING ATTACK...`)
    } else {
      alert(`YOUR ATTACK FAILED! \n\n PREPARE FOR INCOMING ATTACK...`)
    }
  }
}

const defender = new USS_Schwarzenegger()


// Alien Ship
class Alien {
  constructor() {
    this.hull = Math.floor(Math.random() * (7 - 3) + 3)
    this.firepower = Math.floor(Math.random() * (5 - 2) + 2)
    this.accuracy = Math.random() * (.8 - .6) + .6
  }
  attack() {
    let rand = Math.random()
    if (rand < this.accuracy) {
      defender.hull -= this.firepower;
      alert(`YOU'VE BEEN HIT!`)
    } else {
      alert(`NOT EVEN A SCRATCH!`)
    }
  }
}

