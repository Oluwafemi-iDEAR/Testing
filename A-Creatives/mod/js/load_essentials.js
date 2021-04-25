document.write('<link rel="stylesheet" type="text/css" href="css/style.css" />');
document.write('<link rel="stylesheet" type="text/css" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />');
document.write('<script src="js/jquery.js" type="text/javascript"></script>');

document.getElementById("myHead").innerHTML =
"<span id='headerText'>Title</span>"
+ "<span id='headerSubtext'>Subtitle</span>";
document.getElementById("myNav").innerHTML =
"<ul id='navLinks'>"
+ "<li><a href='index.html'>Home</a></li>"
+ "<li><a href='about.html'>About</a>"
+ "<li><a href='donate.html'>Donate</a></li>"
+ "</ul>";
document.getElementById("myFooter").innerHTML =
"<p id='copyright'>Copyright &copy; " + new Date().getFullYear() + " You. All"
+ " rights reserved.</p>"
+ "<p id='credits'>Layout by You</p>"
+ "<p id='contact'><a href='mailto:you@you.com'>Contact Us</a> / "
+ "<a href='mailto:you@you.com'>Report a problem.</a></p>";
