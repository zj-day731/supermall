import {homeRequest} from "network/request";

export function homeMult() {
  return homeRequest({
    url: '/home/multidata'
  })
}
