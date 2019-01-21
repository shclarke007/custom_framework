describe('Square',()=>{
    can('find the area',()=>{
      let square1 = new Square(6)
      let result = square1.area()
      expect(result).toEq(36)
      console.log(result)

    })

})
