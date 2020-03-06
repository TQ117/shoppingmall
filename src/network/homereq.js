//此页放的是home页放的请求数据
import {
    request
} from './request'

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type, page) {
    return request({
        url: '/api/wh/home/data',
        params: {
            type,
            page
        }
    })
}