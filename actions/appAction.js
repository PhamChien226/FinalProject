import {READ_MORE,READ_LESS,CLICK_CATEGRORY} from './actionTypes'

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

export const clickCategory = (listCategory) => {
    return {
        type:CLICK_CATEGRORY,
        listCategory
    }
}