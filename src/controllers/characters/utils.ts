import Character from '../../application/characters/queries/getCharactersListQuery/CharacterModel';

export const filterCharacters = (
  characters: Array<Character>, gender: string, status: string, location: string
) => {
  let filteredCharacters = [...characters];
  if (gender) {
    filteredCharacters = filteredCharacters.filter((c) => c.Gender.toLowerCase() === gender.toLowerCase());
  }
  if (status) {
    filteredCharacters = filteredCharacters.filter((c) => c.Status.toLowerCase() === status.toLowerCase());
  }
  if (location) {
    filteredCharacters = filteredCharacters.filter((c) => c.Location.Name.toLowerCase() === location.toLowerCase());
  }
  return filteredCharacters;
};

export const sortCharacters = (characters: Array<Character>, sort: string, order: string) => {
  if ((sort === 'name' && !order) || (sort === 'name' && order === 'ascending')) {
    characters.sort((a, b) => {
      const aName = a.FirstName + ' ' + a.LastName;
      const bName = b.FirstName + ' ' + b.LastName;
      return aName < bName ? -1 : 1;
    });
  }
  if (sort === 'name' && order === 'descending') {
    characters.sort((a, b) => {
      const aName = a.FirstName + ' ' + a.LastName;
      const bName = b.FirstName + ' ' + b.LastName;
      return aName > bName ? -1 : 1;
    });
  }
  if ((sort === 'gender' && !order) || (sort === 'gender' && order === 'ascending')) {
    characters.sort((a, b) => {
      return a.Gender < b.Gender ? -1 : 1;
    });
  }
  if (sort === 'gender' && order === 'descending') {
    characters.sort((a, b) => {
      return a.Gender > b.Gender ? -1 : 1;
    });
  }
  return characters;
}

export const sortAndFilterCharacters = (
  characters: Array<Character>,
  gender: string, status: string,
  location: string, sort: string,
  order: string
) => {
  const filteredCharacters = filterCharacters(characters, gender, status, location);
  const sortedCharacters = sortCharacters(filteredCharacters, sort, order);
  return sortedCharacters;
}
