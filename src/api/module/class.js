import { createRequest1 } from '../axios';

export const findRoster = (page, pageSize) => createRequest1({
  url: '/manage/findRoster',
  method: 'get',
  data: {
    page,
    pageSize,
  },
});

export const findCoursePlanList = (page, pageSize) => createRequest1({
  url: '/manage/findCoursePlanList',
  method: 'get',
  data: {
    page,
    pageSize,
  },
});

export const findScore = (page, pageSize) => createRequest1({
  url: '/manage/findScore',
  method: 'get',
  data: {
    page,
    pageSize,
  },
});
