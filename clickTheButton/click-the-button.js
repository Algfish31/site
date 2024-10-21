// Stats
var clicks = 0;
var clicksTotal = 0;
var buttonClicks = 0;
var selfMade = 0;
var buildMade = 0;
var cps = 0;
var startingClickPower = 1;
var clickPower = startingClickPower;
var numAchievements = 0;

// Builds
var autoclickerPrice = 15;
var autoclickerLevel = 0;
var autoclickerCps = 0.1;
var fistPrice = 100;
var fistLevel = 0;
var fistCps = 1;
var friendPrice = 1100;
var friendLevel = 0;
var friendCps = 8;
var lightningPrice = 12000;
var lightningLevel = 0;
var lightningCps = 47;
var wizardPrice = 130000;
var wizardLevel = 0;
var wizardCps = 260;
var timeMachinePrice = 1400000;
var timeMachineLevel = 0;
var timeMachineCps = 1400;
var portalPrice = 20000000;
var portalLevel = 0;
var portalCps = 7800;
var planetPrice = 330000000;
var planetLevel = 0;
var planetCps = 44000;
var robotPrice = 5100000000;
var robotLevel = 0;
var robotCps = 260000;
var alienMothershipPrice = 75000000000;
var alienMothershipLevel = 0;
var alienMothershipCps = 1600000;

// Upgrades
var buttonUpgradePrice = 100;
var buttonUpgradeLevel = 0;

// Achievements
var humbleBeginnings = false;
var tookAWhile = false;
var awesomeClicker = false;
var busyClicker = false;
var myFingersHurt = false;
var howLongHaveYouBeenPlaying = false;
var click = false;
var clickClick = false;
var clicketyClick = false;
var clabraCladabraClalakzam = false;
var punch = false;
var ouchThatHurts = false;
var buttonNearlyBroken = false;
var buyingAPc = false;
var brokenMice = false;
var pcsAreExpensive = false;
var grayClouds = false;
var iCantFallAsleep = false;
var momICantSeeItsTooYellow = false;
var magic = false;
var oopsIStruckAHuman = false;
var hogwarts = false;
var timeTravel = false;
var vacationInThePast = false;
var theFutureHasMoreClicks = false;
var aNewDimension = false;
var creepyOuterdimensionalMonsters = false;
var anotherTravelMethod = false;
var clickPlanet = false;
var theyAreTakingUpTooMuchSpace = false;
var clickGalaxy = false;
var beep = false;
var boop = false;
var beepBoop = false;
var ufo = false;

document.onkeydown = (e) => {
  if (e.key == 123) {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'I') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'C') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'J') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.key == 'U') {
      e.preventDefault();
  }
};

function addClick(num) {
  clicks += num;
  clicksTotal += num;
  buttonClicks += 1;
  selfMade += num;
  document.getElementById("click-num").innerHTML = Math.round(clicks);
}

