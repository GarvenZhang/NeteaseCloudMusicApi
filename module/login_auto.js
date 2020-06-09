const config = require('../config.json')
const login_cellphone = require('./login_cellphone')

const auto_login = async(query, request) => {
  query = {
    ...query,
    phone: config.accout,
    password: config.password
  }
  return await login_cellphone(query, request)
}

module.exports = auto_login