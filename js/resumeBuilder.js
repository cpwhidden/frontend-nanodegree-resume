/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name" : "Chris Whidden",
	"role" : "Software Developer",
	"contactInfo" : {
		"mobile" : "507-398-4723",
		"email" : "Christopher.Whidden@gmail.com",
		"github" : "http://www.github.com/cpwhidden",
		"twitter" : "https://twitter.com/cpwhidden",
		"location" : "Rochester, MN"
	},
	"welcomeMessage" : "Thanks for taking the opportunity to know more about me!",
	"skills" : ["Swift", "iOS", "Xcode", "HTML", "CSS"],
	"biopic" : "images/Me.jpg",
	"display" : function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
		$("#header").prepend(bioPic + formattedName + formattedRole);

		var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
		var formattedTwitter = HTMLmobile.replace("%data%", bio.contactInfo.twitter);
		$("#topContacts").append(formattedEmail + formattedMobile + formattedGithub + formattedTwitter + formattedLocation);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (i = 0; i < bio.skills.length; i++) {
				$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
			}  
		}
	}
};

var work = {
	"jobs": [
	{
		"employer" : "Self-employed",
		"title" : "Independent Software Developer",
		"location" : "Rochester, MN",
		"dates" : "2015-",
		"city" : "The World",
		"description" : "Independently pursuing iOS apps to be published in the App Store"
	},
	{
		"employer" : "Rochester Public Library",
		"title" : "Library Assistant/Database Administrator",
		"location" : "Rochester, MN",
		"dates" : "2007-2015",
		"city" : "Rochester, MN",
		"description" : "Developed and administered databases that improved library functions"
	}
	],
	"display" : function() {
		for (var job = 0; job < work.jobs.length; job++) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			console.log(formattedEmployer + formattedTitle);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[job].city);
			$(".work-entry:last").append(formattedDates + formattedCity);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var education = {
	"schools": [
	{
		"name": "St. John's University",
		"location": "Collegeville, MN",
		"degree": "Bachelor of Arts",
		"majors": ["English Literature", "Ancient Greek"],
		"url" : "http://www.csbsju.edu/",
		"dates" : 2007
	},
	{
		"name": "Southwest University",
		"location": "Beibei, China",
		"degree" : "Study Abroad",
		"majors" : ["Chinese Language"],
		"dates" : 2006
	}
	],
	"onlineCourses" : [
	{
		"title" : "iOS Developer Nanodegree",
		"school" : "Udacity",
		"dates" : "May 2015 - August 2015",
		"url" : "https://www.udacity.com/course/ios-developer-nanodegree--nd003"
	},
	{
		"title" : "Certificate in Database Management",
		"school" : "University of Washington",
		"dates" : "November 2013 - May 2014",
		"url" : "http://www.pce.uw.edu/certificates/database-management.html"
	}
	],
	"display" : function() {
		for (var school = 0; school < education.schools.length; school++) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors.join(", "));
			$(".education-entry:last").append(formattedName + formattedDegree  + formattedDates + formattedLocation + formattedMajors);
		}
		if (education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
		}
		for (var course = 0; course < education.onlineCourses.length; course++) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedTitle + formattedSchool + formattedCourseDates + formattedURL);
		}
	}
};

var projects = {
	"project" : [
	{
		"title" : "Flash Time",
		"dates" : "August 2015",
		"description" : "iOS flash card app",
		"images" : ["images/flash-time.jpg"]
	},
	{
		"title" : "My Portfolio",
		"dates" : "December 2015",
		"description" : "Display of my works",
		"images" : ["images/featured-work.jpg"]
	}],
	"display" : function() {
		for (var i = 0; i < projects.project.length; i++) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
			var formattedImages = [];
			for (var j = 0; j < projects.project[i].images.length; j++) {
				formattedImages.push(HTMLprojectImage.replace("%data%", projects.project[i].images[j]));
			}
			$(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);
			if (formattedImages.length > 0) {
				$(".project-entry:last").append(formattedImages);
			}
		}
	}
};


$("#main").append(internationalizeButton);

bio.display();

work.display();

projects.display();

education.display();

function inName(name) {
	var names = name.split(" ");
	return names[0][0].toUpperCase() + names[0].slice(1) + " " + names[1].toUpperCase();
}

$("#footerContacts").append("<a href='https://www.linkedin.com/pub/chris-whidden/69/2a/32b'> <img src='https://static.licdn.com/scds/common/u/img/webpromo/btn_myprofile_160x33.png' width='160' height='33' border='0' alt='View Chris Whidden\'s profile on LinkedIn'></a>");

$(document).click(function(loc) {
	console.log("X:" + loc.pageX + " Y:" + loc.pageY);
});

$("#mapDiv").append(googleMap);