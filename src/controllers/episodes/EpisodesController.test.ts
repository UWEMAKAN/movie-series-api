// import CharactersController from './CharactersController';
// import * as mockEntities from '../../../tools/mockEntities';
// import * as mockData from '../../../tools/mockData';

// describe('CharactersController', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   const controller = new CharactersController(
//     mockEntities.getCharactersListQuery,
//     mockEntities.getCharacterDetailQuery,
//     mockEntities.createCharacterCommand,
//     mockEntities.deleteCharacterCommand,
//     mockEntities.createLocationCommand,
//     mockEntities.deleteLocationCommand
//   );

//   it('should create a CharactersController object', () => {
//     expect.assertions(2);
//     expect(controller).toBeInstanceOf(CharactersController);
//     expect(controller).toMatchObject({
//       getCharactersListQuery: expect.any(Object),
//       getCharacterDetailQuery: expect.any(Object),
//       createCharacterCommand: expect.any(Object),
//       deleteCharacterCommand: expect.any(Object),
//       createLocationCommand: expect.any(Object),
//       deleteLocationCommand: expect.any(Object),
//       getAll: expect.any(Function),
//       getById: expect.any(Function),
//       create: expect.any(Function),
//       delete: expect.any(Function)
//     });
//   });

//   it('getAll should call execute, res.json and return an array of Character objects', async () => {
//     const results = await controller.getAll(mockEntities.req, mockEntities.res, mockEntities.next);
//     expect.assertions(4);
//     expect(mockEntities.getCharactersListQuery.execute).toHaveBeenCalledTimes(1);
//     expect(mockEntities.res.json).toHaveBeenCalledTimes(1);
//     expect(results).toBeInstanceOf(Array);
//     expect(results).toEqual(mockEntities.characters);
//   });

//   it('getById should call execute, res.json and return a Character object', async () => {
//     mockEntities.req.params.characterId = '1';
//     const results = await controller.getById(mockEntities.req, mockEntities.res, mockEntities.next);
//     expect.assertions(3);
//     expect(mockEntities.getCharacterDetailQuery.execute).toHaveBeenCalledTimes(1);
//     expect(mockEntities.res.json).toHaveBeenCalledTimes(1);
//     expect(results).toEqual(mockEntities.characters[0]);
//   });

//   it('create should call execute, res.json and return a Character object', async () => {
//     // const location = mockData.locations[0];
//     // const character = { ...mockData.characters[0], episodeIds: [1, 2, 3, 4]};
//     // mockEntities.req.body = { location, character };
//     const results = await controller.create(mockEntities.createCharacterRequest, mockEntities.res, mockEntities.next);
//     expect.assertions(3);
//     // expect(mockEntities.createCharacterCommand.execute).toHaveBeenCalledTimes(1);
//     expect(mockEntities.createLocationCommand.execute).toHaveBeenCalledTimes(1);
//     expect(mockEntities.res.json).toHaveBeenCalledTimes(1);
//     expect(results).toEqual(mockEntities.characters[0]);
//   });
// });
