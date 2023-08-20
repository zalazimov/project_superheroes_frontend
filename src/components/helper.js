import {
  stockheroposter1,
  stockheroposter2,
  stockheroposter3,
} from "../assets";

export function poster() {
  function getRandomEleFromArr(array) {
    if (array.length === 0) {
      return null;
    }
    const randomIndexNumber = Math.floor(Math.random() * array.length);
    return array[randomIndexNumber];
  }
  return getRandomEleFromArr([
    stockheroposter1,
    stockheroposter2,
    stockheroposter3,
  ]);
}

export const validateForm = [
  "name",
  "history_text",
  "superpowers",
  "aliases",
  "place_of_birth",
  "creator",
  "type_race",
  "is_favorite",
];