setInterval(function () {
  clicks += autoclickerLevel * autoclickerCps;
  clicks += fistLevel * fistCps;
  clicks += friendLevel * friendCps;
  clicks += lightningLevel * lightningCps;
  clicks += wizardLevel * wizardCps;
  clicks += timeMachineLevel * timeMachineCps;
  clicks += portalLevel * portalCps;

  clicksTotal += autoclickerLevel * autoclickerCps;
  clicksTotal += fistLevel * fistCps;
  clicksTotal += friendLevel * friendCps;
  clicksTotal += lightningLevel * lightningCps;
  clicksTotal += wizardLevel * wizardCps;
  clicksTotal += timeMachineLevel * timeMachineCps;
  clicksTotal += portalLevel * portalCps;

  buildMade += autoclickerLevel * autoclickerCps;
  buildMade += fistLevel * fistCps;
  buildMade += friendLevel * friendCps;
  buildMade += lightningLevel * lightningCps;
  buildMade += wizardLevel * wizardCps;
  buildMade += timeMachineLevel * timeMachineCps;
  buildMade += portalLevel * portalCps;
  document.getElementById("click-num").innerHTML = Math.round(clicks);

  document.title =
    Math.round(clicks) + " clicks - Click the Button - Algfish31.com";

  document.getElementById("stats-clicks").innerHTML = Math.round(clicks);
  document.getElementById("stats-clicks-all-time").innerHTML =
    Math.round(clicksTotal);
  document.getElementById("stats-builds-owned").innerHTML =
    autoclickerLevel +
    fistLevel +
    friendLevel +
    lightningLevel +
    wizardLevel +
    timeMachineLevel +
    portalLevel;
  document.getElementById("stats-clicks-per-second").innerHTML =
    Math.round(cps * 100) / 100;
  document.getElementById("stats-clicks-per-click").innerHTML =
    Math.round(clickPower);
  document.getElementById("stats-button-clicks").innerHTML =
    Math.round(buttonClicks);
  document.getElementById("stats-self-made-clicks").innerHTML =
    Math.round(selfMade);
  document.getElementById("stats-build-made-clicks").innerHTML =
    Math.round(buildMade);

  // Achievements

  document.getElementById("num-achievements-text").innerHTML = numAchievements;

  if (clicksTotal > 0) {
    if (humbleBeginnings == false) {
      humbleBeginnings = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "Humble Beginnings";
      document.getElementById("notification-description-text").innerHTML =
        "Get 1 click.";
      document.getElementById("humble-beginnings-text").innerHTML =
        "Humble Beginnings";
      document.getElementById("humble-beginnings-description-text").innerHTML =
        "Get 1 click.";
    }
  }
  if (clicksTotal > 999) {
    if (tookAWhile == false) {
      tookAWhile = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Took A While";
      document.getElementById("notification-description-text").innerHTML =
        "Get 1000 clicks.";
      document.getElementById("took-a-while-text").innerHTML = "Took a While";
      document.getElementById("took-a-while-description-text").innerHTML =
        "Get 1000 clicks.";
    }
  }
  if (clicksTotal > 999999) {
    if (awesomeClicker == false) {
      awesomeClicker = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "Awesome Clicker";
      document.getElementById("notification-description-text").innerHTML =
        "Get 1000000 clicks.";
      document.getElementById("awesome-clicker-text").innerHTML =
        "Awesome Clicker";
      document.getElementById("awesome-clicker-description-text").innerHTML =
        "Get 1000000 clicks.";
    }
  }
  if (buttonClicks > 999) {
    if (busyClicker == false) {
      busyClicker = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Busy Clicker";
      document.getElementById("notification-description-text").innerHTML =
        "Click 1000 times.";
      document.getElementById("busy-clicker-text").innerHTML = "Busy Clicker";
      document.getElementById("busy-clicker-description-text").innerHTML =
        "Click 1000 times.";
    }
  }
  if (buttonClicks > 99999) {
    if (myFingersHurt == false) {
      myFingersHurt = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "My Fingers Hurt";
      document.getElementById("notification-description-text").innerHTML =
        "Click 100000 times.";
      document.getElementById("my-fingers-hurt-text").innerHTML =
        "My Fingers Hurt";
      document.getElementById("my-fingers-hurt-description-text").innerHTML =
        "Click 100000 times.";
    }
  }
  if (buttonClicks > 999999) {
    if (howLongHaveYouBeenPlaying == false) {
      howLongHaveYouBeenPlaying = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "How Long Have You Been Playing!?!";
      document.getElementById("notification-description-text").innerHTML =
        "Click 1000000 times.";
      document.getElementById("how-long-have-you-been-playing-text").innerHTML =
        "How Long Have You Been Playing!?!";
      document.getElementById(
        "how-long-have-you-been-playing-description-text"
      ).innerHTML = "Click 1000000 times.";
    }
  }
  if (autoclickerLevel > 0) {
    if (click == false) {
      click = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Click";
      document.getElementById("notification-description-text").innerHTML =
        "Have 1 autoclicker.";
      document.getElementById("click-text").innerHTML = "Click";
      document.getElementById("click-description-text").innerHTML =
        "Have 1 autoclicker.";
    }
  }
  if (autoclickerLevel > 1) {
    if (clickClick == false) {
      clickClick = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Click Click";
      document.getElementById("notification-description-text").innerHTML =
        "Have 2 autoclickers.";
      document.getElementById("click-click-text").innerHTML = "Click Click";
      document.getElementById("click-click-description-text").innerHTML =
        "Have 2 autoclickers.";
    }
  }
  if (autoclickerLevel > 9) {
    if (clicketyClick == false) {
      clicketyClick = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Clickety Click";
      document.getElementById("notification-description-text").innerHTML =
        "Have 10 autoclickers.";
      document.getElementById("clickety-click-text").innerHTML =
        "Clickety Click";
      document.getElementById("clickety-click-description-text").innerHTML =
        "Have 10 autoclickers.";
    }
  }
  if (autoclickerLevel > 99) {
    if (clabraCladabraClalakzam == false) {
      clabraCladabraClalakzam = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "Clabra Cladabra Clalakzam";
      document.getElementById("notification-description-text").innerHTML =
        "Have 100 autoclickers.";
      document.getElementById("clabra-cladabra-clalakzam-text").innerHTML =
        "Clabra Cladabra Clalakzam";
      document.getElementById(
        "clabra-cladabra-clalakzam-description-text"
      ).innerHTML = "Have 100 autoclickers.";
    }
  }
  if (fistLevel > 0) {
    if (punch == false) {
      punch = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Punch";
      document.getElementById("notification-description-text").innerHTML =
        "Have 1 fist.";
      document.getElementById("punch-text").innerHTML = "Punch";
      document.getElementById("punch-description-text").innerHTML =
        "Have 1 fist.";
    }
  }
  if (fistLevel > 9) {
    if (ouchThatHurts == false) {
      ouchThatHurts = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "Ouch! That hurts";
      document.getElementById("notification-description-text").innerHTML =
        "Have 10 fists.";
      document.getElementById("ouch-that-hurts-text").innerHTML =
        "Ouch! That hurts";
      document.getElementById("ouch-that-hurts-description-text").innerHTML =
        "Have 10 fists.";
    }
  }
  if (fistLevel > 99) {
    if (buttonNearlyBroken == false) {
      buttonNearlyBroken = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "Button. Nearly. Broken.";
      document.getElementById("notification-description-text").innerHTML =
        "Have 100 fists.";
      document.getElementById("button-nearly-broken-text").innerHTML =
        "Button. Nearly. Broken.";
      document.getElementById(
        "button-nearly-broken-description-text"
      ).innerHTML = "Have 100 fists.";
    }
  }
  if (friendLevel > 0) {
    if (buyingAPc == false) {
      buyingAPc = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Buying a PC";
      document.getElementById("notification-description-text").innerHTML =
        "Have 1 friend.";
      document.getElementById("buying-a-pc-text").innerHTML = "Buying a PC";
      document.getElementById("buying-a-pc-description-text").innerHTML =
        "Have 1 friend.";
    }
  }
  if (friendLevel > 9) {
    if (brokenMice == false) {
      brokenMice = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Broken Mice";
      document.getElementById("notification-description-text").innerHTML =
        "Have 10 friends.";
      document.getElementById("broken-mice-text").innerHTML = "Broken Mice";
      document.getElementById("broken-mice-description-text").innerHTML =
        "Have 10 friends.";
    }
  }
  if (friendLevel > 99) {
    if (pcsAreExpensive == false) {
      pcsAreExpensive = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "PCs are Expensive";
      document.getElementById("notification-description-text").innerHTML =
        "Have 100 friends.";
      document.getElementById("pcs-are-expensive-text").innerHTML =
        "PCs are Expensive";
      document.getElementById("pcs-are-expensive-description-text").innerHTML =
        "Have 100 friends.";
    }
  }
  if (lightningLevel > 0) {
    if (grayClouds == false) {
      grayClouds = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Gray Clouds";
      document.getElementById("notification-description-text").innerHTML =
        "Have 1 lightning.";
      document.getElementById("gray-clouds-text").innerHTML = "Gray Clouds";
      document.getElementById("gray-clouds-description-text").innerHTML =
        "Have 1 lightning.";
    }
  }
  if (lightningLevel > 9) {
    if (iCantFallAsleep == false) {
      iCantFallAsleep = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "I Can't Fall Asleep";
      document.getElementById("notification-description-text").innerHTML =
        "Have 10 lightnings.";
      document.getElementById("i-cant-fall-asleep-text").innerHTML =
        "I Can't Fall Asleep";
      document.getElementById("i-cant-fall-asleep-description-text").innerHTML =
        "Have 10 lightnings.";
    }
  }
  if (lightningLevel > 99) {
    if (momICantSeeItsTooYellow == false) {
      momICantSeeItsTooYellow = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "Mom! I Can't See!";
      document.getElementById("notification-description-text").innerHTML =
        "Have 100 lightnings.";
      document.getElementById("mom-i-cant-see-its-too-yellow-text").innerHTML =
        "Mom! I Can't See!";
      document.getElementById(
        "mom-i-cant-see-its-too-yellow-description-text"
      ).innerHTML = "Have 100 lightnings.";
    }
  }
  if (wizardLevel > 0) {
    if (magic == false) {
      magic = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Magic";
      document.getElementById("notification-description-text").innerHTML =
        "Have 1 wizard.";
      document.getElementById("magic-text").innerHTML = "Magic";
      document.getElementById("magic-description-text").innerHTML =
        "Have 100 lightnings.";
    }
  }
  if (wizardLevel > 9) {
    if (oopsIStruckAHuman == false) {
      oopsIStruckAHuman = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "Oops, I struck a human.";
      document.getElementById("notification-description-text").innerHTML =
        "Have 10 wizards.";
      document.getElementById("oops-i-struck-a-human-text").innerHTML =
        "Oops. I struck a human.";
      document.getElementById(
        "oops-i-struck-a-human-description-text"
      ).innerHTML = "Have 10 wizards.";
    }
  }
  if (wizardLevel > 99) {
    if (hogwarts == false) {
      hogwarts = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Hogwarts";
      document.getElementById("notification-description-text").innerHTML =
        "Have 100 wizards.";
      document.getElementById("hogwarts-text").innerHTML = "Hogwarts";
      document.getElementById("hogwarts-description-text").innerHTML =
        "Have 100 wizards.";
    }
  }
  if (timeMachineLevel > 0) {
    if (timeTravel == false) {
      timeTravel = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Time Travel";
      document.getElementById("notification-description-text").innerHTML =
        "Have 1 time machine.";
      document.getElementById("hogwarts-text").innerHTML = "Time Travel";
      document.getElementById("hogwarts-description-text").innerHTML =
        "Have 1 time machine.";
    }
  }
  if (timeMachineLevel > 9) {
    if (vacationInThePast == false) {
      vacationInThePast = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "Vacation in the Past";
      document.getElementById("notification-description-text").innerHTML =
        "Have 10 time machines.";
      document.getElementById("vacation-in-the-past-text").innerHTML =
        "Vacation In The Past";
      document.getElementById(
        "vacation-in-the-past-description-text"
      ).innerHTML = "Have 10 time machines.";
    }
  }
  if (timeMachineLevel > 99) {
    if (theFutureHasMoreClicks == false) {
      theFutureHasMoreClicks = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "The FUture Has More Clicks";
      document.getElementById("notification-description-text").innerHTML =
        "Have 100 time machines.";
      document.getElementById("the-future-has-more-clicks-text").innerHTML =
        "The Future Has More Clicks";
      document.getElementById(
        "the-future-has-more-clicks-description-text"
      ).innerHTML = "Have 100 time machines.";
    }
  }
  if (portalLevel > 0) {
    if (aNewDimension == false) {
      aNewDimension = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "A New Dimension";
      document.getElementById("notification-description-text").innerHTML =
        "Have a portal.";
      document.getElementById("vacation-in-the-past-text").innerHTML =
        "A New Dimension";
      document.getElementById(
        "vacation-in-the-past-description-text"
      ).innerHTML = "Have a portal.";
    }
  }
  if (portalLevel > 9) {
    if (creepyOuterdimensionalMonsters == false) {
      creepyOuterdimensionalMonsters = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "Creepy Monsters";
      document.getElementById("notification-description-text").innerHTML =
        "Have 10 portals.";
      document.getElementById(
        "creepy-outerdimensional-monsters-text"
      ).innerHTML = "Creepy Monsters";
      document.getElementById(
        "creepy-outerdimensional-monsters-description-text"
      ).innerHTML = "Have 10 portals.";
    }
  }
  if (portalLevel > 99) {
    if (anotherTravelMethod == false) {
      anotherTravelMethod = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "Another Travel Method";
      document.getElementById("notification-description-text").innerHTML =
        "Have 100 portals.";
      document.getElementById("another-travel-method-text").innerHTML =
        "Another Travel Method";
      document.getElementById(
        "another-travel-method-description-text"
      ).innerHTML = "Have 100 portals.";
    }
  }
  if (planetLevel > 0) {
    if (clickPlanet == false) {
      clickPlanet = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Click Planet";
      document.getElementById("notification-description-text").innerHTML =
        "Have a planet.";
      document.getElementById("click-planet-text").innerHTML = "Click Planet";
      document.getElementById("click-planet-description-text").innerHTML =
        "Have a planet.";
    }
  }
  if (planetLevel > 9) {
    if (theyAreTakingUpTooMuchSpace == false) {
      theyAreTakingUpTooMuchSpace = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML =
        "They're Taking up Too Much Space";
      document.getElementById("notification-description-text").innerHTML =
        "Have 10 planets.";
      document.getElementById(
        "they-are-taking-up-too-much-space-text"
      ).innerHTML = "They're Taking up Too Much Space";
      document.getElementById(
        "they-are-taking-up-too-much-space-description-text"
      ).innerHTML = "Have 10 planets.";
    }
  }
  if (planetLevel > 99) {
    if (clickGalaxy == false) {
      clickGalaxy = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Click Galaxy";
      document.getElementById("notification-description-text").innerHTML =
        "Have 100 planets.";
      document.getElementById("click-galaxy-text").innerHTML = "Click Galaxy";
      document.getElementById("click-galaxy-text-description-text").innerHTML =
        "Have 100 planets.";
    }
  }
  if (robotLevel > 0) {
    if (beep == false) {
      beep = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Beep";
      document.getElementById("notification-description-text").innerHTML =
        "Have a robot.";
      document.getElementById("beep-text").innerHTML = "Beep";
      document.getElementById("beep-description-text").innerHTML =
        "Have a robot.";
    }
  }
  if (robotLevel > 9) {
    if (boop == false) {
      boop = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Boop";
      document.getElementById("notification-description-text").innerHTML =
        "Have 10 robots.";
      document.getElementById("boop-text").innerHTML = "Boop";
      document.getElementById("boop-description-text").innerHTML =
        "Have 10 robots.";
    }
  }
  if (robotLevel > 99) {
    if (beepBoop == false) {
      beepBoop = true;
      numAchievements = numAchievements + 1;
      document.getElementById("notification-text").innerHTML = "Beep Boop";
      document.getElementById("notification-description-text").innerHTML =
        "Have 100 robots.";
      document.getElementById("beep-boop-text").innerHTML = "Beep Boop";
      document.getElementById("beep-boop-description-text").innerHTML =
        "Have 100 robots.";
    }
  }
}, 1000);

