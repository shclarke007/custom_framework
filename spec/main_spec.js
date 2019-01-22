describe('Square',()=>{
    can('find the area',()=>{
      let square1 = new Square(6)
      let result = square1.area()
      expect(result).toEq(36)
    });
    can('throw error if argument is not a number', ()=> {
      square = function() { new Square('notanumber')}
      expect(function(){new Square('notanumber')}).toThrowError('argument is not a number')
    });
    can('know its size',()=>{
      let square2 = new Square(7)
      expect(square2.size).toEq(7)
    });

})
