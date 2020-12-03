import Vue from 'vue'
import Icons from '@/components/Icons.vue'

const req = require.context('./svg', false, /\.svg$/)
req.keys().map(req)

Vue.component('svg-icon', Icons)