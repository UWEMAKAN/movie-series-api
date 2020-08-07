// import CharacterFactory from './EpisodeFactory';
// import Character from '../../../../../../domain/characters/Character';
// import * as mockData from '../../../../../../../tools/mockData';
// import * as mockEntities from '../../../../../../../tools/mockEntities';

// describe('SaleFactory', () => {
//   afterAll(() => {
//     jest.clearAllMocks();
//   });

//   it('should create a Character object', () => {
//     const factory = new CharacterFactory();
//     const episodes = mockEntities.episodes;
//     const location = mockEntities.locations[3];
//     const created = new Date();
//     const data = mockData.characters[0];
//     const character = factory.create(
//       data.firstName,
//       data.lastName,
//       data.status,
//       data.gender,
//       data.stateOfOrigin,
//       location,
//       episodes,
//       created
//     );
//     expect.assertions(1);
//     expect(character).toBeInstanceOf(Character);
//   });
// });
