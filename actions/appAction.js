import {READ_MORE,READ_LESS} from './actionTypes'

export const clickReadMore = () => {
    return {
        type:READ_MORE
    }
}

export const clickReadLess = () => {
    return {
        type:READ_LESS
    }
}