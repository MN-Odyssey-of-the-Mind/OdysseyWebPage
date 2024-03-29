
function loadNav() {
  $("#navbar").load("https://mn-odyssey-of-the-mind.github.io/OdysseyWebPage/resources/navbarElements.html");
}

function loadDateMessage(){
  var x = new Date(document.lastModified);
  console.log(x);
  document.write("<br /><hr />Last modified: <em>" + x.getDate() + "-" + month(x.getMonth()) +"-" + x.getFullYear()+ "</em> by <em>K.K. Lamberty</em><br />");
}

function month(number){
  var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
  return months[number];
}

function getTournamentDate() {
  document.write("April 6, 2024");
}

function getTournamentOnTimeRegistrationDeadline() {
  document.write("March 1, 2024");
}

function getTournamentLateRegistrationDeadline() {
  document.write("March 30, 2024");
}

function getAssociationDirectorContact() {
  document.write('<a href="mailto:sheryl.kasella@isd197.org">Sheryl Kasella</a>');
}
