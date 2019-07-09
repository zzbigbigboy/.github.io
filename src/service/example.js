import request from '@src/utils/request';

export function checkBranches({ id }) {
  return request(`/projects/${id}/branches`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  });
}