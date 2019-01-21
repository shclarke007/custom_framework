//takes in a description and test code to execute
const describe = (description, fn)=> {
  console.log(description)
  fn()
}

const can = (message, fn) => {
  console.log('message')
  fn()
}

let assertion
const matchers = (exp) => ({
  toEq: (asssertion) => {
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})

const expect = (exp) => matchers(assertion)
