// 1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
// Cone with four decimal places using objects and classes.
// Create classes for volumes for each geometric shape which returns the
// output using the getVolume() method.

// eg- to get volume of cylinder-
// let obj= new Cylinder(radius,height);

// obj.getVolume();

// Formulas for volumes of the shapes-
// 1) Cylinder- Volume = πr

// 2h

// where r is the radius and h is the height of the cylinder.
// 2)Sphere- Volume= 4/3πr
// 3
// where r is the radius
// 3) Cone- Volume= πr
// 2h/3

// where r is the radius and h is the height of the cone.

//saurav ranjan


class Cylinder{
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }
    getVolume(){
        return (Math.PI*this.radius*this.radius*this.height).toFixed(4);
    }
}
 
class Sphere{
    constructor(radius){
        this.radius=radius;
    }
    getVolume(){
        return ((4/3)*Math.PI*this.radius*this.radius*this.radius).toFixed(4);
    }
}       

class Cone{     
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }
    getVolume(){
        return ((Math.PI*this.radius*this.radius*this.height)/3).toFixed(4);
    }
}

let obj1= new Cylinder(2,3);
console.log("volume of cylinder is "+ obj1.getVolume());


let obj2= new Sphere(2);
console.log("volume of sphere is "+obj2.getVolume());

let obj3= new Cone(2,3);
console.log ("volume of cone is "+obj3.getVolume());


