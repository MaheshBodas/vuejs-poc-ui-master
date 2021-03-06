'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',  
  BASE_API: '"https://blxqtw863j.execute-api.ap-southeast-1.amazonaws.com/dev"'
  //BASE_API: '"https://django-poc-server-maheshbodas.herokuapp.com:443"'
  //BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
  // BASE_API: '"http://127.0.0.1:9528"',
  // BASE_API: '"https://britecore-poc-server.herokuapp.com:443"',
  // BASE_API: process.env.BASE_API
})
