import request from '@/request/admin-request'

export function testDbConnect(data) {
  return request({
    url: 'api/database/testConnect',
    method: 'post',
    data
  })
}

export function testServerConnect(data) {
  return request({
    url: 'api/serverDeploy/testConnect',
    method: 'post',
    data
  })
}
