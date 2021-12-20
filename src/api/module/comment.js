import { createRequest } from '../axios';

export const getCommentByType = (type) => createRequest({
  url: '/comment',
  method: 'get',
  params: {
    type,
  },
});

export const addComment = (type, content) => createRequest({
  url: '/comment',
  method: 'put',
  data: {
    type, content,
  },
});

export const deleteComment = (id) => createRequest({
  url: '/comment',
  method: 'delete',
  params: {
    id,
  },
});
