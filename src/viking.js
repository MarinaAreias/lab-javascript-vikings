// Soldier
class Soldier {
  constructor(health, strength) {
    (this.attack = strength), (this.receiveDamage = health);
  }
}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
