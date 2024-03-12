<template>
    <div class="Login-Container">
        <Login />
        <div class="pc">
            <el-row class="login_father">
                <el-col class="login_box" :span="8">
                    <div class="login">
                        <h2>欢迎回来</h2>
                        <p id="hitokoto">
                            <a style="text-decoration: none;color: #333;" href="#" id="hitokoto_text">:D 获取中...</a>
                        </p>
                        <el-button @click="LinkToHome" class="ds" style="margin-left: 16px;" type="text" size="mini">&lt;返回</el-button>
                        <el-form :model="LoginData" class="login_form" label-width="80px">
                            <el-form-item label="账号">
                                <el-input maxlength="6" v-model="LoginData.account" placeholder="输入账号"></el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input maxlength="12" v-model="LoginData.pwd" placeholder="输入密码"></el-input>
                            </el-form-item>
                            <el-form-item label="验证码">
                                <el-row>
                                    <el-col :span="14">
                                        <el-input maxlength="6" v-model="LoginData.verify" placeholder="输入验证码"></el-input>
                                    </el-col>
                                    <el-col :span="10">
                                        <p class="cp" @click="generate">{{ generateCode }}</p>
                                    </el-col>
                                </el-row>
                            </el-form-item>
                            <div style="display: flex;justify-content: flex-end;">
                                <el-button @click="loginBtn" style="width: 40%;">
                                    登陆
                                </el-button>
                            </div>
                        </el-form>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="move">
            <el-row class="login_father">
                <el-col class="login_box" :span="24">
                    <div class="login">
                        <h2>欢迎回来</h2>
                            <a href="#" style="text-decoration: none;color: #333;" id="hitokoto_text">:D 获取中...</a>
                        <el-button @click="LinkToHome" class="ds" style="margin-left: 16px;" type="text" size="mini">&lt;返回</el-button>
                        <el-form label-width="80px">
                            <el-form-item label="账号">
                                <el-input maxlength="6" v-model="LoginData.account" placeholder="输入账号"></el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input maxlength="12" v-model="LoginData.pwd" placeholder="输入密码"></el-input>
                            </el-form-item>
                            <el-form-item label="验证码">
                                <el-row>
                                    <el-col :span="14">
                                        <el-input maxlength="6" v-model="LoginData.verify" placeholder="输入验证码"></el-input>
                                    </el-col>
                                    <el-col :span="10">
                                        <p class="cp" @click="generate">{{ generateCode }}</p>
                                    </el-col>
                                </el-row>
                            </el-form-item>
                            <div style="display: flex;justify-content: flex-end;">
                                <el-button @click="loginBtn" style="width: 40%;">
                                    登陆
                                </el-button>
                            </div>
                        </el-form>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import Login from './Module/Nav/HeadNav.vue'
export default {
    components: {
        Login
    },
    data() {
        return {
            motto:{},
            LoginData: {
                account: '',
                pwd: '',
                verify: ''
            },
            generateCode: ''
        }
    },
    created() {
        this.getMotto()
        this.generate()
        this.verifyLogin()
    },
    methods: {
        verifyLogin() {
            const isLogined = localStorage.getItem('isLogined')
            if(isLogined == 'true') {
                setTimeout(function() {
                    this.$router.push('/article/editor')
                }.bind(this), 1000)
                this.$message({
                    message: '账号已经登陆',
                    type: 'warning'
                })
            }
        },
        generate() {
            const code = Math.floor(100000 + Math.random() * 900000); // 生成6位随机数验证码
            this.generateCode = String(code);
            console.log(code)
        },
        getMotto() {
            // fetch("https://v1.hitokoto.cn", {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'Application/json'
            //     }
            // })
            // .then(res => res.json())
            // .then(res => {
            //     console.log(res)
            //     this.motto = res
            // })
            fetch('https://v1.hitokoto.cn')
            .then(response => response.json())
            .then(data => {
                const hitokoto = document.querySelector('#hitokoto_text')
                // hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
                hitokoto.innerText = data.hitokoto
            })
            .catch(console.error)
        },
        LinkToHome() {
            this.$router.push('/').catch(err => console.log(err))
        },
        loginBtn() {
            if(this.LoginData.account == '') {
                this.$message({
                    message: '账号为空',
                    type: 'warning'
                })
                return
            } else if(this.LoginData.pwd == '') {
                this.$message({
                    message: '密码为空',
                    type: 'warning'
                })
                return
            } else if(this.LoginData.verify == '') {
                this.$message({
                    message: '验证码为空',
                    type: 'warning'
                })
                return
            } else if(this.LoginData.verify != this.generateCode) {
                this.$message({
                    message: '验证码错误',
                    type: 'warning'
                })
                this.generate()
                this.LoginData.verify = ''
                return
            } else {
                console.log(this.LoginData)
                const url = process.env.VUE_APP_BASE_URI + '/blog-account/login'
                fetch(`${url}?account=${this.LoginData.account}&pwd=${this.LoginData.pwd}`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'Application/json',
                        'Centent-Type': 'Application/json'
                    }
                })
                .then(res => res.text())
                .then(res => {
                    console.log(res)
                    if(res == 'Login success') {
                        localStorage.setItem('isLogined', 'true')
                        setTimeout(function() {
                            this.$router.push('/article/editor')
                        }.bind(this), 3000)
                        this.$message({
                            message: '登陆成功',
                            type: 'success'
                        })
                        return
                    } else if(res == 'Account not found or pwd is wrong') {
                        this.$message({
                            message: '账号不存在或密码错误',
                            type: 'warning'
                        })
                        return
                    }
                })
               
            }
        }
    }
}
</script>
<style>
.ds {
    display: flex;
    justify-content: flex-start;
}

.Login-Container {
    width: 100%;
    height: 100vh;
    /* background-color: blueviolet; */
    background: url(../assets/img/banner.png) 50% no-repeat;
    background-size: cover;
}
.Login-Container .move {
    display: none;
}
.Login-Container .login_father {
    display: flex;
    height: calc(100vh - 70px);
    align-items: center;
    justify-content: flex-end;
    padding: 12px;
}
.Login-Container .login_box {
    /* width: 100%; */
    min-height: 50vh;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    display: flex;
    align-items: center;
}
.Login-Container .login_box .login {
    margin: 0 auto;
    margin-top: 40px;
}
.Login-Container .login_box .login .login_form {
    
}
@media screen and (max-width: 1200px) {
    .Login-Container .pc {
        display: none;
    }
    .Login-Container .move {
        display: block;
    }
    .Login-Container .login_box {
        min-height: 40vh;
        width: 96%;
        margin-right: 2%;
    }
    .Login-Container .login_box .login {
        margin: 0 auto;
        margin-top: 20px;
    }
}
</style>