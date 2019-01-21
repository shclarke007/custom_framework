describe('Square',()=>{
  itCan('find the area',()=>{
    let result = new Square(3)
    result.area()
    expect(result).toReturn(6)
  })
  itCan('throws an error if NaN',()=>{
    let result = new Square('y')
    result.area()
    expect(result).toReturn('argument is not a number')
  })
  itCan('throws an error if < 0',()=>{
    let result = new Square(-1)
    result.area()
    expect(result).toReturn('size should be a positive number')
  })
})
