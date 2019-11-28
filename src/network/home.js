import {homeRequest} from "network/request";

export function homeMult() {
  return homeRequest({
    url: '/home/multidata'
  })
}

export function homeGoods(type, page) {
  return homeRequest({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
