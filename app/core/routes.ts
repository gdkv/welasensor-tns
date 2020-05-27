import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
import Sensors from '@/pages/Sensors.vue';
import Dashboard from '@/pages/Dashboard.vue';

interface RouteInfo {
    component: any;
};

export type RoutePath = 
    | '/login'
    | '/register'
    | '/sensors'
    | '/dashboard';
    // | '/settings'
    // | '/sensors/:id'
    // | '/sensors/:id/settings';

export const ROUTES: Record<RoutePath, RouteInfo> = {
    '/register': { component: Register },
    '/sensors': { component: Sensors },
    '/login': { component: Login },
    '/dashboard': { component: Dashboard }
    // '/settings': { component: Dashboard },
    // '/sensors/:id': { component: Dashboard },
    // '/sensors/:id/settings': { component: Dashboard }
};
