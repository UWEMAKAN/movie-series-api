// import ICreateCharacterCommand from './ICreateCharacterCommand';
// import CharacterModel from './CharacterModel';
// import ICharacterRepositoryFacade from './createCharacter/repository/ICharacterRepositoryFacade';
// import ICharacterFactory from './createCharacter/factory/ICharacterFactory';

// class CreateCharacterCommand implements ICreateCharacterCommand {
//   private readonly repositories: ICharacterRepositoryFacade;
//   private readonly factory: ICharacterFactory;

//   constructor(
//     repositories: ICharacterRepositoryFacade,
//     factory: ICharacterFactory
//   ) {
//       this.repositories = repositories;
//       this.factory = factory;
//   }

//   public async execute(model: CharacterModel): Promise<void> {
//     const location = this.repositories.getLocation()
//     const quantity = model.Quantity;
//     const sale = this.factory.create(
//       date, customer, employee, product, quantity
//     );
//     this.repositories.addSale(sale);
//     this.inventory.notifySaleOcurred(product.Id, quantity);
//   }
// }

// export default CreateCharacterCommand;
