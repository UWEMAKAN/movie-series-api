import Comment from './Comment';
import Episode from '../episodes/Episode';
import * as mockData from '../../../tools/mockData';
import * as mockEntities from '../../../tools/mockEntities';

describe('Comment Entitiy', () => {
  it('should create and return an object of type Comment', () => {
    const comment = new Comment();
    expect.assertions(1);
    expect(comment).toBeInstanceOf(Comment);
  });

  it('should create an object of type Comment and set associated properties', () => {
    const data = mockData.comments[0];
    const comment = new Comment();
    comment.Id = data.id;
    comment.Comment = data.comment;
    comment.IpAddressLocation = data.ipAddressLocation;
    comment.Created = new Date();
    comment.Episode = mockEntities.episodes[0];
    expect.assertions(1);
    expect(comment).toMatchObject({
      id: expect.any(Number),
      comment: expect.any(String),
      ipAddressLocation: expect.any(String),
      created: expect.any(Date),
      episode: expect.any(Episode)
    });
  });
});
