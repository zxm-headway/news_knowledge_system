<template>
  
  <div class="login-register">
    <div class="title animate__animated animate__backInLeft">
      <h1>新闻知识图谱</h1>
    </div>
    <div>
      <el-tabs v-model="activeTab" > 
        
        <el-tab-pane label="登录" name="登录" class="animate__animated animate__backInLeft">
          <el-form
            ref="login_from_ref"
            :model="loginForm"
            :rules="loginFormRules"
            label-width="80px"
            class="form"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model.trim="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                type="password"
                v-model.trim="loginForm.password"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submit_form(login_from_ref)">登录</el-button>
              <el-button type="primary" @click="reset_form(login_from_ref)"> 重置 </el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="注册" class="animate__animated animate__backInLeft">
          <el-form
            ref="register_form_ref"
            :model="registerForm"
            :rules="registerFormRules"
            label-width="80px"
            class="form"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model.trim="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                type="password"
                v-model.trim="registerForm.password"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPassword">
              <el-input
                type="password"
                v-model.trim="registerForm.confirmPassword"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submit_form(register_form_ref)">注册</el-button>
              <el-button type="primary" @click="reset_form(register_form_ref)"> 重置 </el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        
    </el-tabs>
    </div>
   <div class="img_box">
    <img src="../assets/font-bgc.png" alt="">
   </div>
        
    <FooterNews />

      
  
  </div>
</template>


<script>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import FooterNews from "./FooterNews.vue";
// import { useForm } from "vee-validate";
// import { required, minLength } from "@vee-validate/rules";

export default {
  name: "LoginNew",
  components: {
    FooterNews,
  },

  setup() {
    // const { handleSubmit, validate, resetForm } = useForm();

    const router = useRouter()
    const activeTab = ref("登录");

  

    const login_from_ref = ref(null);

    const register_form_ref = ref(null);

    const loginForm = reactive({
      username: "",
      password: "",
    });

    const loginFormRules = {
      username: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        {
          min: 3,
          max: 20,
          message: "用户名长度在 3 到 20 个字符之间",
          trigger: "blur",
        },
      ],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        {
          min: 6,
          max: 20,
          message: "密码长度在 6 到 20 个字符之间",
          trigger: "blur",
        },
      ],
    };

    const registerForm = reactive({
      username: "",
      password: "",
      confirmPassword: "",
    });

    const registerFormRules = {
      username: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: 3, max: 20, message: "用户名长度在 3 到 20 个字符之间" },
      ],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        {
          min: 6,
          max: 20,
          message: "密码长度在 6 到 20 个字符之间",
          trigger: "blur",
        },
      ],
      confirmPassword: [
        { required: true, message: "请确认密码", trigger: "blur" },
        {
          validator: (rule, value, callback) => {
            if (value !== registerForm.password) {
              callback(new Error("两次输入的密码不一致"));
            } else {
              callback();
            }
          },
          trigger: "blur",
        },
      ],
    };

    const submit_form = async (form_login) => {
      if (!form_login) return;
      await form_login.validate((valid, fields) => {
        if (valid) {
          console.log("submit!");
          router.push('/home')
        } else {
          console.log("error submit!", fields);
          
        }
      });
    };

    const reset_form = (form) => {
      if (!form) return;
      form.resetFields();
    };

    

   

    return {
      activeTab,
     
      login_from_ref,
      loginForm,
      loginFormRules,
      register_form_ref,
      registerForm,
      registerFormRules,
      submit_form,
      reset_form,
     
    };
  },
};
</script>

<style lang="less" scoped>


.login-register {
  position: relative;
  background-image: url('../assets/new.png');
 
  
  background-color: #f2f2f2;
  height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  .title{
    position: absolute;
    margin: 3vh auto;
    text-align: center;
    // width: 20vh;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    

  }
  .img_box{
  
    position: absolute;
    // width: 100vh;
    height: 20vh;
    bottom:20vh;
    right: 5vh;
 
  }
}

.form {
  margin-top: 5vh;
}

.el-tabs {
  position: absolute;
  // width: 50%;
  height: 50vh;
  left: 10vh;
  top: 50%;
  transform: translateY(-50%);
  
  }


.el-tabs__item {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  // text-align: center;
}
el-tabs__active-bar {
  height: 3px;
}

.el-tabs__content {
  padding: 20px;
  border: 1px solid #ccc;
  border-top: none;
}

.el-form-item {
  margin-bottom: 20px;
}

.el-input {
  width: 320px;
}
</style>

