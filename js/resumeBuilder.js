var skills = ["Web Development", "SQL Server", "HTML", "JavaScript", "CSS", 
"Python", "C/C++", "Java", "C#", "ASP.NET", "ColdFusion"]

var bio = {
	"name": "James Tench",
	"role": "Web Developer",
	"contacts": {
		"email": "tenchjames@gmail.com",
		"mobile": "216-571-4151",
		"github": "gordonfan24",
		"twitter": "@tenchjames"
	},
	
	"pictureurl": "http://gordonfan24.github.io/images/profile.jpg",
	"skills": skills,
	"welcome": "Welcome to my bio page. I am a Web Developer located in Cleveland Ohio. I" +
	"work for AT&T supporting an organization 20,000+ employees. One of the web applications I support "+
	"presents over 200 data points, including personalized results pages. Data is extracted from an Oracle "+
	"Data Warehouse each morning, aggregated and transformed for the end users. I do both the front end "+
	"Web Development and the backend SQL needed to support the site.\n\n"+
	"This site is a little page about me. Enjoy!"
}

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"years": "1999 - current",
			"location": "Cleveland, OH",
			"title": "Sr. Centers Technology Support Manager",
			"description": "As Sr. Centers Technology Support Manager I support the Home Solutions team at AT&T. The team handles " +
				"residential customer accounts. In my role I provide reporting and analytics to the entire field. " +
				"I develop the code for multiple web applications that the field uses on a daily basis. I primarily develop " +
				"with ASP.NET in C#. I also support an application that I fully developed in ColdFusion. I do both the front end " +
				"web development work for the sites, and the backend SQL. On a daily basis I extract data from an Oracle Data Warehouse, " +
				"aggregate and transform the data to be presented to the field."
		}
	]
};

var education = {
	"schools": [
		{
			"name": "University of Phoenix",
			"location": "Cleveland OH",
			"degree": "BS",
			"majors": ["Information Technology"],
			"dates": 2006,
			"url": "http://www.phoenix.edu/"
		},
		{
			"name": "Cleveland State University",
			"location": "Cleveland OH",
			"degree": "Masters",
			"majors": ["Computer Information Systems"],
			"dates": 2014,
			"url": "http://www.csuohio.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
};

var project = {
	"projects": [
		{
			"title": "assembler",
			"dates": 2014,
			"description": "Build and assembler for SIC/XE"
		},
		{
			"title": "compiler",
			"dates": 2014,
			"description": "Build and compiler for SIC stanard"
		}
	]
}

























// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
// var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureurl)
// var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
// var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);

// var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
// var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.title);
// var formattedWorkDates = HTMLworkDates.replace("%data%", work.years);
// var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.city);
// var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.description);

// var formattedSchoolName = HTMLschoolName.replace("%data%", education["college"]);
// var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education["degree"]);
// var formattedSchoolDates = HTMLschoolDates.replace("%data", education["years"]);
// var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education["location"]);
// var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education["major"]);

// var HTMLschoolStart = "<div class='education-entry'></div>";
// var HTMLschoolName = "<a href='#'>%data%";
// var HTMLschoolDegree = " -- %data%</a>";
// var HTMLschoolDates = "<div class='date-text'>%data%</div>";
// var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
// var HTMLschoolMajor = "<em><br>Major: %data%</em>"

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);
// $("#header").append(formattedBioPic);

// $("#workExperience").append(HTMLworkStart);
// $("#workExperience").append(formattedWorkEmployer);
// $("#workExperience").append(formattedWorkTitle);
// $("#workExperience").append(formattedWorkDates);
// $("#workExperience").append(formattedWorkLocation);
// $("#workExperience").append(formattedWorkDescription);

// $("#education").append(HTMLschoolStart);

// $("#footerContacts").append(formattedEmail);
// $("#footerContacts").append(formattedMobile);

