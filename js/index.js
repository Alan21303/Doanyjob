// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAE1_xuXR5uVvNEg_heOt7rb_iGvcAJ8Us",
   authDomain: "ajith-f6176.firebaseapp.com",
   databaseURL: "https://ajith-f6176-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "ajith-f6176",
   storageBucket: "ajith-f6176.appspot.com",
   messagingSenderId: "442868630802",
   appId: "1:442868630802:web:de254ae8736d9f33279fcb",
   measurementId: "G-8JMN7DPMFW"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  register();
 } )

 document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  login();
 } )
 // Set up our register function
 function register () {
   // Get all our input fields
   console.log("register function is called");

   var email = document.querySelector('#email').value;
    var password = document.getElementById('password').value
   console.log(email , password);


  //  // Validate input fields
  //  if (validate_email(email) == false || validate_password(password) == false) {
  //    alert('Email or Password is Outta Line!!')
  //    return
  //    // Don't continue running the code
  //  }
  //  if (validate_field(full_name) == false || validate_field(favourite_song) == false || validate_field(milk_before_cereal) == false) {
  //    alert('One or More Extra Fields is Outta Line!!')
  //    return
  //  }

   // Move on with Auth
   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     // User registered successfully
     console.log("User registered:", userCredential.user);
     alert(`${userCredential.user.reloadUserInfo.email} registered succesfully`);
     
     // Perform any additional actions after successful registration
   })
   .catch((error) => {
     // Handle registration errors
     console.log("Registration error:", error);
   });
 }
 function login () {
  // Get all our input fields
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  // // Validate input fields
  // if (validate_email(email) == false || validate_password(password) == false) {
  //   alert('Email or Password is Outta Line!!')
  //   return
  //   // Don't continue running the code
  // }

  signInWithEmailAndPassword(auth ,email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)

    // DOne
    alert('User Logged In!!')

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}




// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}
document.getElementById("logout").addEventListener("click", function(event) {
  event.preventDefault();
 
  const signOut = () => {
 return firebase.auth().signOut()
  .then(() => {
   setSession();
  })
  .catch((error) => {
   setSession();
  });
}
 window.location.href="login.html";
 } )
