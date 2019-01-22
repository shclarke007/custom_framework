describe('Square',()=>{
    can('find the area',()=>{
      let square1 = new Square(6)
      let result = square1.area()
      expect(result).toEq(36)
    });
    can('throw error if argument is not a number', ()=> {
      square1 = function() { new Square('notanumber')}
      expect(square1).toThrowError('argument is not a number')
    });
    can('know its size',()=>{
      let square1 = new Square(7)
      expect(square1.size).toEq(7)
    });

})
