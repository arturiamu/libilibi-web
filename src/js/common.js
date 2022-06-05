import axios from "axios";

// const requestUrl = "http://adastra.isamumu.cn:9000"
const requestUrl = "http://localhost:9000"
const phone_re = /^1[3|4|5|6|7|8|9][0-9]{9}$/
const item_ps = 12
const main = 13

function ini(that) {
    let user = localStorage.getItem("user")
    if (user) {
        that.$store.dispatch("ch_user", JSON.parse(user))
    }
}

function getVerCode(that) {
    let url = requestUrl + "/user/registerSMS"
    if (phone_re.test(that.ruleForm.phone)) {
        axios.post(url, {
            account: that.ruleForm.phone
        }).then(resp => {
            console.log(resp)
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
    that.$refs[form].validate((valid) => {
        if (valid) {
            if (that.checkedItems.length === 0) {
                that.checkedItems = that.defaultChecked
            }
            axios.post(url, {
                user: {
                    username: that.ruleForm.username,
                    password: that.ruleForm.password,
                    account: that.ruleForm.phone,
                    items: that.checkedItems,
                },
                tokenId: that.tokenId,
                verCode: that.ruleForm.ver
            }).then(resp => {
                if (resp.data.state === 200) {
                    that.$store.dispatch("ch_user", resp.data.data)
                    that.$router.push("/")
                    localStorage.setItem("user", JSON.stringify(resp.data.data))
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
    console.log()
    that.$refs[form].validate((valid) => {
        if (valid) {
            axios.post(url, {
                username: that.ruleForm.username,
                password: that.ruleForm.password
            }).then(resp => {
                if (resp.data.state === 200) {
                    that.$store.dispatch("ch_user", resp.data.data)
                    that.$router.push("/")
                    localStorage.setItem("user", JSON.stringify(resp.data.data))
                } else {
                    that.fail(resp.data.message)
                }
            })
        }
    });
}

function logout(that) {
    localStorage.clear()
    that.$store.dispatch("logout",{})
    that.$router.push('/')
}

function item_video(that, pid, ps) {
    let url = requestUrl + '/video/pid/' + pid + '/' + ps
    axios.get(url).then(function (response) {
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
            query: {
                video: video
            }
        }).then(r => {
            that.$router.push({
                path: '/player',
                query: {
                    video: video
                }
            })
        })
    }
}

function search(that, keyword) {
    that.$router.push('/search')
}

export {
    ini, item_video, main_video, getVerCode, register, play_video, search, login, logout
}
