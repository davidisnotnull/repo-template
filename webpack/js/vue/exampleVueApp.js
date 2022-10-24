import { createApp } from "vue";
import axios from 'axios';
import ExampleVueAppTemplate from '../../vue/templates/exampleVueApp.vue';

export default class ExampleVueApp {
    constructor() {
        const app = createApp(ExampleVueAppTemplate);
        app.use(axios);
        app.mount('#vue-container-id');
    }
}