// Builds

function buyAutoClicker() {
  if (clicks >= autoclickerPrice) {
    clicks = clicks - autoclickerPrice;
    autoclickerLevel += 1;
    autoclickerPrice = autoclickerPrice * 1.15;
    cps += autoclickerCps;
    document.getElementById("click-num").innerHTML = Math.round(clicks);
    document.getElementById("cps-num").innerHTML = Math.round(cps * 100) / 100;
    document.getElementById("autoclicker-price").innerHTML =
      Math.round(autoclickerPrice);
    document.getElementById("autoclicker-level").innerHTML =
      Math.round(autoclickerLevel);
  } else {
    alert("Not enough clicks.");
  }
}

function buyFist() {
  if (clicks >= fistPrice) {
    clicks = clicks - fistPrice;
    fistLevel += 1;
    fistPrice = fistPrice * 1.15;
    cps += fistCps;
    document.getElementById("click-num").innerHTML = Math.round(clicks);
    document.getElementById("cps-num").innerHTML = Math.round(cps * 100) / 100;
    document.getElementById("fist-price").innerHTML = Math.round(fistPrice);
    document.getElementById("fist-level").innerHTML = Math.round(fistLevel);
  } else {
    alert("Not enough clicks.");
  }
}
function buyFriend() {
  if (clicks >= friendPrice) {
    clicks = clicks - friendPrice;
    friendLevel += 1;
    friendPrice = friendPrice * 1.15;
    cps += friendCps;
    document.getElementById("click-num").innerHTML = Math.round(clicks);
    document.getElementById("cps-num").innerHTML = Math.round(cps * 100) / 100;
    document.getElementById("friend-price").innerHTML = Math.round(friendPrice);
    document.getElementById("friend-level").innerHTML = Math.round(friendLevel);
  } else {
    alert("Not enough clicks.");
  }
}

