/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	name : "Chris Whidden",
	role : "Software Developer",
	contactInfo : {
		email : "Christopher.Whidden@gmail.com",
		location : "Rochester, MN"
	},
	pictureURL : "images/Me.jpg",
	welcomeMessage : "Thanks for taking the opportunity to know more about me!",
	skills : ["Swift", "iOS", "Xcode", "HTML", "CSS"]
};

var work = {
	jobs: [
	{
		"position" : "Independent Software Developer",
		"employer" : "Self-employed",
		"dates" : "2015-",
		"city" : "The World",
		"description" : "Independently pursuing iOS apps to be published in the App Store"
	},
	{
		"position" : "Library Assistant/Database Administrator",
		"employer" : "Rochester Public Library",
		"dates" : "2007-2015",
		"city" : "Rochester, MN",
		"description" : "Developed and administered databases that improved library functions"
	}
	]
};

var education = {
	"schools": [
	{
		"name": "St. John's University",
		"location": "Collegeville, MN",
		"degree": "Bachelor of Arts",
		"major": "English Literature",
		"minor": "Ancient Greek",
		"url" : "http://www.csbsju.edu/",
		"dates" : "2003-2007"
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
	]
}

var projects = {
	"project" : [
	{
		"title" : "Flash Time",
		"dates" : "August 2015",
		"description" : "iOS flash card app",
		"images" : []
	},
	{
		"title" : "My Portfolio",
		"dates" : "December 2015",
		"description" : "Display of my works",
		"images" : []
	}]
}


$("#main").append(internationalizeButton);

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var bioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
	$("#header").prepend(bioPic + formattedName + formattedRole);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (i = 0; i < bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}  
	}
}

bio.display();


work.display = function() {

	if (work.jobs.length > 0) {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
			console.log(formattedEmployer + formattedTitle);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[job].city);
			$(".work-entry:last").append(formattedDates + formattedCity);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}

}

work.display();


function inName(name) {
	var names = name.split(" ");
	return names[0][0].toUpperCase() + names[0].slice(1) + " " + names[1].toUpperCase();
}

projects.display = function() {
	if (projects.project.length > 0 ) {
		for (i in projects.project) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
			var formattedImages = [];
			for (j in projects.project[i].images) {
				formattedImages.push(HTMLprojectImage.replace("%data%", projects.project[i].images[j].url));
			}
			$(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);
			if (formattedImages.length > 0) {
				$(".project-entry:last").append(formattedImages);
			}
		}
	}
}

projects.display();

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedName + formattedDegree + formattedMajor + formattedDates + formattedLocation);
	}
}

education.display();

$(document).click(function(loc) {
	console.log("X:" + loc.pageX + " Y:" + loc.pageY);
})

$("#mapDiv").append(googleMap);