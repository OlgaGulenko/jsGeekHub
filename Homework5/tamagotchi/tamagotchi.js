// 2. Тамагочі
// Створити об'єкт із властивостями: ім'я, здоров'я, ситість, сила, щастя.
// Об'єкт має створюватися через конструктор. В прототипі об'єкту мають бути методи для взаємодії з персонажем.
// (Годувати, Гратися, Гуляти, Спати, Лікуватися, <і ще, щось придумайте :)>)
// Кожні 3 секунди в персонажу мають зменшуватися показники. Відповідно викликаючи методи можна збілюшувати ці
 // показники. Наприклад: тамагочі.гратися() - збільшує щастя на +5, і зменшує сили на -10 одиниць і ситість на -5 одиниць...
 // Придумайти власні правила для персонажу.
// Інформацю про стан персонажу виводьте прямо на сторінку, після кожного оновлення стану. (вам домопоже document.getElementById('....'))
// У випадку смерті персонажу передбачити сумне повідомлення, і зупинити зміни інших показників.
var elem = document;

function Tamagotchi(name) {
    var that = this;
    this.name = name;
    this.status = "";
    this.foodLevel = 100;
    this.powerLevel = 100;//сила
    this.happinessLevel = 100;
    this.energyLevel = 100;
    this.healthLevel = 100;
    this.purityLevel = 100;//чистота

    this.eat = function () {
      that.foodLevel += 5;
      that.energyLevel += 5;
      that.powerLevel +=5;
    };
    this.play = function () {
      that.foodLevel -= 5;
      that.energyLevel -= 10;
      that.happinessLevel +=5;
      that.purityLevel -=10;
      that.powerLevel -=5;
      that.healthLevel -=5;
    };
    this.swim = function (){
      that.happinessLevel +=5;
      that.purityLevel +=5;
      that.healthLevel +=5;
    }
    this.sleep = function () {
      that.energyLevel += 5;
      that.foodLevel -= 5;
      that.happinessLevel +=5;
      that.healthLevel +=5;
    }

    this.treat = function () {
      that.powerLevel +=5;
      that.happinessLevel -=5;
      that.healthLevel +=5;
    }
    this.play_mean_tricks = function () {
      that.powerLevel -=5;
      that.happinessLevel +=10;
      that.healthLevel +=5;
      that.energyLevel -= 5;
      that.purityLevel -=5;
    }
    this.live();
}

Tamagotchi.prototype.live = function() {
	var that = this;

	 var leaveTimer = setInterval(function timer() {
		 that.statusInformation();
		 that.currentStatus();

				 that.happinessLevel--;
				 that.foodLevel--;
				 that.energyLevel--;
         that.powerLevel--;
         that.healthLevel--;

		 if(that.energy < 0) clearInterval(leaveTimer);


  }, 3000);
};

Tamagotchi.prototype.currentStatus = function() {

  if (this.happinessLevel < 40 || this.foodLevel < 50 || this.powerLevel < 30 || this.energyLevel < 30 || this.healthLevel < 60){
    this.status = 'I badly feel!';
  } else{
    this.status = 'I am very good!';
    	elem.getElementById('status').textContent = "I'm very good!";
  }
  if (this.happinessLevel < 50){
      elem.getElementById('status').textContent = "I feel sad. I want to play mean tricks or play or swim and sleep";
  }
  if (this.foodLevel < 50) {
    elem.getElementById('status').textContent = "I'm hungry";
  } elem.getElementById('status').textContent = "I'm full";

  if (this.powerLevel < 50){
    elem.getElementById('status').textContent = "I'm so tired. I want to sleep and eat";
  }
  if (this.energyLevel < 50) {
    elem.getElementById('status').textContent = "I'm so tired";
  }
  if (this.healthLevel  < 50) {
    elem.getElementById('status').textContent = "I'm ill";
  }
  if (this.happinessLevel < 20 || this.foodLevel < 30 || this.powerLevel < 20 || this.energyLevel < 20 || this.healthLevel < 30){
    this.status = 'I die!';
  }
  if(this.foodLevel <= 0 && this.healthLevel <= 0 || this.foodLevel <= 0 && this.energyLevel <= 0 && this.powerLevel <= 0)
    elem.getElementById('status').textContent = "Загиблик died!";

};

Tamagotchi.prototype.statusInformation = function() {

	elem.getElementById('name').textContent = this.name;
	elem.getElementById('happinessLevel').textContent = this.happinessLevel;
	elem.getElementById('foodLevel').textContent = this.foodLevel;
	elem.getElementById('powerLevel').textContent = this.powerLevel;
	elem.getElementById('energyLevel').textContent = this.energyLevel;
  elem.getElementById('healthLevel').textContent = this.healthLevel;
};
var pet = new Tamagotchi('Загиблик');