function buyLightning() {
  if (clicks >= lightningPrice) {
    clicks = clicks - lightningPrice;
    lightningLevel += 1;
    lightningPrice = lightningPrice * 1.15;
    cps += lightningCps;
    document.getElementById("click-num").innerHTML = Math.round(clicks);
    document.getElementById("cps-num").innerHTML = Math.round(cps * 100) / 100;
    document.getElementById("lightning-price").innerHTML =
      Math.round(lightningPrice);
    document.getElementById("lightning-level").innerHTML =
      Math.round(lightningLevel);
  } else {
    alert("Not enough clicks.");
  }
}
function buyWizard() {
  if (clicks >= wizardPrice) {
    clicks = clicks - wizardPrice;
    wizardLevel += 1;
    wizardPrice = wizardPrice * 1.15;
    cps += wizardCps;
    document.getElementById("click-num").innerHTML = Math.round(clicks);
    document.getElementById("cps-num").innerHTML = Math.round(cps * 100) / 100;
    document.getElementById("wizard-price").innerHTML = Math.round(wizardPrice);
    document.getElementById("wizard-level").innerHTML = Math.round(wizardLevel);
  } else {
    alert("Not enough clicks.");
  }
}

function buyTimeMachine() {
  if (clicks >= timeMachinePrice) {
    clicks = clicks - timeMachinePrice;
    timeMachineLevel += 1;
    timeMachinePrice = timeMachinePrice * 1.15;
    cps += timeMachineCps;
    document.getElementById("click-num").innerHTML = Math.round(clicks);
    document.getElementById("cps-num").innerHTML = Math.round(cps * 100) / 100;
    document.getElementById("time-machine-price").innerHTML =
      Math.round(timeMachinePrice);
    document.getElementById("time-machine-level").innerHTML =
      Math.round(timeMachineLevel);
  } else {
    alert("Not enough clicks.");
  }
}

