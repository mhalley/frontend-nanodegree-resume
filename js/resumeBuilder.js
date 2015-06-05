//Defines all bio info
var bio = {
		"name" : "Marguerite Halley",
		"role" : "Web Developer",
		"contacts" : [
			{
				"mobile" : "314-640-4656",
				"email" : "marguerite.e.halley@gmail.com",
				"github" : "mhalley",
				"twitter" : "mhalley1",
				"location" : "St. Louis, MO"
			}
			],
		"welcomeMessage" : "I am a champion for users and streamlined user experiences. I believe in being a jack of all trades and a master of some. I love every part of working in this fascinating, ever-changing digital age. I have worked various positions in web during my career, including web design, social media, video/image editing, content strategy, information architecture and usability testing. Let's talk about how I can help you take your digital project to the next level.",
		"skills": [
			"web design", "content strategy", "HTML5", "CSS", "Twitter Bootstrap", "JavaScript", "JSON"
			],
		"bioPic" : "images/ProfilePic.jpg",
		"bioPicAlt" : "headshot of Marguerite Halley"
	};

//Displays all bio info
bio.display = function () {
	//display Name and Role
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").prepend

	//display bioPic
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic).replace("%alt%", bio.bioPicAlt);
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
	};

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
	};
};

bio.display ();

//Defines all Work Experience info
var work = {
	"jobs" : [
		{
			"title" :"Digital Content Strategist",
			"employer" : "Public Affairs at Washington University in St. Louis",
			"location" : "St. Louis, MO",
			"dates" : "February 2014 - Present",
			"description" : "<li>Consult with campus partners on digital content strategy</li><li>Build new websites and reimagine existing websites using the university’s new WordPress theme</li><li>Plan process for university’s new managed self-service website option and create training materials</li>"
		},
		{
			"title" :"Online Communications and Emerging Media Specialist",
			"employer" : "Brown School at Washington University in St. Louis",
			"location" : "St. Louis, MO",
			"dates" : "February 2013 - January 2014",
			"description" : "<li>Analyzed website, social media data to develop strategic ways to further mission and reach target audiences of schools and centers</li><li>Updated, created, and troubleshot content for internal and external sites, including building sub-sites under deadline; Managed social media communications & campaigns on Twitter, Facebook, LinkedIn, Instagram</li><li>Managed special web and video projects in addition to social media campaigns</li>"
		},
		{
			"title" :"Assistant Communications Coordinator",
			"employer" : "Trulaske College of Business, University of Missouri",
			"location" : "Columbia, MO",
			"dates" : "August 2011 - January 2013",
			"description" : "<li>Researched competitors, formulated Information Architecture and assisted with redesign of the site, business.missouri.edu, in Drupal for launch in January</li><li>Worked with departmental liaisons to develop social media and web communication for college</li><li>Worked with departmental liaisons to develop social media and web communication for college</li><li>Coordinated social media communications and campaigns on Twitter, Facebook, and Pinterest</li>"
		},
		{
			"title" :"Media Consultant",
			"employer" : "Associated Press",
			"location" : "New York, NY",
			"dates" : "January 2012 - May 2012",
			"description" : "<li>Conceptualized strategies to monetize unused firm resources</li><li>Assisted in developing a tablet-­based multimedia product utilizing archival digital resources</li><li>Prepared marketing strategy and financials for product implementation</li>"
		},
		{
			"title" :"Website and Exhibit Design Intern",
			"employer" : "McDougall Center for Photojournalism Studies",
			"location" : "Columbia, MO",
			"dates" : "January 2011 - June 2011",
			"description" : "<li>Redesigned gallery website, mcdougallcenter.missouri.edu, to improve usability</li><li>Produced video and multimedia for exhibit space</li><li>Created online interactive educational exhibits</li>"
		}
	]
};

work.display = function () {
	//displays work info
	for (var job in work.jobs) {
		//displays work experience section header
		$("#workExperience").append(HTMLworkStart);

		//displays jobs details
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedEmployerTitle =  formattedTitle + formattedEmployer;

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocationDates = formattedLocation + formattedDates;
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedLocationDates);
		$(".work-entry:last").append(formattedDescription);
	};
}

work.display();


//defines project info details
var projects = {
	"projects" : [
		{
			"title" : "Portfolio Site",
			"dates" : "May 2015",
			"description" : "I was tasked to replicate and then customize a Photoshop mock-up in HTML5 and CSS. Using the Twitter Bootstrap framework, I created a fully responsive site with optimized images.",
			"images" : "images/portfolio.jpg",
			"url" : "http://marguerite-halley.com",
			"alt" : "screenshot of the portfolio project site"
		},
		{
			"title" : "Arcade Game Clone",
			"dates" : "June 2015",
			"description" : "I will be replicating the game frogger using HTML5 Canvas.",
			"images" : "images/197x148.gif",
			"url" : "http://marguerite-halley.com",
			"alt" : " "
		},
		{
			"title" : "Neighborhood Map",
			"dates" : "June 2015",
			"description" : "I will create an interactive map.",
			"images" : "images/197x148.gif",
			"url" : "http://marguerite-halley.com",
			"alt" : " "
		}
	]
};

//Displays projects on resume
projects.display = function () {
	for (var project in projects.projects) {
		//displays projects section header
		$("#projects").append(HTMLprojectStart);

		//displays project info
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images).replace("#", projects.projects[project].url).replace("%alt%", projects.projects[project].alt);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		$(".project-entry:last").append(formattedImages);
	}
};

projects.display ();

//Defines Education on resume
var education = {
	//displays school details
	"schools": [
		{
			"name": "Neilson Norman Group",
			"location": "San Francisco, CA",
			"degree" : "Usability Certification",
			"major"	: "Interaction Design",
			"graduation" : "April 2015"
		},
		{
			"name": "University of Missouri",
			"location": "Columbia, MO",
			"degree" : "MBA",
			"major"	: "Management: Entrepreneurship",
			"graduation" : "December 2012"
		},
		{
			"name": "University of Missouri",
			"location": "Columbia, MO",
			"degree" : "Masters",
			"major"	: "Journalism: Visual Editing and Management",
			"graduation" : "December 2011"
		},
		{
			"name": "University of Missouri",
			"location": "Columbia, MO",
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

//Displays education on resume
education.display = function () {
	//displays school details
	for (var school in education.schools) {
		//displays Education section header
		$("#education").append(HTMLschoolStart);

		//displays schools details
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedDegreeMajor = formattedDegree + formattedMajor;
		var formattedGraduation = HTMLschoolDates.replace("%data%", education.schools[school].graduation);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedCityGraduation = formattedCity + formattedGraduation;

		$(".education-entry:last").append(formattedDegreeMajor);
		$(".education-entry:last").append(formattedCityGraduation);
		$(".education-entry:last").append(formattedName);
	};

	//displays Online Classes section header
	$("#education").append(HTMLonlineClasses);

	for (var course in education.onlineCourses) {
		//displays schools details
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);

		$(".online-entry:last").append(formattedTitleSchool);
		$(".online-entry:last").append(formattedDates);
		$(".online-entry:last").append(formattedURL);
	};
}

education.display();

//show map of where lived
$("#mapDiv").append(googleMap);

//tracks clicks on the resume
$(document).click(function(loc) {
	//track clicks
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


