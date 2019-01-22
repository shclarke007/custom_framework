describe('Square',()=>{
    can('find the area',()=>{
      let square1 = new Square(6)
      let result = square1.area()
      expect(result).toEq(36)
    });
    can('return if argument is not a number', ()=> {
      // let square1 = new Square('notanumber')
      square1 = function() { new Square('notanumber')}
      expect(square1).tothrowsError('argument is not a number')
      // expect(square1).toCatchError('argument not a number')
    });

})
