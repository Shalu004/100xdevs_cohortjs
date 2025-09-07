//classs is the blueprint of the object
// it has two things--- 1.constructor=features or attributes of the object  &  2.function=behaviour of the object
// object is created using "new" keyword.
class animal{
    constructor(name, legcount, sound){
        this.name=name;
        this.legcount=legcount;
        this.sound=sound;
    }
    speak(){
        console.log("This is "+this.name + " and it sounds like  " + this.sound);
    }
}

    let dog = new animal("Dog", 4 , "Bhaw BHow");
    let cat= new animal("Cat", 4 , "Meow moew");

    cat.speak();
    dog.speak();
