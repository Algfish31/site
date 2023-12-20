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
var builds = {
  autoClicker: {
    price: 15,
    level: 0,
    cps: 0.1,
  },
  fist: {
    price: 100,
    level: 0,
    cps: 1,
  },
  friend: {
    price: 1100,
    level: 0,
    cps: 8,
  },
  lightning: {
    price: 12000,
    level: 0,
    cps: 47,
  },
  wizard: {
    price: 130000,
    level: 0,
    cps: 260,
  },
  timeMachine: {
    price: 1400000,
    level: 0,
    cps: 1400,
  },
  portal: {
    price: 20000000,
    level: 0,
    cps: 7800,
  },
  planet: {
    price: 330000000,
    level: 0,
    cps: 44000,
  },
  robot: {
    price: 5100000000,
    level: 0,
    cps: 260000,
  },
};

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

function addClick(num) {
  clicks += num;
  clicksTotal += num;
  buttonClicks += 1;
  selfMade += num;
  document.getElementById("click-num").innerHTML = Math.round(clicks);
}

setInterval(function () {
  clicks += builds.autoClicker.level * builds.autoClicker.cps;
  clicks += builds.fist.level * builds.fist.cps;
  clicks += builds.friend.level * builds.friend.cps;
  clicks += builds.lightning.level * builds.lightning.cps;
  clicks += builds.wizard.level * builds.wizard.cps;
  clicks += builds.timeMachine.level * builds.timeMachine.cps;
  clicks += builds.portal.level * builds.portal.cps;

  clicksTotal += builds.autoClicker.level * builds.autoClicker.cps;
  clicksTotal += builds.fist.level * builds.fist.cps;
  clicksTotal += builds.friend.level * builds.friend.cps;
  clicksTotal += builds.lightning.level * builds.lightning.cps;
  clicksTotal += builds.wizard.level * builds.wizard.cps;
  clicksTotal += builds.timeMachine.level * builds.timeMachine.cps;
  clicksTotal += builds.portal.level * builds.portal.cps;

  buildMade += builds.autoClicker.level * builds.autoClicker.cps;
  buildMade += builds.fist.level * builds.fist.cps;
  buildMade += builds.friend.level * builds.friend.cps;
  buildMade += builds.lightning.level * builds.lightning.cps;
  buildMade += builds.wizard.level * builds.wizard.cps;
  buildMade += builds.timeMachine.level * builds.timeMachine.cps;
  buildMade += builds.portal.level * builds.portal.cps;
  document.getElementById("click-num").innerHTML = Math.round(clicks);

  document.title =
    Math.round(clicks) + " clicks - Click the Button - Algfish31.com";

  document.getElementById("stats-clicks").innerHTML = Math.round(clicks);
  document.getElementById("stats-clicks-all-time").innerHTML =
    Math.round(clicksTotal);
  document.getElementById("stats-builds-owned").innerHTML =
    builds.autoClicker.level +
    builds.fist.level +
    builds.friend.level +
    builds.lightning.level +
    builds.wizard.level +
    builds.timeMachine.level +
    builds.portal.level;
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
  if (builds.autoClicker.level > 0) {
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
  if (builds.autoClicker.level > 1) {
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
  if (builds.autoClicker.level > 9) {
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
  if (builds.autoClicker.level > 99) {
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
  if (builds.fist.level > 0) {
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
  if (builds.fist.level > 9) {
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
  if (builds.fist.level > 99) {
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
  if (builds.friend.level > 0) {
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
  if (builds.friend.level > 9) {
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
  if (builds.friend.level > 99) {
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
  if (builds.lightning.level > 0) {
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
  if (builds.lightning.level > 9) {
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
  if (builds.lightning.level > 99) {
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
  if (builds.wizard.level > 0) {
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
  if (builds.wizard.level > 9) {
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
  if (builds.wizard.level > 99) {
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
  if (builds.timeMachine.level > 0) {
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
  if (builds.timeMachine.level > 9) {
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
  if (builds.timeMachine.level > 99) {
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
  if (builds.portal.level > 0) {
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
  if (builds.portal.level > 9) {
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
  if (builds.portal.level > 99) {
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
  if (builds.planet.level > 0) {
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
  if (builds.planet.level > 9) {
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
  if (builds.planet.level > 99) {
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
  if (builds.robot.level > 0) {
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
  if (builds.robot.level > 9) {
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
  if (builds.robot.level > 99) {
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

// Builds
function buyBuild(buildName) {
  if (clicks >= builds[buildName].price) {
    clicks = clicks - builds[buildName].price;
    builds[buildName].level += 1;
    builds[buildName].price = builds[buildName].price * 1.15;
    cps += builds[buildName].cps;
    document.getElementById("click-num").innerHTML = Math.round(clicks);
    document.getElementById("cps-num").innerHTML = Math.round(cps * 100) / 100;
    document.getElementById(`${buildName}-price`).innerHTML = Math.round(
      builds[buildName].price
    );
    document.getElementById(`${buildName}-level`).innerHTML = Math.round(
      builds[buildName].level
    );
  } else {
    alert("Not enough clicks.");
  }
}

// TODO: fix save a load
// function saveGame() {
//   var gameSave = {
//     cps: cps,
//     clicks: clicks,
//     clicksTotal: clicksTotal,
//     buttonUpgradePrice: buttonUpgradePrice,
//     buttonUpgradeLevel: buttonUpgradeLevel,
//   };
//   localStorage.setItem("gameSave", JSON.stringify(gameSave));
//   localStorage.setItem("builds", JSON.stringify(builds));
// }

// function loadGame() {
//   var savedGame = JSON.parse(localStorage.getItem("gameSave"));

//   if (savedBuilds !== undefined) {

//     builds =  JSON.parse(localStorage.getItem("builds"));
//   }

//   if (savedGame.buttonUpgradePrice !== undefined)
//     buttonUpgradePrice = savedGame.buttonUpgradePrice;
//   if (savedGame.buttonUpgradeLevel !== undefined)
//     buttonUpgradeLevel = savedGame.buttonUpgradeLevel;
//   if (saveGame.cps !== undefined) {
//     cps = saveGame.cps;
//   }
//   document.getElementById("click-num").innerHTML = Math.round(clicks);
//   document.getElementById("cps-num").innerHTML = Math.round(cps * 100) / 100;
//   document.getElementById("autoClicker-price").innerHTML = Math.round(
//     build.autoClicker.price
//   );
//   document.getElementById("autoClicker-level").innerHTML = Math.round(
//     build.autoClicker.level
//   );
//   document.getElementById("fist-price").innerHTML = Math.round(
//     build.fist.price
//   );
//   document.getElementById("fist-level").innerHTML = Math.round(
//     build.fist.level
//   );
//   document.getElementById("friend-price").innerHTML = Math.round(
//     build.friend.price
//   );
//   document.getElementById("friend-level").innerHTML = Math.round(
//     build.friend.level
//   );
//   document.getElementById("lightning-price").innerHTML = Math.round(
//     build.lightning.price
//   );
//   document.getElementById("lightning-level").innerHTML = Math.round(
//     build.lightning.level
//   );
//   document.getElementById("wizard-price").innerHTML = Math.round(
//     builds.wizard.price
//   );
//   document.getElementById("wizard-level").innerHTML = Math.round(
//     builds.wizard.level
//   );
//   document.getElementById("timeMachine-price").innerHTML = Math.round(
//     builds.timeMachine.price
//   );
//   document.getElementById("timeMachine-level").innerHTML = Math.round(
//     builds.timeMachine.level
//   );
//   document.getElementById("portal-price").innerHTML = Math.round(
//     builds.portal.price
//   );
//   document.getElementById("portal-level").innerHTML = Math.round(
//     builds.portal.level
//   );
//   document.getElementById("planet-price").innerHTML = Math.round(
//     builds.planet.price
//   );
//   document.getElementById("planet-level").innerHTML = Math.round(
//     builds.planet.level
//   );
//   document.getElementById("robot-price").innerHTML = Math.round(
//     builds.robot.price
//   );
//   document.getElementById("robot-level").innerHTML = Math.round(
//     builds.robot.level
//   );
//   document.getElementById("button-upgrade-price").innerHTML =
//     Math.round(buttonUpgradePrice);
//   document.getElementById("button-upgrade-level").innerHTML =
//     Math.round(buttonUpgradeLevel);
// }

// window.onbeforeunload = function () {
//   debugger;
//   saveGame();
//   return true;
// };

// window.onload = function () {
//   loadGame();
// };
