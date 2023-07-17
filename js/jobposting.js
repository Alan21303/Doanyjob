const firebaseConfig = {
  apiKey: "AIzaSyClMy-RrxkE3mo1I7EtTtq39aDDqBvGz1g",
  authDomain: "doanyjob.firebaseapp.com",
  databaseURL: "https://doanyjob-default-rtdb.firebaseio.com",
  projectId: "doanyjob",
  storageBucket: "doanyjob.appspot.com",
  messagingSenderId: "925346635514",
  appId: "1:925346635514:web:8f7bc38fd1b424130ab343",
  measurementId: "G-MPZLXPJE20"
};


firebase.initializeApp(firebaseConfig);
const jopapplication_db = firebase.database().ref("jobpostingform");

document.getElementById('jobposting').addEventListener('submit', submitform);
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
document.write(today);

function submitform(e) {
  e.preventDefault();

  const name = getElementVal("name");
  const jobtype = getElementVal("jobType");
  const location = getElementVal("location");
  const contact = getElementVal("contact no");
  const duration = getElementVal("duration");
  const payable = getElementVal("payable");
  const date = getElementVal("date");
  const jobdescription = getElementVal("jobDescription");

  console.log(name, jobtype, location, contact, duration, payable, date, jobdescription);

  saveMessages(name, jobtype, location, contact, duration, payable, date, jobdescription);

  document.querySelector(".alert").style.display = "block";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById('jobposting').reset();
}

function saveMessages(name, jobtype, location, contact, duration, payable, date, jobdescription) {
  const newjobform = jopapplication_db.push();

  newjobform.set({
    name: name,
    jobtype: jobtype,
    location: location,
    contact: contact,
    duration: duration,
    payable: payable,
    date: date,
    p_date: today, // Store current timestamp as JavaScript timestamp
    jobdescription: jobdescription,
  });
}

function getElementVal(id) {
  return document.getElementById(id).value;
}

const leadsRef = firebase.database().ref("jobpostingform");
leadsRef.on('value', function (snapshot) {
  snapshot.forEach(function (childSnapshot) {
    const childData = childSnapshot.val();
    console.log(snapshot.val());
  });
});

const ref = firebase.database().ref("jobpostingform");
ref.on("value", function (snapshot) {
  console.log(snapshot.val());
}, function (error) {
  console.log("Error: " + error.code);
});
