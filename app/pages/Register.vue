<template>
    <Page actionBarHidden="true">
        <GridLayout rows="*, *, 2*, *">
            <Image row="0" src="~/assets/images/LOGO.png" />
            <Label row="1" text="Create your account"></Label>
            <StackLayout row="2">
                <StackLayout>
                    <TextField
                        autocorrect="false"
                        hint="Your name and surname" 
                        returnKeyType="next"></TextField>
                </StackLayout>
                <StackLayout>
                    <TextField
                        keyboardType="email"
                        autocorrect="false"
                        hint="Email" 
                        returnKeyType="next"></TextField>
                </StackLayout>
                <StackLayout>
                    <TextField 
                        hint="Password" 
                        secure="true" 
                        returnKeyType="done"></TextField>
                </StackLayout>
                <Button @tap="register" text="Register"></Button>
            </StackLayout>
            <Label row="3" @tap="toLogin" textWrap="true" class="small-text red">Already have account? Sign in</Label>
        </GridLayout>
    </Page>
</template>
<script lang="ts">
  import Vue from 'nativescript-vue';
  import { authService } from '@/core/services/auth.service';
  import { NavigationService } from '@/core/services/navigation.service';
  
  export default Vue.extend({
    data() {
        return {
            status: authService.isLoggedIn(),
            email: 'one.more.1@yandex.ru',
            password: '111222333'
        }
    },
    mounted() {

    },
    methods: {
      register() {
        
      },
      toLogin(){
          NavigationService.getInstance().goToLoginPage();
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