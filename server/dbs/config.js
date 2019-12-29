export default {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '1522962872@qq.com'
    },
    get pass() {
      return 'ssxadzfoakabjbib'
    }
  },
  // 随机生成四位验证码
  get code() {
    return () => {
      return Math.random().toString(16).slice(2, 6).toUpperCase()
    }
  },
  // 验证码过期时间
  get expire() {
    return () => {
      return new Date().getTime() + 60 * 60 * 1000
    }
  }
}
