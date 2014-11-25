var skills = ["Web Development", "SQL Server", "HTML", "JavaScript", "CSS", 
"Python", "C/C++", "Java", "C#", "ASP.NET", "ColdFusion"]

var bio = {
	"name": "James Tench",
	"role": "Web Developer",
	"email": "tenchjames@gmail.com",
	"pictureurl": "http://gordonfan24.github.io/images/profile.jpg",
	"skills": skills,
	"welcome": "Welcome to my bio page. I am a Web Developer located in Cleveland Ohio. I" +
	"work for AT&T supporting an organization 20,000+ employees. One of the web applications I support "+
	"presents over 200 data points, including personalized results pages. Data is extracted from an Oracle "+
	"Data Warehouse each morning, aggregated and transformed for the end users. I do both the front end "+
	"Web Development and the backend SQL needed to support the site.\n\n"+
	"This site is a little page about me. Enjoy!"
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedEmail = HTMLemail.replace("%data%", bio.email);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#footerContacts").append(formattedEmail);