function buyPortal() {
  if (clicks >= portalPrice) {
    clicks = clicks - portalPrice;
    portalLevel += 1;
    portalPrice = portalPrice * 1.15;
    cps += portalCps;
    document.getElementById("click-num").innerHTML = Math.round(clicks);
    document.getElementById("cps-num").innerHTML = Math.round(cps * 100) / 100;
    document.getElementById("portal-price").innerHTML = Math.round(portalPrice);
    document.getElementById("portal-level").innerHTML = Math.round(portalLevel);
  } else {
    alert("Not enough clicks.");
  }
}

function buyPlanet() {
  if (clicks >= planetPrice) {
    clicks = clicks - planetPrice;
    planetLevel += 1;
    planetPrice = planetPrice * 1.15;
    cps += planetCps;
    document.getElementById("click-num").innerHTML = Math.round(clicks);
    document.getElementById("cps-num").innerHTML = Math.round(cps * 100) / 100;
    document.getElementById("planet-price").innerHTML = Math.round(planetPrice);
    document.getElementById("planet-level").innerHTML = Math.round(planetLevel);
  } else {
    alert("Not enough clicks.");
  }
}

function buyRobot() {
  if (clicks >= robotPrice) {
    clicks = clicks - robotPrice;
    robotLevel += 1;
    robotPrice = robotPrice * 1.15;
    cps += robotCps;
    document.getElementById("click-num").innerHTML = Math.round(clicks);
    document.getElementById("cps-num").innerHTML = Math.round(cps * 100) / 100;
    document.getElementById("robot-price").innerHTML = Math.round(robotPrice);
    document.getElementById("robot-level").innerHTML = Math.round(robotLevel);
  } else {
    alert("Not enough clicks.");
  }
}

