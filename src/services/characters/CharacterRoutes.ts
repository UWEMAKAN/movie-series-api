import { Router } from 'express';
import CharactersController from '../../controllers/characters/CharactersController';
import IFactory from '../../factory/IFactory';

function router(dependencies: IFactory): Router {
  const characterRouter: Router = Router();
  const controller = new CharactersController(
    dependencies.queryFactory.characterQuery.getCharactersListQuery,
    dependencies.queryFactory.characterQuery.getCharacterDetailQuery,
    dependencies.commandFactory.characterCommand.createCharacterCommand,
    dependencies.commandFactory.characterCommand.deleteCharacterCommand,
    dependencies.commandFactory.locationCommand.createLocationCommand,
    dependencies.commandFactory.locationCommand.deleteLocationCommand
  );
  characterRouter.route('/')
    .get(controller.getAll)
    .post(controller.create);
  characterRouter.route('/:characterId')
    .get(controller.getById)
    .delete(controller.delete);
  return characterRouter;
}

export default router;
