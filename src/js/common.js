// const requestUrl = "http://adastra.isamumu.cn:9000"
const requestUrl = "http://localhost:9000"
const phone_re = /^1[3|4|5|6|7|8|9][0-9]{9}$/
const mail_re = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
const item_ps = 12
const main = 13

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
        console.log(resp)
        if (resp.data.state === 200) {
            that.$store.dispatch("ch_user", resp.data.data)
        }
    })
}

function getVerCode(that) {
    let url = requestUrl + "/user/registerVerify"
    let account = ""
    let ac = false
    if (that.flag) {
        account = that.ruleForm.account
        if (phone_re.test(account)) {
            ac = true
        }
    } else {
        account = that.ruleForm.email
        if (mail_re.test(account)) {
            ac = true
        }
    }
    if (ac) {
        that.$axios.post(url, {
            account: account,
        }).then(resp => {
            that.tokenId = resp.data.data
        })
        that.waitTime--
        that.codeBtnWord = `${that.waitTime}s 后重新获取`
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
    // let lo_url = requestUrl + '/api/recommend'
    // axios.get(lo_url).then(function (response) {
    //     that.videos = response.data.data
    // })
    item_video(that, 129, 13)
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
        console.log(that.$store.state.user.id)
        console.log(video.aid)
    }
}

function search(that, keyword) {
    that.$router.push('/search')
}

export {
    getDefaultItems, getItems, isLogin, item_video, main_video, getVerCode, register, play_video, search, login, logout
}
