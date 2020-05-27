<template>
    <Page actionBarHidden="true">
        <ScrollView orientation="vertical" class="wrapper">
            <StackLayout>
                <Header />
                <Label text="Logout" @tap="logout"></Label>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script lang="ts">
    import Vue from 'nativescript-vue';
    import Header from '@/components/UI/layout/Header.vue'
    import { ScrollView } from "tns-core-modules/ui/scroll-view";
    import { authService } from '../core/services/auth.service';
    import { NavigationService } from '@/core/services/navigation.service';

    export default Vue.extend({
        components: { Header },
        data() {
            return {
                sensors: []
            }
        },
        created() {

        },
        methods: {
            logout(){
                authService.logout();
                NavigationService.getInstance().goToRegisterPage();
            }
        }
    })
</script>

<style scoped lang="scss">
    Page {
        background: #2a2a2a;
        
        .wrapper {
            margin: 20 0 0;

            .sensor {
                margin: 0 0 40;
            }
        }
    }
</style>