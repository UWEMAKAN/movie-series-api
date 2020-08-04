import CreateCommentModel from './CreateCommentModel';

export default interface ICreateCommentCommand {
  execute(model: CreateCommentModel): Promise<void>;
}
