var rollV, nameV, genderV, addressV;
$(document).ready(function(){


});
function formRead() {
    rollV = document.getElementById("roll").value;
    nameV = document.getElementById("name").value;
    genderV = document.getElementById("gender").value;
    addressV = document.getElementById("address").value;
    console.log(rollV, nameV, addressV, genderV);
  }
  
  function formReset() {
    rollV = document.getElementById("roll").value = "";
    nameV = document.getElementById("name").value = "";
    genderV = document.getElementById("gender").value = "";
    addressV = document.getElementById("address").value = "";
   
  }

$("#insert").click(function(){
  alert("hi");
    formRead();

    firebase
      .database()
      .ref("student/" + rollV)
      .set({
        rollNo: rollV,
        name: nameV,
        gender: genderV,
        address: addressV,
      });
    alert("Data Inserted");
    formReset();

});

$("#update").click(function(){
  formRead();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
    });
  alert("Data Update");
  formReset();
alert("hi");
});

$("#delete").click(function(){
    formRead();

    firebase
    .database()
    .ref("student/" + rollV)
    .remove();
  alert("Data Deleted");
  formReset();

    formReset();
alert("hi");
});

$("#read").click(function(){
    formRead();
    firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      var temp = snap.val().name;
      var temp2 = snap.val().rollNo;
      console.log(temp + "," + temp2);
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
  
      });
    alert("Data Read");
    formReset();
alert("hi");
});
