import axios from "axios";

// const requestUrl = "http://adastra.isamumu.cn:9000"
const requestUrl = "http://localhost:9000"
const phone_re = /^1[3|4|5|6|7|8|9][0-9]{9}$/
const ps = 12

function getVerCode(that) {
    // axios.post('http://localhost:9000/user/test', {
    //     username: that.ruleForm.username,
    //     password: that.ruleForm.password,
    //     phone: that.ruleForm.phone,
    //     item: that.checkedItems,
    //     verCode: that.ruleForm.ver
    // })
    if (phone_re.test(that.ruleForm.phone)) {
        axios.post("http://localhost:9000/user/registerSMS", {
            phone: that.ruleForm.phone
        })
        that.waitTime--
        this.codeBtnWord = `${this.waitTime}s 后重新获取`
        that.getCode = true
        let timer = setInterval(function () {
            if (that.waitTime > 1) {
                that.waitTime--
                that.codeBtnWord = `${that.waitTime}s 后重新获取`
            } else {
                clearInterval(timer)
                that.codeBtnWord = '获取验证码'
                that.waitTime = 61
                that.getCode = false
            }
        }, 1000)
    }
}

function item_video(that, pid, ps) {
    let lo_url = requestUrl + '/video/pid/' + pid + '/' + ps
    axios.get(lo_url).then(function (response) {
        that.videos = response.data.data
    })
}

function main_video(that) {
    // let lo_url = requestUrl + '/api/recommend'
    // axios.get(lo_url).then(function (response) {
    //     that.videos = response.data.data
    // })
    item_video(that, 129, 13)
}

function search(that, keyword) {
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
    item_video, main_video, search, video_detail, player, live_video, getVerCode
}
