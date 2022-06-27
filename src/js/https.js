const requestUrl = "http://localhost:9000"  // 本地
// const requestUrl = "http://adastra.isamumu.cn:9000"  // 上线
// const requestUrl = "/app"
import axios from "axios";

axios.defaults.withCredentials = true;
const phone_re = /^1[3|4|5|6|7|8|9][0-9]{9}$/
const mail_re = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
const item_ps = 12
const main_ps = 13

function httpGet(url) {
    return new Promise((resolve, reject) => {
        axios.get(requestUrl + url).then(r => {
            resolve(r.data);
        }).catch(e => {
            reject(e.data)
        })
    })
}

function httpPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(requestUrl + url, params).then(r => {
            console.log(params)
            resolve(r.data);
        }).catch(e => {
            reject(e.data)
        })
    })
}

function getVerCode(account) {
    let url = requestUrl + "/user/registerVerify"
    httpPost(url, {
        account
    })
}

function play_video(that, video) {
    if (that.$route.path === '/player') {
        that.$router.push({
            path: '/',
        }).then(r => {
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
    if (that.$store.state.user.id) {
        httpPost("/history/add", {
            aid: video.aid,
            pid: video.pid
        })
    }
}

export {
    getVerCode,
    play_video,
    httpGet,
    httpPost,
    requestUrl
}
