var name = "Marguerite Halley"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend

//var work = {};
//work.position = "Web Developer";
//work.employer = "Washington University";
//work.years = 2;
//work.city = "St. Louis";

//$("#main").append(bio.name);
//$("#main").append(work["position"]);
//$("#main").append(education["name"]);


//WHILE LOOPS
//var cameron = {};
//cameron.job = "course dev";

//var  makeCourse = function () {
	//make a course
//	console.log("Make a course");
//}

//var courses = 0;
//while(cameron.job ==== "course dev") {
//	makeCourse ();
//	courses = courses + 1;
//	if (courses ==== 10) {
//		cameron.job = "learning specialist";
//	}
//}

//console.log(cameron.job);

//FOR LOOPS
//for (var i = 0; i < 9; i++) {
	//print numbers 0-8
//	console.log(i);
//}

//FOR IN LOOPS
//var countries = [
//	"Germany", "Argentina", "Brazil", "Netherlands"
//];

//for (country in countries) {
	//print countries
//	console.log(countries[country])
//};

//FUNCTIONS
//function locationFinder () {
//	var locations = []
//	loactions.push(bio.contacts.location);
//	for (var school in education.schools) {
//		locations.push(education.schools[school].location);
//	}
//	for (var job in work.jobs) {
//		locations.push(work.jobs[job].location);
//	}
//	return locations;
//}

//write fuction to take in work object; return array of locations in work. use push.
//My solution, which funtioned
//function locationizer() {
//    var locations = [];

//	for (var job in work.jobs) {
//		locations.push(work.jobs[job].location);
//	}

//	return locations;
//}

//Their solution

//function locationizer(work_obj) {
//    var locationArray = [];

//	for (job in work_obj.jobs) {
//		var newLocation = work_obj.jobs[job].location);
//		locationArray.push(newLocation);
//	}

//	return locationArray;
//}

//My solution
//$("#main").append(internationalizeButton);

//var name = "sebastian thrun";

//function inName(oldName) {
//    var finalName = oldName;
//    var names = oldName.split(" ");
//    names[1] = names[1].toUpperCase();
//    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//    finalName = names.join(" ");
    // Don't delete this line!
//    return finalName;
//}

//console.log (inName(name));

//Their solution
//function inName(name) {
//	name = name.trim().split(" ");
//	console.log(name);
//	name[1] = name[1].toUpperCase();
//	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase;
//
//	return name[0] + " " +name[1];
//}

//$("#main").append(internationalizeButton);




//var skills =
//[ "web design", "content strategy", "xHTML", "HTML5", "CSS", "Twitter Bootstrap", "JavaScript", "JSON", "XML", "PHP", "ActionScript", "social media engagement & advertising", "usability testing", "evaluation and analytics", "Market Research", "SEO"
//]

//$("#main").append(skills[0]);
//$("#main").append(skills.length);


//Defines and displays all bio info
function displayBio (){
	//bio info details
	var bio = {
		"name" : "Marguerite Halley",
		"role" : "Web Developer",
		"contacts" : [
			{
				"mobile" : "314-640-4656",
				"email" : "marguerite.e.halley@gmail.com",
				"github" : "mhalley",
				"twitter" : "mhalley1"
			}
		],
		"welcomeMessage" : "I am a champion for users and streamlined user experiences. I believe in being a jack of all trades and a master of some. I love every part of working in this fascinating, ever-changing digital age. I have worked various positions in web during my career, including web design, social media, video/image editing, content strategy, information architecture and usability testing. Let's talk about how I can help you take your digital project to the next level.",
		"skills": [
			"web design", "content strategy", "xHTML", "HTML5", "CSS", "Twitter Bootstrap", "JavaScript", "JSON", "XML", "PHP", "ActionScript", "social media engagement & advertising", "usability testing", "evaluation and analytics", "Market Research", "SEO"
			],
		"bioPic" : "images/fry.jpg"
	};
	//display bioPic
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	//display Welcome Message
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	//display Contact details
	for (contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);

		$(".flex-box").append(formattedMobile);
		$(".flex-box").append(formattedEmail);
		$(".flex-box").append(formattedGithub);
		$(".flex-box").append(formattedTwitter);
	}

	//display skills
	if (bio.skills.length > 0) {

		//display skills section heading
		$("#header").append(HTMLskillsStart);

		//display skills content
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[9]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[10]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[11]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[12]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[13]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[14]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[15]);
		$("#skills").append(formattedSkill);
	};

};

displayBio ();


//use http://jsonlint.com/ to lint JSON (JavaScript Object Notation)

