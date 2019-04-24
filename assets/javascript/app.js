var config = {
    apiKey: "AIzaSyCanlYIc7n-Wel8wDeaMxMzYtViVVCOwpI",
    authDomain: "recent-user-with-push.firebaseapp.com",
    databaseURL: "https://recent-user-with-push.firebaseio.com",
    storageBucket: "recent-user-with-push.appspot.com",
    messagingSenderId: "208476116054"
  };

  firebase.initializeApp(config);
  var database = firebase.database();

  var employeeName= ""
  var role= ""
  var startDate= ""
  var monthlyRate= ""
  
  $("#add-user").on("click", function(event) {
    event.preventDefault();

    employeeName = $("#employeeName-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = $("#startDate-input").val().trim()
    monthlyRate = $("#monthlyDate-input").val().trim();
    
    database.ref().push({
        employeeName: employeeName,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyDate,
        dataAdded: firebase.database.ServerValue.TIMESTAP
    });
  });

  database.ref()