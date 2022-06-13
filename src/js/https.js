const requestUrl = "http://localhost:9000"
// const requestUrl = "http://adastra.isamumu.cn:9000"
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

function getItems(that) {
    let url = requestUrl + "/item/all"
    that.$axios.get(url).then(resp => {
        that.$store.dispatch("ch_all_items", resp.data.data)
    })
}

function getDefaultItems(that) {
    let url = requestUrl + "/item/default"
    that.$axios.get(url).then(resp => {
        that.$store.dispatch("ch_default_items", resp.data.data)
        that.$store.dispatch("ch_user_items", resp.data.data)
    })
}

function isLogin(that) {
    let url = requestUrl + "/user/isLogin"
    that.$axios.get(url).then(resp => {
        if (resp.data.state === 200) {
            that.$store.dispatch("ch_user", resp.data.data)
        }
    })
}

function getVerCode(account) {
    let url = requestUrl + "/user/registerVerify"
    httpPost(url, {
        account
    })
}

function register(that, form) {
    let url = requestUrl + "/user/register"
    console.log(that.checkedItems)
    that.$refs[form].validate((valid) => {
        if (valid) {
            let user = {
                username: that.ruleForm.username,
                password: that.ruleForm.password,
                items: that.checkedItems,
            }
            if (that.flag) {
                user.account = that.ruleForm.account
            } else {
                user.account = that.ruleForm.email
            }
            console.log(user)
            that.$axios.post(url, {
                user: user,
                verCode: that.ruleForm.ver
            }).then(resp => {
                if (resp.data.state === 200) {
                    that.$store.dispatch("ch_user", resp.data.data)
                    that.$router.push("/")
                    that.success()
                } else {
                    that.fail(resp.data.message)
                }
            })
        }
    });
}

function login(that, form) {
    let url = requestUrl + "/user/login"
    that.$refs[form].validate((valid) => {
        if (valid) {
            that.$axios.post(url, {
                account: that.ruleForm.account,
                password: that.ruleForm.password
            }).then(resp => {
                if (resp.data.state === 200) {
                    that.$store.dispatch("ch_user", resp.data.data)
                    that.$router.push("/")
                } else {
                    that.fail(resp.data.message)
                }
            })
        }
    });
}

function logout(that) {
    let url = requestUrl + "/user/logout"
    that.$axios.get(url)
    that.$store.dispatch("clear_user", {})
    that.$router.push('/')
}

function item_video(that, pid, ps) {
    let url = requestUrl + '/video/pid/' + pid + '/' + ps
    that.$axios.get(url).then(function (response) {
        that.videos = response.data.data
    })
}

function main_video(that) {
    let url = requestUrl + '/video/pid/' + 129 + '/' + 13

    that.$axios.get(url).then(function (response) {
        that.videos = response.data.data
        that.$forceUpdate()
    })
}

function addHistory(that) {
    if (that.$store.state.user.id) {
        that.$axios.post(requestUrl + "/history/add", {
            aid: that.video.aid,
            pid: that.video.pid
        })
    }
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
}

function search(that, keyword) {
    that.$router.push('/search')
}

function feedBack(that, adv) {
    that.$axios.post(requestUrl + "/advise/add", {
        advise: adv,
        userId: that.$store.state.user.id
    }).then(resp => {
        if (resp.data.state === 200) {
            that.$message({
                type: 'success',
                message: resp.data.message
            });
        } else {
            that.$message({
                type: 'info',
                message: resp.data.message
            });
        }
    })
}

function isLike(that) {
    let url = requestUrl + '/like/isLike'
    that.$axios.post(url, {
        aid: that.video.aid,
        pid: that.video.pid
    }).then(resp => {
        that.video.islike = resp.data.message
        that.$forceUpdate()
    })
}

function unLike(that) {
    let url = requestUrl + '/like/cancel'
    that.$axios.post(url, {
        aid: that.video.aid,
        pid: that.video.pid
    })
}

function like(that) {
    let url = requestUrl + '/like/add'
    that.$axios.post(url, {
        aid: that.video.aid,
        pid: that.video.pid
    })
}

export {
    getDefaultItems,
    getItems,
    isLogin,
    item_video,
    main_video,
    getVerCode,
    register,
    play_video,
    search,
    login,
    logout,
    feedBack,
    like,
    isLike,
    unLike,
    addHistory,
    httpGet,
    httpPost
}
