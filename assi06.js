// 1) Perform the following operations to provide the implementation for a
// Rectangle class. The operations are:
// 1. Add an area() method to the Rectangle class.
// 2. Create a Square class that satisfies the following conditions:
// ○ It is a subclass of Rectangle.
// ○ It contains a constructor and no other methods.
// ○ It can use the Rectangle class' area method to print the area
// of a Square object.



class Rectangle{
    constructor(length,breath){
        this.length=length;
        this.breath=breath;
    }
    Area(length,breath)
    {
        return this.length*this.breath;
    }
    
}
class Square extends Rectangle
    {
        constructor(length,breath)
        {
            super(length);
            this.breath=breath;
        }
        
    }

    let obj= new Square (6,4);
   console.log( obj.Area());
    