function buyAlienMothership() {
  if (clicks >= alienMothershipPrice) {
    clicks = clicks - alienMothershipPrice;
    alienMothershipLevel += 1;
    alienMothershipPrice = alienMothershipPrice * 1.15;
    cps += alienMothershipCps;
    document.getElementById("click-num").innerHTML = Math.round(clicks);
    document.getElementById("cps-num").innerHTML = Math.round(cps * 100) / 100;
    document.getElementById("alien-mothership-price").innerHTML = Math.round(alienMothershipPrice);
    document.getElementById("alien-mothership-level").innerHTML = Math.round(alienMothershipLevel);
  } else {
    alert("Not enough clicks.");
  }
}

// Upgrades

function buyButtonUpgrade() {
  if (clicks >= buttonUpgradePrice) {
    clicks = clicks - buttonUpgradePrice;
    buttonUpgradeLevel += 1;
    buttonUpgradePrice = buttonUpgradePrice * 2;
    clickPower += 1;
    document.getElementById("click-num").innerHTML = Math.round(clicks);
    document.getElementById("cps-num").innerHTML = Math.round(cps * 100) / 100;
    document.getElementById("button-upgrade-price").innerHTML =
      Math.round(buttonUpgradePrice);
    document.getElementById("button-upgrade-level").innerHTML =
      Math.round(buttonUpgradeLevel);
  } else {
    alert("Not enough clicks.");
  }
}

// Popups

function openAchievementsPopup() {
  achievements-popup.classList.add("open-achievements-popup")
}

function closeAchievementsPopup() {
  achievements-popup.classList.remove("open-achievements-popup")
}

// Saving

