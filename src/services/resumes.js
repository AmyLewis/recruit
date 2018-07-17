import request from 'utils/request'

export function fetch(query) {
  return request(`/api/recruit/v1/list`, {
    query: {
      ...query,
      uid: 37642309,
      brief: 0,
    },
  })
}

export function sendMessage(body) {
  return request(`/api/recruit/v1/send`, {
    method: 'POST',
    query: {
      uid: 37642309,
      ...body,
    },
    body,
  })
}

export function batchSendMessage(body) {
  return request(`/api/recruit/v1/batch_send`, {
    method: 'POST',
    query: {
      uid: 37642309,
      ...body,
    },
    body,
  })
}

export function complete(body) {
  return request(`/api/recruit/v1/complete`, {
    method: 'POST',
    query: {
      uid: 37642309,
      ...body,
    },
    body,
  })
}

// 淘汰
export function elimination(body) {
  return request('/api/recruit/v1/elimination', {
    method: 'POST',
    query: {
      uid: 37642309,
      ...body,
    },
    body,
  })
}

export function applyMessage(body) {
  return request('/api/recruit/v1/reply', {
    method: 'POST',
    query: {
      uid: 37642309,
      ...body,
    },
    body,
  })
}
