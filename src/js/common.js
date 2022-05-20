import axios from "axios";

// const requestUrl = "http://175.24.175.35:9000"
const requestUrl = "http://adastra.isamumu.cn:9000"
// const requestUrl = "http://localhost:9000"

const ps = 12
const jsonBirdV1 = 'https://bird.ioliu.cn/v1'

function item_video(that, it_name) {
    let lo_url = requestUrl + '/api/general/' + it_name + '/' + ps
    axios.get(lo_url).then(function (response) {
        that.videos = response.data.data
    })
}

function main_video(that) {
    let lo_url = requestUrl + '/api/recommend'
    axios.get(lo_url).then(function (response) {
        that.videos = response.data.data
    })
}

function bl_search(that, keyword) {
    let lo_url = requestUrl + '/api/search/' + keyword
    axios.get(lo_url).then(function (response) {
        that.$router.push({
            name: 'lb-search',
            params: {videos: response.data.data},
        })
    }).then()
}

function video_detail(that, bvid) {
    let lo_url = requestUrl + '/api/video/' + bvid
    axios.get(lo_url).then(function (response) {
        that.$router.push({
            path: '/player',
            query: {
                video: response.data.data
            }
        })
    }).then()
}

function live_video(that) {
    let lo_url = requestUrl + '/api/live'
    axios.get(lo_url).then(function (response) {
        that.videos = response.data.data.recommend_room_list
        that.i = 0
    }).then()
}

function player(that, video) {
    if (that.$router.currentRoute.path === '/player') {
        that.$router.push({path: '/',}).then(r => {
            that.$router.push({
                path: '/player',
                query: {
                    video: video
                }
            })
        })
    } else {
        that.$router.push({
            path: '/player',
            query: {
                video: video
            }
        })
    }

}

export {
    item_video, main_video, bl_search, video_detail, player, live_video
}
