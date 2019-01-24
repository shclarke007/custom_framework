describe('Square',()=>{
    can('find the area',()=>{
      let square1 = new Square(6)
      let result = square1.area()
      expect(result).toEq(36)
    });

    can('throw error if argument is not a number', ()=> {
      square = function() { new Square('notanumber')}
      expect(square).toThrowError('argument is not a number')
    });

    can('throw error if argument is less than 0', ()=> {
      square1 = function() { new Square(-2)}
      expect(square1).toThrowError('size should be a positive number')
    });

    can('know its size',()=>{
      let square2 = new Square(7)
      expect(square2.size).toEq(7)
    });
});