function saveGame() {
  var gameSave = {
    clicks: clicks,
    clicksTotal: clicksTotal,
    buttonClicks: buttonClicks,
    selfMade: selfMade,
    buildMade: buildMade,
    clickPower: clickPower,
    startingClickPower: startingClickPower,
    autoclickerPrice: autoclickerPrice,
    autoclickerLevel: autoclickerLevel,
    autoclickerCps: autoclickerCps,
    fistPrice: fistPrice,
    fistLevel: fistLevel,
    fistCps: fistCps,
    friendPrice: friendPrice,
    friendLevel: friendLevel,
    friendCps: friendCps,
    lightningPrice: lightningPrice,
    lightningLevel: lightningLevel,
    lightningCps: lightningCps,
    wizardPrice: wizardPrice,
    wizardLevel: wizardLevel,
    wizardCps: wizardCps,
    timeMachinePrice: timeMachinePrice,
    timeMachineLevel: timeMachineLevel,
    timeMachineCps: timeMachineCps,
    portalPrice: portalPrice,
    portalLevel: portalLevel,
    portalCps: portalCps,
    planetPrice: planetPrice,
    planetLevel: planetLevel,
    planetCps: planetCps,
    robotPrice: robotPrice,
    robotLevel: robotLevel,
    robotCps: robotCps,
    alienMothershipPrice: alienMothershipPrice,
    alienMothershipLevel: alienMothershipLevel,
    alienMothershipCps: alienMothershipCps,
    buttonUpgradePrice: buttonUpgradePrice,
    buttonUpgradeLevel: buttonUpgradeLevel,
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function loadGame() {
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.clicks !== "undefined") clicks = savedGame.clicks;
  if (typeof savedGame.clicksTotal !== "undefined")
    clicksTotal = savedGame.clicksTotal;
  if (typeof savedGame.buttonClicks !== "undefined")
    buttonClicks = savedGame.buttonClicks;
  if (typeof savedGame.selfMade !== "undefined") selfMade = savedGame.selfMade;
  if (typeof savedGame.buildMade !== "undefined")
    buildMade = savedGame.buildMade;
  if (typeof savedGame.clickPower !== "undefined")
    clickPower = savedGame.clickPower;
  if (typeof savedGame.startingClickPower !== "undefined")
    startingClickPower = savedGame.startingClickPower;
  if (typeof savedGame.autoclickerPrice !== "undefined")
    autoclickerPrice = savedGame.autoclickerPrice;
  if (typeof savedGame.autoclickerLevel !== "undefined")
    autoclickerLevel = savedGame.autoclickerLevel;
  if (typeof savedGame.autoclickerCps !== "undefined")
    autoclickerCps = savedGame.autoclickerCps;
  if (typeof savedGame.fistPrice !== "undefined")
    fistPrice = savedGame.fistPrice;
  if (typeof savedGame.fistLevel !== "undefined")
    fistLevel = savedGame.fistLevel;
  if (typeof savedGame.fistCps !== "undefined") fistCps = savedGame.fistCps;
  if (typeof savedGame.friendPrice !== "undefined")
    friendPrice = savedGame.friendPrice;
  if (typeof savedGame.friendLevel !== "undefined")
    friendLevel = savedGame.friendLevel;
  if (typeof savedGame.friendCps !== "undefined")
    friendCps = savedGame.friendCps;
  if (typeof savedGame.lightningPrice !== "undefined")
    lightningPrice = savedGame.lightningPrice;
  if (typeof savedGame.lightningLevel !== "undefined")
    lightningLevel = savedGame.lightningLevel;
  if (typeof savedGame.lightningCps !== "undefined")
    lightningCps = savedGame.lightningCps;
  if (typeof savedGame.wizardPrice !== "undefined")
    wizardPrice = savedGame.wizardPrice;
  if (typeof savedGame.wizardLevel !== "undefined")
    wizardLevel = savedGame.wizardLevel;
  if (typeof savedGame.wizardCps !== "undefined")
    wizardCps = savedGame.wizardCps;
  if (typeof savedGame.timeMachinePrice !== "undefined")
    timeMachinePrice = savedGame.timeMachinePrice;
  if (typeof savedGame.timeMachineLevel !== "undefined")
    timeMachineLevel = savedGame.timeMachineLevel;
  if (typeof savedGame.timeMachineCps !== "undefined")
    timeMachineCps = savedGame.timeMachineCps;
  if (typeof savedGame.portalPrice !== "undefined")
    portalPrice = savedGame.portalPrice;
  if (typeof savedGame.portalLevel !== "undefined")
    portalLevel = savedGame.portalLevel;
  if (typeof savedGame.portalCps !== "undefined")
    portalCps = savedGame.portalCps;
  if (typeof savedGame.planetPrice !== "undefined")
    planetPrice = savedGame.planetPrice;
  if (typeof savedGame.planetLevel !== "undefined")
    planetLevel = savedGame.planetLevel;
  if (typeof savedGame.planetCps !== "undefined")
    planetCps = savedGame.planetCps;
  if (typeof savedGame.robotPrice !== "undefined")
    robotPrice = savedGame.robotPrice;
  if (typeof savedGame.robotLevel !== "undefined")
    robotLevel = savedGame.robotLevel;
  if (typeof savedGame.robotCps !== "undefined") 
    robotCps = savedGame.robotCps;
  if (typeof savedGame.alienMothershipPrice !== "undefined")
    alienMothershipPrice = savedGame.alienMothershipPrice;
  if (typeof savedGame.alienMothershipLevel !== "undefined")
    alienMothership = savedGame.alienMothershipLevel;
  if (typeof savedGame.alienMothershipCps !== "undefined") 
    alienMothershipCps = savedGame.alienMothershipCps;
  if (typeof savedGame.buttonUpgradePrice !== "undefined")
    buttonUpgradePrice = savedGame.buttonUpgradePrice;
  if (typeof savedGame.buttonUpgradeLevel !== "undefined")
    buttonUpgradeLevel = savedGame.buttonUpgradeLevel;
  cps =
    autoclickerLevel * autoclickerCps +
    fistLevel * fistCps +
    friendLevel * friendCps +
    lightningLevel * lightningCps +
    wizardLevel * wizardCps +
    timeMachineLevel * timeMachineCps +
    portalLevel * portalCps +
    planetLevel * planetCps +
    robotLevel * robotCps +
    alienMothershipLevel * alienMothershipCps;
  document.getElementById("click-num").innerHTML = Math.round(clicks);
  document.getElementById("cps-num").innerHTML = Math.round(cps * 100) / 100;
  document.getElementById("autoclicker-price").innerHTML = Math.round(autoclickerPrice);
  document.getElementById("autoclicker-level").innerHTML = Math.round(autoclickerLevel);
  document.getElementById("fist-price").innerHTML = Math.round(fistPrice);
  document.getElementById("fist-level").innerHTML = Math.round(fistLevel);
  document.getElementById("friend-price").innerHTML = Math.round(friendPrice);
  document.getElementById("friend-level").innerHTML = Math.round(friendLevel);
  document.getElementById("lightning-price").innerHTML = Math.round(lightningPrice);
  document.getElementById("lightning-level").innerHTML = Math.round(lightningLevel);
  document.getElementById("wizard-price").innerHTML = Math.round(wizardPrice);
  document.getElementById("wizard-level").innerHTML = Math.round(wizardLevel);
  document.getElementById("time-machine-price").innerHTML = Math.round(timeMachinePrice);
  document.getElementById("time-machine-level").innerHTML = Math.round(timeMachineLevel);
  document.getElementById("portal-price").innerHTML = Math.round(portalPrice);
  document.getElementById("portal-level").innerHTML = Math.round(portalLevel);
  document.getElementById("planet-price").innerHTML = Math.round(planetPrice);
  document.getElementById("planet-level").innerHTML = Math.round(planetLevel);
  document.getElementById("robot-price").innerHTML = Math.round(robotPrice);
  document.getElementById("robot-level").innerHTML = Math.round(robotLevel);
  document.getElementById("alien-mothership-price").innerHTML = Math.round(alienMothershipPrice);
  document.getElementById("alien-mothership-level").innerHTML = Math.round(alienMothershipLevel);
  document.getElementById("button-upgrade-price").innerHTML = Math.round(buttonUpgradePrice);
  document.getElementById("button-upgrade-level").innerHTML = Math.round(buttonUpgradeLevel);
}

setInterval(function () {
  saveGame();
}, 1000);

window.onload = function () {
  loadGame();
};

function resetGame() {
  // Stats
  clicks = 0;
  clicksTotal = 0;
  buttonClicks = 0;
  selfMade = 0;
  buildMade = 0;
  cps = 0;
  startingClickPower = 1;
  clickPower = startingClickPower;
  numAchievements = 0;

  // Builds
  autoclickerPrice = 15;
  autoclickerLevel = 0;
  autoclickerCps = 0.1;
  fistPrice = 100;
  fistLevel = 0;
  fistCps = 1;
  friendPrice = 1100;
  friendLevel = 0;
  friendCps = 8;
  lightningPrice = 12000;
  lightningLevel = 0;
  lightningCps = 47;
  wizardPrice = 130000;
  wizardLevel = 0;
  wizardCps = 260;
  timeMachinePrice = 1400000;
  timeMachineLevel = 0;
  timeMachineCps = 1400;
  portalPrice = 20000000;
  portalLevel = 0;
  portalCps = 7800;
  planetPrice = 330000000;
  planetLevel = 0;
  planetCps = 44000;
  robotPrice = 5100000000;
  robotLevel = 0;
  robotCps = 260000;
  alienMothershipPrice = 75000000000;
  alienMothershipLevel = 0;
  alienMothershipCps = 1600000;

  // Upgrades
  buttonUpgradePrice = 100;
  buttonUpgradeLevel = 0;

  // Achievements
  humbleBeginnings = false;
  tookAWhile = false;
  awesomeClicker = false;
  busyClicker = false;
  myFingersHurt = false;
  howLongHaveYouBeenPlaying = false;
  click = false;
  clickClick = false;
  clicketyClick = false;
  clabraCladabraClalakzam = false;
  punch = false;
  ouchThatHurts = false;
  buttonNearlyBroken = false;
  buyingAPc = false;
  brokenMice = false;
  pcsAreExpensive = false;
  grayClouds = false;
  iCantFallAsleep = false;
  momICantSeeItsTooYellow = false;
  magic = false;
  oopsIStruckAHuman = false;
  hogwarts = false;
  timeTravel = false;
  vacationInThePast = false;
  theFutureHasMoreClicks = false;
  aNewDimension = false;
  creepyOuterdimensionalMonsters = false;
  anotherTravelMethod = false;
  clickPlanet = false;
  theyAreTakingUpTooMuchSpace = false;
  clickGalaxy = false;
  beep = false;
  boop = false;
  beepBoop = false;
  ufo = false;
  document.getElementById("click-num").innerHTML = Math.round(clicks);
  document.getElementById("cps-num").innerHTML = Math.round(cps * 100) / 100;
  document.getElementById("autoclicker-price").innerHTML = Math.round(autoclickerPrice);
  document.getElementById("autoclicker-level").innerHTML = Math.round(autoclickerLevel);
  document.getElementById("fist-price").innerHTML = Math.round(fistPrice);
  document.getElementById("fist-level").innerHTML = Math.round(fistLevel);
  document.getElementById("friend-price").innerHTML = Math.round(friendPrice);
  document.getElementById("friend-level").innerHTML = Math.round(friendLevel);
  document.getElementById("lightning-price").innerHTML = Math.round(lightningPrice);
  document.getElementById("lightning-level").innerHTML = Math.round(lightningLevel);
  document.getElementById("wizard-price").innerHTML = Math.round(wizardPrice);
  document.getElementById("wizard-level").innerHTML = Math.round(wizardLevel);
  document.getElementById("time-machine-price").innerHTML = Math.round(timeMachinePrice);
  document.getElementById("time-machine-level").innerHTML = Math.round(timeMachineLevel);
  document.getElementById("portal-price").innerHTML = Math.round(portalPrice);
  document.getElementById("portal-level").innerHTML = Math.round(portalLevel);
  document.getElementById("planet-price").innerHTML = Math.round(planetPrice);
  document.getElementById("planet-level").innerHTML = Math.round(planetLevel);
  document.getElementById("robot-price").innerHTML = Math.round(robotPrice);
  document.getElementById("robot-level").innerHTML = Math.round(robotLevel);
  document.getElementById("alien-mothership-price").innerHTML = Math.round(alienMothershipPrice);
  document.getElementById("alien-mothership-level").innerHTML = Math.round(alienMothershipLevel);
  document.getElementById("button-upgrade-price").innerHTML = Math.round(buttonUpgradePrice);
  document.getElementById("button-upgrade-level").innerHTML = Math.round(buttonUpgradeLevel);
  saveGame();
}