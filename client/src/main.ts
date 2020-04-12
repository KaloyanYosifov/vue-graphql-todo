/**
 * External dependencies.
 */
import Vue from 'vue';

/**
 * Internal dependencies.
 */
import '@/bootstrap/vue';
import { provider } from '@/client';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    apolloProvider: provider,
}).$mount('#app');
