class Fighter{
  constructor(health, power, name){
    this.health = health;
    this.power = power;
    this.name = name;
    }
  }

Fighter.prototype.setDamage = function(damage){
  health = health - damage;
  }
Fighter.prototype.hit = function(enemy, point){
  var damage = point * this.power;
  enemy.setDamage(damage);
  }
  class ImprovedFighter extends Fighter {
  hit(enemy, point) {
  this.doubleHit = super.hit(enemy, 2 * point);
  }
}

var fighter = new Fighter(100, 5, "Player1"),
    improvedFighter = new ImprovedFighter(100, 20, "Player2"),
    fight = function(fighter, improvedFighter, ...point){
      let i = 0;
      while (Fighter.health>=0 && ImproveFighter.health>=0 && i<point.length){
      	fighter.hit(improvedFighter, point[i]);
      	improvedFighter.hit(fighter, point[i]);
      	i++;
      }
    console.log(Fighter.name +": "+ Fighter.health);
    console.log(ImprovedFighter.name +": "+ ImprovedFighter.health);
  }
fight();
