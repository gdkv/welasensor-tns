import Vue, { NavigationEntryVue } from 'nativescript-vue';
// import { ROUTES, RoutePath } from '@/core/routes';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
import Sensors from '@/pages/Sensors.vue';
import Dashboard from '@/pages/Dashboard.vue';

export class NavigationService extends Vue {
    private static instance: NavigationService;

    private navEntry: NavigationEntryVue = {
        clearHistory: true,
        animated: false
    };

    public static install(Vue: any) {
        if(!NavigationService.instance){
            NavigationService.instance = new NavigationService(Vue);
        }
    }

    public static getInstance(): NavigationService {
        return NavigationService.instance;
    }

    public navigate(component, options?: NavigationEntryVue) {
        // const match = ROUTES[routeName];
        // console.log(routeName);
        // if (!match) {
        //     throw new Error(`Route ${routeName} doesn't exist!`);
        // }
        // console.log(match.component);
        this.$navigateTo(component, options);
    }

    public goToLoginPage() {
        this.navigate(Login, this.navEntry);
    }

    public goToRegisterPage() {
        this.navigate(Register, this.navEntry);
    }
    public goToDashboardPage() {
        this.navigate(Dashboard, this.navEntry);
    }
}