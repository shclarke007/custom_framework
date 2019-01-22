//takes in a description and test code to execute
const describe = (description, fn)=> {
  console.log(description)
  fn()
}

const can = (message, fn) => {
  fn()
}

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
  
  tothrowsError: (assertion) => {
    // let result = 'argument is not a number'
    try { 
      console.log('fail')
      assertion = 'argument is not a number'
    }
    catch(error) {
      console.log(error)
    }
    finally{
      console.log('pass')
      return assertion
    }
  }
 

})

const expect = (exp) => {
  return matchers(assertion);
}



