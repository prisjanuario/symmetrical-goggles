
var knightIsAwake = true;
export function canExecuteFastAttack(knightIsAwake) {
  return knightIsAwake != true;
}
canExecuteFastAttack();

var knightIsAwake = false;
var archerIsAwake = true;
var prisonerIsAwake = false;
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (archerIsAwake != true && knightIsAwake == false && prisonerIsAwake == false) {
    return false;
  } else {
    return true;
  }
}
canSpy();

var archerIsAwake = false;
var prisonerIsAwake = true;
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (prisonerIsAwake && archerIsAwake != false) {
    return false;
  } else if (prisonerIsAwake != true) {
    return false;
  } else if (prisonerIsAwake != true && archerIsAwake) {
    return false;
  } else {
    return true;
  }
}
canSignalPrisoner()

var knightIsAwake = false;
var archerIsAwake = true;
var prisonerIsAwake = false;
var petDogIsPresent = false;
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  return ((petDogIsPresent != false && archerIsAwake != true) == true) || ((petDogIsPresent == false && prisonerIsAwake == true && archerIsAwake == false && knightIsAwake == false) == true);
}