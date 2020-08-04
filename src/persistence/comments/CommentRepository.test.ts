import Comment from '../../domain/comments/Comment';
import CommentRepository from './CommentRepository';
import AbstractRepository from '../shared/AbstractRepository';
import { createConnection } from 'typeorm';

describe('CommentRepository', () => {
  it('should return a CommentRepository object', () => {
    const repository = new CommentRepository(Comment, createConnection, 'test');
    expect.assertions(2);
    expect(repository).toBeInstanceOf(CommentRepository);
    expect(repository).toBeInstanceOf(AbstractRepository);
  });
});

