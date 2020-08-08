import CommentModel from '../../application/comments/queries/getCommentsListQuery/CommentModel';;

export const sortComments = (comments: Array<CommentModel>) => {
  return comments.sort((a, b) => {
    return Number(b.Created) - Number(a.Created);
  });
};
