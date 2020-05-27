<template>
    <FlexboxLayout class="header">
        <StackLayout @tap="toHome" class="logo">
            <Image class="logo-image" src="~/assets/images/LOGO.png" />
        </StackLayout>
        <StackLayout @tap="menuOpen" class="menu">
            <StackLayout class="menu-bar"></StackLayout>
            <StackLayout class="menu-bar"></StackLayout>
            <StackLayout class="menu-bar"></StackLayout>
        </StackLayout>
    </FlexboxLayout>
</template>
<script lang="ts">
    import Vue from 'nativescript-vue';

    export default Vue.extend({
        props: {
            name: String,
        },
        methods: {
            toHome(){
                alert('To HOME');
            },
            menuOpen(){
                alert('Open MENU');
            }
        }
    })
</script>
<style lang="scss" scoped>
    .header {
        padding: 0 10 0;
        margin: 0 0 25;
        justify-content: space-between;

        .logo {
            &-image {
                width: 58;
                height: 22;
            }
        }

        .menu {
            &-bar {
                background-color: #ffffff;
                width: 33;
                height: 3.5;
                margin: 4 0 0;
                border-radius: 2;
            }
        }
    }
</style>