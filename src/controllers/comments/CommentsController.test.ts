import CommentsController from './CommentsController';
import * as mockEntities from '../../../tools/mockEntities';

describe('CommentsController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const controller = new CommentsController(
    mockEntities.getCommentsListQuery,
    mockEntities.getCommentDetailQuery,
    mockEntities.createCommentCommand,
    mockEntities.deleteCommentCommand
  );

  it('should create a CommentsController object', () => {
    expect.assertions(2);
    expect(controller).toBeInstanceOf(CommentsController);
    expect(controller).toMatchObject({
      getCommentsListQuery: expect.any(Object),
      getCommentDetailQuery: expect.any(Object),
      createCommentCommand: expect.any(Object),
      deleteCommentCommand: expect.any(Object),
      getAll: expect.any(Function),
      getById: expect.any(Function),
      create: expect.any(Function),
      delete: expect.any(Function)
    });
  });

  it('getAll should call execute, res.json and return an array of Comment objects', async () => {
    const results = await controller.getAll(mockEntities.req, mockEntities.res, mockEntities.next);
    expect.assertions(4);
    expect(mockEntities.getCommentsListQuery.execute).toHaveBeenCalledTimes(1);
    expect(mockEntities.res.json).toHaveBeenCalledTimes(1);
    expect(results).toBeInstanceOf(Array);
    expect(results).toEqual(mockEntities.comments);
  });

  it('getById should call execute, res.json and return a Comment object', async () => {
    mockEntities.req.params.commentId = '1';
    const results = await controller.getById(mockEntities.req, mockEntities.res, mockEntities.next);
    expect.assertions(3);
    expect(mockEntities.getCommentDetailQuery.execute).toHaveBeenCalledTimes(1);
    expect(mockEntities.res.json).toHaveBeenCalledTimes(1);
    expect(results).toEqual(mockEntities.comments[0]);
  });
});
