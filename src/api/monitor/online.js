import request from '@/request/admin-request'

export function del(keys) {
  return request({
    url: 'auth/online',
    method: 'delete',
    data: keys
  })
}
