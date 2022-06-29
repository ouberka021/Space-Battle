// Battle Ship Game

class USS_Schwarzenegger {
  constructor() {
    this.hull = 15;
    this.firepower = 5;
    this.accuracy = .7
  }

  attack() {
    let rand = Math.random()
    if (rand < this.accuracy) {
      invader.hull -= this.firepower;
      alert(`Attack Your Goals Was SUCCESSFUL! \n\n Be Prepare for Mass Attacks.`)
    } else {
      alert(`YOUR ATTACK FAILED!.`)
    }
  }
}
const defender = new USS_Schwarzenegger()


// Alien Ship
class AlienShip {
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

const invader = new Alien()


// Initiate Game
const start = () => {
  alert('Welcome to Battling Alien Spaceships!');
  const response = prompt(`Enter 'yes' to play or 'no' to exit.`);
  if (response.toLowerCase() === 'no') {
    alert(`Good-bye!`)
  } else if (response.toLowerCase() === 'yes') {
    alert('You are the captain, you have to protect the earth from spaceships.\n\nYour mission is to destroy every last alien ship.')
    lockAndLoad()
  } else {
    alert(`Try again next time!\n\n yes or no`)
  }
}


// Check Status
const status = () => {
  alert(`Your Status ----> HULL: ${defender.hull} \n\n FIREPOWER: ${defender.firepower} \n\n ACCURACY: ${defender.accuracy*100}%\n\nAlien#${invaderCount} Status >>> HULL: ${invader.hull} | FIREPOWER: ${invader.firepower} | ACCURACY: ${Math.floor(invader.accuracy*100)}%`)
}


// Get Ready to Battle
invaderCount = 6;

const lockAndLoad = () => {

  status()

  while (invaderCount > 0) {
    if (invader.hull < 1) {
      invaderCount--
    }

    if (invaderCount > 0 && defender.hull > 0) {
      invader.hull = Math.floor(Math.random() * (7 - 3) + 3)
      invader.firepower = Math.floor(Math.random() * (5 - 2) + 2)
      invader.accuracy = Math.random() * (.8 - .6) + .6
    } else if (invaderCount < 1 && defender.hull < 1) {
      return alert(`TIE GAME!`)
    } else if (invaderCount < 1 && defender.hull > 0) {
      return alert(`GOOD JOB, YOU HAVE DEFEATED ALL ALIENS`)
    } else {
      return alert(`SORRY, YOU LOSE!`)
    }

    const response = prompt(`Enter 'ok' to attack or 'r' to retreat`)
    if (response.toLowerCase() === 'r') {
      alert(`YOU LOSE!`)
      defender.hull = 0;
      defender.firepower = 0;
      defender.accuracy = 0;
      status()
    } else if (response.toLowerCase() === 'ok') {
      engage()
    } else {
      alert(`Try again!`)
    }
  }
}
// Battle
const engage = () => {
  defender.attack();
  invader.attack();
  lockAndLoad();
}
start(); 