export function extractData(character) {
  const newCharacter = {};
  newCharacter.name = character.name;
  newCharacter.birth_year = character.birth_year;
  newCharacter.gender = character.gender;
  return newCharacter;
}
