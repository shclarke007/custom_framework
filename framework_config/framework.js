const describe = (description, fn)=> {
  console.log(description)
  fn()
}

const itCan = (message, fn) => describe(' ' + message, fn)

const matchers = (exp) => ({
  toReturn: (asssertion) => {
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})

const expect = (value) => matchers(exp)
