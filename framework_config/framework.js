//takes in a description and test code to execute
const describe = (description, fn)=> {
  console.log(description)
  fn()
}

const can = (message, fn) => {
  console.log(' ' + message)
  fn()
}

//matchers definitions
let assertion
const matchers = (exp) => ({
  toEq: (asssertion) => {
    if (exp === assertion) {
      console.log('%c pass', 'background:#bf0')
      return true
    } else {
      console.log('%c fail', 'background:#f00')
      return false
    }
  },

  toThrowError: (assertion) => {
    try {
      if (assertion){
        console.log('%c pass', 'background:#bf0')
      }
    }
    catch(error) {
      console.log('%c fail', 'background:#f00')
      console.log(error)
    }
    finally{
      return assertion
    }
  }
})

const expect = (exp) => {
  return matchers(assertion);
}
