/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	name : "Chris Whidden",
	role : "Software Developer",
	contactInfo : {
		email : "Christopher.Whidden@gmail.com"
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
		"url" : "http://www.csbsju.edu/"
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


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName + formattedRole);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (i = 0; i < bio.skills.length; i++) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}  
}

if (work.jobs.length > 0) {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		console.log(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
	}
}




// var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
// var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
// var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// var formattedSkills = HTMLskills.replace("%data%", bio.skills);
// var formattedPosition = HTMLworkTitle.replace("%data%", bio.work.position);
// var formattedEducation = HTMLschoolName.replace("%data%", bio.education.name);

//$("#header").prepend(formattedName + formattedRole + formattedPic + formattedEmail + formattedWelcomeMsg + formattedSkills);
// $("#main").prepend(formattedPosition);
// $("#main").prepend(formattedEducation);