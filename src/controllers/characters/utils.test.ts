import { sortAndFilterCharacters, sortCharacters, filterCharacters } from './utils';
import * as mockEntities from '../../../tools/mockEntities';
import Character from '../../application/characters/queries/getCharactersListQuery/CharacterModel';


describe('Test filterCharacters', () => {
  it('should filter characters by the given criteria', () => {
    const characters = filterCharacters(
      mockEntities.characters as unknown as Array<Character>,
      'MALE',
      'ACTIVE',
      'Lagos'
    );
    expect.assertions(1);
    expect(
      characters.every((c) => c.Gender === 'MALE' && c.Status === 'ACTIVE' && c.Location.Name === 'Lagos')
    ).toBeTruthy();
  });
});

describe('Test sortCharacters', () => {
  it('should sort characters by name in ascending order', () => {
    const sort = 'name';
    const order = 'ascending';
    const characters = sortCharacters(
      mockEntities.characters as unknown as Array<Character>,
      sort,
      order
    );
    expect.assertions(1);
    expect(
      (characters[0].FirstName + ' ' + characters[0].LastName) < (characters[1].FirstName + ' ' + characters[1].LastName)
    ).toBeTruthy();
  });

  it('should sort characters by name in ascending order if order is not specified', () => {
    const sort = 'name';
    const characters = sortCharacters(
      mockEntities.characters as unknown as Array<Character>,
      sort
    );
    expect.assertions(1);
    expect(
      (characters[0].FirstName + ' ' + characters[0].LastName) < (characters[1].FirstName + ' ' + characters[1].LastName)
    ).toBeTruthy();
  });

  it('should sort characters by name in descending order', () => {
    const sort = 'name';
    const order = 'descending';
    const characters = sortCharacters(
      mockEntities.characters as unknown as Array<Character>,
      sort,
      order
    );
    expect.assertions(1);
    expect(
      (characters[0].FirstName + ' ' + characters[0].LastName) > (characters[1].FirstName + ' ' + characters[1].LastName)
    ).toBeTruthy();
  });

  it('should sort characters by gender in ascending order if order is not specified', () => {
    const sort = 'gender';
    const characters = sortCharacters(
      mockEntities.characters as unknown as Array<Character>,
      sort
    );
    expect.assertions(1);
    expect(
      characters[0].Gender < characters[characters.length - 1].Gender
    ).toBeTruthy();
  });

  it('should sort characters by gender in ascending order', () => {
    const sort = 'gender';
    const order = 'ascending';
    const characters = sortCharacters(
      mockEntities.characters as unknown as Array<Character>,
      sort,
      order
    );
    expect.assertions(1);
    expect(
      characters[0].Gender < characters[characters.length - 1].Gender
    ).toBeTruthy();
  });

  it('should sort characters by gender in descending order', () => {
    const sort = 'gender';
    const order = 'descending';
    const characters = sortCharacters(
      mockEntities.characters as unknown as Array<Character>,
      sort,
      order
    );
    expect.assertions(1);
    expect(
      characters[0].Gender > characters[characters.length - 1].Gender
    ).toBeTruthy();
  });
});

describe('Test sortAndFilterCharacters', () => {
  it('should sort and filter characters by the specified criteria', () => {
    const sort = 'gender';
    const order = 'ascending';
    const gender = 'MALE';
    const status = 'ACTIVE';
    const location = 'Lagos';
    const characters = sortAndFilterCharacters(
      mockEntities.characters as unknown as Array<Character>,
      gender, status, location, sort, order
    );
    expect.assertions(1);
    expect(
      characters.every((c) => c.Gender === 'MALE' && c.Status === 'ACTIVE' && c.Location.Name === 'Lagos')
    ).toBeTruthy();
  });
});
