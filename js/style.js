
'use strict';

(function authentication() {

  //sIngin
  const singinform = document.getElementById('singinform');

//SingUp
  const singupform = document.getElementById('formResgister');

  class Storage{

    constructor(){
      this.users  =[
        {
          name:"carlos",
          lastname: "diaz",
          email:"fernancarldiaz@outlook.com",
          password:"Raana+12a",
          gender:"man"
        }
      ]
    }

    getUsers(){
      return this.users;
    }

    setUser(User){
      this.users.push(User);
    }

    localStorage(){
      let initialExist = window.localStorage.getItem('data');

    	if(initialExist){
    		window.myData = JSON.parse(initialExist);
      }else{

        let Users =[
          {
            name:"carlos",
            lastname: "diaz",
            email:"fernancarldiaz@outlook.com",
            password:"Raana+12a",
            gender:"man"
          }
        ];

        window.localStorage.setItem('data',JSON.stringify(Users));
        window.myData = JSON.parse(window.localStorage.getItem('data'));
        console.log(Users);

      }

    }

  }

  class Validation{


    static validateExists(){
      return true
    }

  }

  class UserAuthentication {

    static singin(jsonSingin){
      alert(jsonSingin);
    }

    static singup(jsonSingUp){
      let data = new Storage();

      data.setUser(jsonSingUp);
      Validation.validateExists(jsonSingUp);
      console.log(data.getUsers());
    }
  }



  //sIngin
  document.addEventListener("DOMContentLoaded", function(event) {
     	singinform.addEventListener( "submit",  e => {
        e.preventDefault();

        let index =['email','password'];
        let data ={};
        for (let i = 0; i < singinform.length-1; i++) {
          data[index[i]] = singinform.elements[i].value;
         }
         console.log(data);

         UserAuthentication.singin(data);

     	}, false);

   });

   //singup

   document.addEventListener("DOMContentLoaded", function(event) {
      	singupform.addEventListener( "submit", e  => {
          e.preventDefault();

          let index =['name','lastname','email','password','gender'];
          let data ={};
          for (let i = 0; i < singupform.length-2; i++) {
              data[index[i]] = singupform.elements[i].value;
           }

          UserAuthentication.singup(data);

        }, false);

    });

})();
