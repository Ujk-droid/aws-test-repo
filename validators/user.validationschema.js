// D:\awspractice\validators\user.validationschema.js

const z = require("zod")

exports.userBodySchema = z.object({
  // 'username' ko badal kar 'userName' kar dein
  userName: z.string(), 
  email: z.string().email(),
  password: z.string().min(6),
})