//Defines and displays all Work Experience info
function displayWork (){
	//defines work info
	var work = {
		"jobs" : [
			{
				"title" :"Digital Content Strategist",
				"employer" : "Public Affairs at Washington University in St. Louis",
				"location" : "St. Louis, MO",
				"dates" : "February 2014 - Present",
				"description" : "Consult with campus partners on digital content strategy; Build new websites and reimagine existing websites using the university’s new WordPress theme; Plan process for university’s new managed self-service website option and create training materials"
			},
			{
				"title" :"Online Communications and Emerging Media Specialist",
				"employer" : "Brown School at Washington University in St. Louis",
				"location" : "St. Louis, MO",
				"dates" : "February 2013 - January 2014",
				"description" : "Analyzed website, social media data to develop strategic ways to further mission and reach target audiences of schools and centers; Updated, created, and troubleshot content for internal and external sites, including building sub-sites under deadline; Managed social media communications & campaigns on Twitter, Facebook, LinkedIn, Instagram; Managed special web and video projects in addition to social media campaigns"
			},
			{
				"title" :"Assistant Communications Coordinator",
				"employer" : "Trulaske College of Business, University of Missouri",
				"location" : "Columbia, MO",
				"dates" : "August 2011 - January 2013",
				"description" : "Researched competitors, formulated Information Architecture and assisted with redesign of the site, business.missouri.edu, in Drupal for launch in January; Worked with departmental liaisons to develop social media and web communication for college; Worked with departmental liaisons to develop social media and web communication for college; Coordinated social media communications and campaigns on Twitter, Facebook, and Pinterest"
			},
			{
				"title" :"Media Consultant",
				"employer" : "Associated Press",
				"location" : "New York, NY",
				"dates" : "January 2012 - May 2012",
				"description" : "Conceptualized strategies to monetize unused firm resources; Assisted in developing a tablet-­based multimedia product utilizing archival digital resources; Prepared marketing strategy and financials for product implementation"
			},
			{
				"title" :"Website and Exhibit Design Intern",
				"employer" : "McDougall Center for Photojournalism Studies",
				"location" : "Columbia, MO",
				"dates" : "January 2011 - June 2011",
				"description" : "Redesigned gallery website, mcdougallcenter.missouri.edu, to improve usability; Produced video and multimedia for exhibit space; Created online interactive educational exhibits"
			}
		]
	};

	//displays work info
	for (job in work.jobs) {
		//displays work experience section header
		$("#workExperience").append(HTMLworkStart);

		//displays jobs details
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	};
}

displayWork ();

$(document).click(function(loc) {
	//track clicks
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


//Displays projects on resume
projects.display = function () {
	//defines project info details
	var projects = {
		"projects" : [
			{
				"title" : "Project 1",
				"dates" : "May 2015",
				"description" : "This project was...",
				"images" : "images/197x148.gif"
			},
			{
				"title" : "Project 2",
				"dates" : "June 2015",
				"description" : "This project was...",
				"images" : "images/197x148.gif"
			},
			{
				"title" : "Project 3",
				"dates" : "June 2015",
				"description" : "This project was...",
				"images" : "images/197x148.gif"
			}
		]
	};

	//Displays project details
	for (project in projects.projects) {
		//displays projects section header
		$("#projects").append(HTMLprojectStart);

		//displays project info
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		$(".project-entry:last").append(formattedImages);

//		if (projects.projects[project].images.length > 0) {
//			for (images in projects.projects[project].images) {
//				var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[images]);
//				$(".project-entry:last").append(formattedImages);
//			}
//		}
	}
};
projects.display ();

//Displays education on resume
function displayEducation (){
	//Defines education details
	var education = {
		"schools": [
			{
				"name": "Neilson Norman Group",
				"city": "San Francisco, CA",
				"degree" : "Usability Certification",
				"major"	: "Interaction Design",
				"graduation" : "April 2015"
			},
			{
				"name": "University of Missouri",
				"city": "Columbia, MO",
				"degree" : "MBA",
				"major"	: "Management: Entrepreneurship",
				"graduation" : "December 2012"
			},
			{
				"name": "University of Missouri",
				"city": "Columbia, MO",
				"degree" : "Masters",
				"major"	: "Journalism: Visual Editing and Management",
				"graduation" : "December 2011"
			},
			{
				"name": "University of Missouri",
				"city": "Columbia, MO",
				"degree" : "Bachelors",
				"major"	: "Anthropology",
				"graduation" : "December 2008"
			}
		],
		//defines online course details
		"onlineCourses": [
			{
				"title" : "JavaScript Syntax",
				"school" : "Udacity",
				"dates" : "June 2015",
				"url" : "http://www.udacity.com/course/ud804"
			},
			{
				"title" : "Responsive Web Design Fundamentals",
				"school" : "Udacity",
				"dates" : "May 2015",
				"url" : "http://www.udacity.com/course/ud893"
			},
			{
				"title" : "Responsive Images",
				"school" : "Udacity",
				"dates" : "May 2015",
				"url" : "http://www.udacity.com/course/ud882"
			}
		]
	};

	//displays school details
	for (school in education.schools) {
		//displays Education section header
		$("#education").append(HTMLschoolStart);

		//displays schools details
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedMajor = HTMLschoolDegree.replace("%data%", education.schools[school].major);
		var formattedGraduation = HTMLschoolDates.replace("%data%", education.schools[school].graduation);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);

		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedCity);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedMajor);
		$(".education-entry:last").append(formattedGraduation);
	};

	//displays Online Classes section header
	$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {
		//displays schools details
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

		$(".education-entry:last").append(formattedTitle);
		$(".education-entry:last").append(formattedSchool);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedURL);
	};


}
displayEducation ();

//show map of where lived
//$("#mapDiv").append(googleMap);


