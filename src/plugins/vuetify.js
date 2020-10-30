import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from 'vuetify/lib';
// import VueGoogleCharts from 'vue-google-charts'


// Vue.use(VueGoogleCharts);
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa'
    },
    themes: {
        light: {
            background: colors.blue.accent2,
        },
        dark: {
            background: colors.blue,
        }
    }
});
