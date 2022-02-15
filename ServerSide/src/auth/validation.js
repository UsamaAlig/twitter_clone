const joi = require('joi');

const schema = joi.object({
  email: joi.string().email().empty().required(),
  password:joi.string().min(6).required(),
})

module.exports = {schema};