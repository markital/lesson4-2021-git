//1. створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами User
     
//function User(id, name, surname, email, phone)
//{
    //this.id=id;
    //this.name=name;
    //this.surname=surname;
    //this.email=email;
    //this.phone=phone;}
    


//let mark=new User(id=1,name='Markiyan',surname='Seredynskyy', email='mark@ukr.net',phone=0971111111 );
//let oleg=new User(id=2,name='Oleg',surname='Ivanov', email='fgfgfg@ukr.net',phone=0971111112 );
//let olya=new User(id=3,name='Olya',surname='robin', email='ssssd@ukr.net',phone=0971111113 );
//let ira=new User(id=4,name='Ira',surname='robin', email='ssvvd@ukr.nett',phone=0971111114 );
//let ivan=new User(id=5,name='Ivan',surname='ivanov', email='ssrrd@ukr.net',phone=0971111115);
//let yura=new User(id=6,name='yura',surname='ivanov', email='ssrrdz@ukr.net',phone=0971111116);


//let arrayOfUsers=[mark,oleg,olya,ira,ivan,yura];
//console.log(arrayOfUsers)
//2.створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client

//class Client {
    //constructor (id,name,surname,email,phone,order)
    //{
        //this.id=id;
        //this.name=name;
        //this.surname=surname;
        //this.email=email;
        //this.phone=phone;
        //this.order=order;
    //}
//}
//const mark=new Client (id=1,name='Markiyan',surname='Seredynskyy', email='mark@ukr.net',phone=0971111111,order=['bread','apple'] );
//const oleg=new Client(id=2,name='Oleg',surname='Ivanov', email='fgfgfg@ukr.net',phone=0971111112, order=['apple']);
//const olya=new Client(id=3,name='Olya',surname='robin', email='ssssd@ukr.net',phone=0971111113, order=['cheese']);
//const ira=new Client(id=4,name='Ira',surname='robin', email='ssvvd@ukr.nett',phone=0971111114, order=['butter']);
//const ivan=new Client(id=5,name='Ivan',surname='ivanov', email='ssrrd@ukr.net',phone=0971111115, order=['milk']);
//const yura=new Client(id=6,name='yura',surname='ivanov', email='ssrrdz@ukr.net',phone=0971111116, order=['strawberry']);

//let arrayOfUsers=[mark,oleg,olya,ira,ivan,yura];
//console.log(arrayOfUsers)


//3. Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

let car=
{
    model:'omega',
    manufacturer:'opel',
    year:'1995',
    maxSpeed:160,
    volumeEngine:2.2,
    shaser:'avtoPilot',
    driver: function () {
    console.log('Їдемо зі швидкістю ${this.maxSpeed} на годину');},

info: function() { 
console.log(model:$ {this.model},
'manufacturer: $ {this.manufacturer'}
