const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(actualMinutesInOven) {
  return 40 - actualMinutesInOven;
}
remainingMinutesInOven();

export function preparationTimeInMinutes(numberOfLayers) {
  return 2 * numberOfLayers;
}
preparationTimeInMinutes();

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return (numberOfLayers * 2) + actualMinutesInOven;
}
totalTimeInMinutes();


