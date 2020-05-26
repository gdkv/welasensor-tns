<template>
    <Page actionBarHidden="true">
        <GridLayout rows="*, *, *, 2*, *">
            <Image row="0" src="~/assets/images/LOGO.png" />
            <Label row="1" text="Login your account"></Label>
            <Label row="2" textWrap="true" class="small-text">Sensor not found yet, check the lights, maybe you are not change senor in Settings mode</Label>
            <StackLayout row="3">
                <StackLayout>
                    <TextField
                        :text="userEmail"
                        keyboardType="email"
                        autocorrect="false"
                        hint="Email" 
                        returnKeyType="next"
                        v-model="emailText"></TextField>
                </StackLayout>
                <StackLayout>
                    <TextField 
                        :text="userPassword"
                        hint="Password" 
                        v-model="passwordText" 
                        secure="true" 
                        returnKeyType="done"></TextField>
                </StackLayout>
                <Button @tap="login" text="Login"></Button>
            </StackLayout>
            <Label row="4" @tap="toRegitster" textWrap="true" class="small-text red">Doesn't have account yet? Register</Label>
        </GridLayout>
    </Page>
</template>
<script lang="ts">
  import Vue from 'nativescript-vue';
  import { authService } from '../core/services/auth.service';
  // import { isIOS, isAndroid } from 'tns-core-modules/ui/frame/frame';
  import { LoginModel } from '../core/models/login.model';
  
  export default Vue.extend({
    data() {
        return {
            status: authService.isLoggedIn(),
            email: 'one.more.1@yandex.ru',
            password: '111222333'
        }
    },
    mounted() {
        console.log("STATUS: ", this.status);
    },
    methods: {
      login() {
          const loginModel: LoginModel = {
              username: this.email,
              password: this.password
          };
          authService.login(loginModel).then(() => {
              this.status = authService.isLoggedIn();
              console.log("STATUS: ", this.status);
          });
      },
      toRegitster(){

      }
    }
  });
</script>
<style lang="scss" scoped>
    GridLayout {
        padding: 25 25 25 25;
    }
    Image {
        width: 107;
        height: 39;
    }
    Label {
        font-size: 25;
        // font-weight: 800;
        text-align: center;
    }
    .small-text {
        font-size: 16;
    }
    TextField {
        height: 36;
        background: #676767;
        border-radius: 10;
        margin-bottom: 30;
        color: #FFFFFF;
        font-size: 16.5;
        placeholder-color: #AAAAAA;
        padding: 0 0 0 15;
    }
    Button {
        background-color: #FC5C7D;
        border-radius: 5;
        height: 35;
    }
    .red {
        color: #FC5C7D;
    }
</style>