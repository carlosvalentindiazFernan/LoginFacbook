
'use strict';

(function authentication() {

  //sIngin
  const singupform = document.getElementById('singupform');
  const email = document.getElementById('email_singin');
  const password = document.getElementById('password_singin');
  const singinbtn = document.getElementById('singin')


  class Validation{

    toJSONString( form ) {
  		let obj = {};
  		let elements = form.querySelectorAll( "input, select, textarea" );

  		for( let i = 0; i < elements.length; ++i ) {

  			let element = elements[i];
  		  let name = element.name;
  			let value = element.value;

  			if( name ) {
  				obj[ name ] = value;
  			}
  		}

  		return JSON.stringify( obj );
  	}

  }

  class UserAuthentication {

    singin(jsonSingin){
      alert(jsonSingin)
    }
  }


  //sIngin
  document.addEventListener("DOMContentLoaded", function(event) {
     	singupform.addEventListener( "submit", function( e ) {
        e.preventDefault();
        let valid = new Validation();
        let singinUser = new UserAuthentication();
     		let json = valid.toJSONString( this );
        singinUser.singin(json);

        alert(json);
     	}, false);

   });


})();
