import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';


var surveyJSON = {
 clearInvisibleValues: true,
 completedHtml: "<h2>That concludes your</h3>\n<h1>Hiring Eric Messick for Dummies Survey</h1>\n</br>\n<h3>If you provided an employment lead, Thank you.</h3>\n<p>I won't let your information go to waste.  I promise you, I will reach out shortly.</p><p>I'll probably wait <strong>48 hours</strong>, as to not look desperate.</p>\n</br>\n<h3>In the mean time, do you wanna have some fun?</h3>\n<p>Take the survey again. Play around.*</p>\n</br>\n<a href=\"javascript:history.go(0);\">Click here to restart the survey.</a>\n<p>*Hint: Pretend <i>not</i> to be an interested employer.  Answer <i>No</i> as much as possible.</p>\n</br>\n<h3>And to the participants who did not provide a lead, or were not employers, recruiters, or the like,</h3>\n<p>You can retake the survey too.*  Pretend to be an employer, if you're not.</p>\n<p>Just please, please, don't send me a false lead to an employer at the end.</p>\n<p>That's just mean, especially, since I will email them and claim you referred me to them.  It'll just be awkward for everyone.</p>\n</br>\n<a href=\"javascript:history.go(0);\">Click here to restart the survey.</a>\n<p>*I'm just assuming you are a coder who wants to see how things work</p>",
 goNextPageAutomatic: true,
 locale: "en",
 pageNextText: "Next",
 pagePrevText: "Back",
 pages: [{
  name: "page_hiring",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "radiogroup",
   choices: [{
    value: "1",
    text: "Why, Yes I am!"
   }, {
    value: "2",
    text: "Close...I work directly for a company and am in a position to bend the boss's ear."
   }, {
    value: "3",
    text: "I am a recruiter, looking for qualified individuals such as your self."
   }, {
    value: "4",
    text: "Nope.  Not a hiring manager or a recruiter.  Guess again."
   }],
   isRequired: true,
   name: "hiringManager",
   otherText: "other",
   startWithNewLine: false,
   title: "Select the one that best applies."
  }],
  title: "Are you a hiring manager or recruiter?"
 }, {
  name: "page_position",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "radiogroup",
   choices: [{
    value: "1",
    text: "Entry or Junior Level Position"
   }, {
    value: "2",
    text: "Senior Developer or Management Position"
   }],
   isRequired: true,
   name: "position",
   otherText: "other",
   title: "Choose the closest fit."
  }],
  title: "What kind of position is the company looking to fill?",
  visible: false,
  visibleIf: "{hiringManager} <= 3"
 }, {
  name: "page_consider",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "radiogroup",
   choices: [{
    value: "1",
    text: "I'll think about it.  Let's see where the rest of this questionnaire leads."
   }, {
    value: "2",
    text: "No, I think we're done here.  Cool survey though."
   }],
   isRequired: true,
   name: "consider",
   otherText: "other",
   title: "Honestly, I'm not there yet.  Would you consider me for an Entry or Junior Level Position, if not now, when one opens up?"
  }],
  title: "Dadgummit.",
  visible: false,
  visibleIf: "{position} = 2"
 }, {
  name: "page_references",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "radiogroup",
   choices: [{
    value: "1",
    text: "Well, duh."
   }, {
    value: "2",
    text: "Nah, dude.  References are for posers and for people who talk during movies."
   }],
   isRequired: true,
   name: "references",
   otherText: "other",
   title: "Would you like a candidate with some awesome references?"
  }],
  title: "How about references?  ",
  visible: false,
  visibleIf: "{consider} = 1 || {position} = 1"
 }, {
  name: "page_liveAustin",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "radiogroup",
   choices: [{
    value: "1",
    text: "Yes.  Keeping it weird, man."
   }, {
    value: "2",
    text: "No.  Too weird for me."
   }],
   isRequired: true,
   name: "liveAustin",
   otherText: "other",
   title: "You can't be in two places at once."
  }],
  title: "Are you located in Austin or the surrounding area?",
  visible: false,
  visibleIf: "{hiringManager} = 4"
 }, {
  name: "page_knownLanguages",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "radiogroup",
   choices: [{
    value: "1",
    text: "Yes"
   }, {
    value: "2",
    text: "No"
   }],
   isRequired: true,
   name: "knownLanguages",
   otherText: "other",
   title: "...a candidate who knows HTML5, CSS3, Javascript, JQuery, Wordpress, Node, React, Git, Photoshop, and..."
  }],
  title: "And are you looking for...",
  visible: false,
  visibleIf: "{references}= 1 || {references}=2"
 }, {
  name: "page_unknownLanguages",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "radiogroup",
   choices: [{
    value: "1",
    text: "Yes! Yes!"
   }, {
    value: "2",
    text: "No, I can't wait.  I need someone who knows other languages, libraries, or frameworks NOW!"
   }],
   isRequired: true,
   name: "unknownLanguages",
   otherText: "other",
   title: "...is hungry to learn Angular, MySQL, Flux, or whatever you need?!"
  }],
  title: "And who...",
  visible: false,
  visibleIf: "{knownLanguages} = 1"
 }, {
  name: "page_youreAWinner",
  questions: [{
   type: "html",
   html: "<h3>Not that I'm a prize pig or anything</h3><p>But, this is exactly the foot-in-the-door I am looking for</p>",
   name: "youreAWinner"
  }, {
   type: "html",
   html: "<p>*Quote from the 5th Element.  No big deal</p>",
   name: "fifthElement"
  }],
  title: "\"YOU'RE A WINNER!\"*",
  visible: false,
  visibleIf: "{unknownLanguages} = 1"
 }, {
  name: "page_neededLanguages",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "checkbox",
   choices: [{
    value: "1",
    text: "Angular"
   }, {
    value: "2",
    text: "MySQL"
   }, {
    value: "3",
    text: "Flux"
   }, {
    value: "4",
    text: "Survey.js"
   }, {
    value: "5",
    text: "Java"
   }, {
    value: "6",
    text: "C++"
   }, {
    value: "7",
    text: "Socket"
   }, {
    value: "8",
    text: "Polymer"
   }, {
    value: "9",
    text: "Meteor"
   }, {
    value: "10",
    text: "Ember"
   }, {
    value: "11",
    text: "Knockout"
   }, {
    value: "12",
    text: "Less"
   }, {
    value: "13",
    text: "Backbone"
   }, {
    value: "14",
    text: "Grunt"
   }, {
    value: "15",
    text: "Gulp"
   }, {
    value: "16",
    text: "Babel"
   }, {
    value: "17",
    text: "Underscore"
   }, {
    value: "18",
    text: "Lodash"
   }, {
    value: "19",
    text: "Bootstrap"
   }, {
    value: "20",
    text: "And others"
   }],
   isRequired: true,
   name: "neededLanguages",
   otherText: "Other",
   storeOthersAsComment: false,
   title: "What languages, frameworks, or libraries do you need?"
  }, {
   type: "comment",
   name: "inputLanguages",
   placeHolder: "Qapla'  (thats Klingon for \"Success!\")",
   rows: 3,
   title: "Other languages, frameworks, or libraries?",
   visible: false,
   visibleIf: "{neededLanguages} contains 20"
  }],
  title: "Tell me, please.",
  visible: false,
  visibleIf: "{knownLanguages} = 2 or {unknownLanguages} = 2"
 }, {
  name: "page_checkBack",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "html",
   html: "<h3>I appreciate you letting me know what you need</h3><p>Tell you what, check back in a few months</p><p><strong>I may surprise you.</strong></p>",
   name: "checkBack"
  }],
  title: "I hear you, and...",
  visible: false,
  visibleIf: "{neededLanguages} >= 1"
 }, {
  name: "page_goodDeed",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "radiogroup",
   choices: [{
    value: "1",
    text: "Yeah, I know someone."
   }, {
    value: "2",
    text: "I hate you! You shouldn't have capitalized \"Do\".  I hope you never get a job, Eric!"
   }],
   isRequired: true,
   name: "goodDeed",
   otherText: "other",
   title: "Do you know anyone who is hiring Web Developers in the area?  And if so, do you want to do me a solid and give me their info?  It could be your good deed for the day..."
  }],
  title: "Since you are here,",
  visible: false,
  visibleIf: "{liveAustin} = 1"
 }, {
  name: "page_stumble",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "radiogroup",
   choices: [{
    value: "1",
    text: "Yes"
   }, {
    value: "2",
    text: "No"
   }],
   isRequired: true,
   name: "stumble",
   otherText: "other",
   title: "Did you just stumble upon this while Googling a survey coding example, using React, Redux, or Node?"
  }],
  title: "I know your struggle.",
  visible: false,
  visibleIf: "{liveAustin} = 2"
 }, {
  name: "page_noGoodDeed",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "html",
   html: "<h3>Look at this kitten and think about your life.</h3><p>If you think might change your mind</p>",
   name: "question3"
  }],
  title: "Well, that's just plain mean.",
  visible: false,
  visibleIf: "{goodDeed} = 2"
 }, {
  name: "page_wantGit",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "radiogroup",
   choices: [{
    value: "1",
    text: "Yes"
   }, {
    value: "2",
    text: "No"
   }],
   isRequired: true,
   name: "wantGit",
   otherText: "other",
   title: "Would you like to visit my GitHub page so you can get the code?"
  }],
  title: "Awesome!",
  visible: false,
  visibleIf: "{stumble} = 1"
 }, {
  name: "page_getGit",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "radiogroup",
   choices: [{
    value: "1",
    text: "Sure can do."
   }, {
    value: "2",
    text: "I don't know anyone.  Just the link, please."
   }],
   isRequired: true,
   name: "getGit",
   otherText: "other",
   title: "If you know anyone who is hiring in Austin, Texas, would you send me their info and help me get a job.  If not, it's cool.  You can still have the link."
  }],
  title: "Since you are here,",
  visible: false,
  visibleIf: "{wantGit} = 1"
 }, {
  name: "page_emailGit",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "html",
   html: "<h3>First, click the link.</h3><p>But then, come right back and finish 'cause I didn't Javascript this piece.</p><a target=\"_blank\" href=\"\">To the GitHub</a>",
   name: "gitLink"
  }, {
   type: "html",
   html: "<h3>Then, give send me the 411.</h3>",
   name: "question9"
  }, {
   type: "text",
   commentText: "WHAT IS THIS?",
   isRequired: true,
   name: "userCompany",
   placeHolder: "The Best Inc",
   title: "Your Company (if applicable)",
   width: "33%"
  }, {
   type: "text",
   commentText: "WHAT IS THIS?",
   isRequired: true,
   name: "userName",
   placeHolder: "Hubert Humperdink",
   startWithNewLine: false,
   title: "Your Name",
   width: "33%"
  }, {
   type: "text",
   inputType: "email",
   isRequired: true,
   name: "userEmail",
   placeHolder: "emailmadewhenIwas14@regrets.com",
   startWithNewLine: false,
   title: "Your Email",
   validators: [{
    type: "email"
   }],
   width: "33%"
  }, {
   type: "text",
   commentText: "WHAT IS THIS?",
   isRequired: true,
   name: "theirCompany",
   placeHolder: "Awesome LLC",
   title: "Their Company",
   width: "33%"
  }, {
   type: "text",
   commentText: "WHAT IS THIS?",
   isRequired: true,
   name: "theirName",
   placeHolder: "Bill Jobs-Gates",
   startWithNewLine: false,
   title: "Their Name",
   width: "33%"
  }, {
   type: "text",
   inputType: "email",
   isRequired: true,
   name: "theirEmail",
   placeHolder: "boringemailaddress@company.com",
   startWithNewLine: false,
   title: "Their Email",
   validators: [{
    type: "email"
   }],
   width: "33%"
  }, {
   type: "comment",
   name: "theirAbout",
   placeHolder: "They want to pay you a millionny dollars an hour to look at cat videos!",
   title: "What's the inside info?"
  }],
  title: "You are my new best friend.",
  visible: false,
  visibleIf: "{getGit} = 1"
 }, {
  name: "page_justGit",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "html",
   html: "<h3>And good luck.</h3><p>Psst.  Click the link.</p><a target=\"_blank\" href=\"\">Here's the git</a>",
   name: "justGit"
  }],
  title: "May the Code be with You.",
  visible: false,
  visibleIf: "{getGit} = 2"
 }, {
  name: "page_endForYou",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "html",
   html: "<h3>This is sort of the end of the line for you then.</h3>",
   name: "endForYou"
  }],
  title: "Okay. Well...",
  visible: false,
  visibleIf: "{wantGit} = 2"
 }, {
  name: "page_timeTravel",
  questions: [{
   type: "radiogroup",
   choices: [{
    value: "1",
    text: "I can't believe you figured it out in 3 guesses!  I could use a clairvoyant to help save the world."
   }, {
    value: "2",
    text: "Nope. Also, isn't the purpose of this survey to get a job?  You're kind of an idiot."
   }],
   isRequired: true,
   name: "timeTravel",
   otherText: "other",
   title: "You are a time traveler looking to assemble a rag tag crew, and needing a lovable roguish jack of all trades to be the heart and glue that holds the team together?"
  }],
  title: "Oh, I know why you are here.",
  visible: false,
  visibleIf: "{stumble} = 2"
 }, {
  name: "page_likeSurveys",
  questions: [{
   type: "radiogroup",
   choices: [{
    value: "1",
    text: "Yes.  They are my Nuke!* "
   }, {
    value: "2",
    text: "No.  Give up, yet?"
   }],
   isRequired: true,
   name: "likeSurveys",
   otherText: "other",
   title: "Tell the truth.  This is a \"safe space\"."
  }, {
   type: "html",
   html: "<p>*Warning:  Nerd Alert! \"Nuke\" is the fictional drug from RoboCop 2.</p>",
   name: "nuke"
  }],
  title: "Do you just really like doing random surveys?",
  visible: false,
  visibleIf: "{timeTravel} = 2"
 }, {
  name: "page_surveySites",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "html",
   html: "<h3>This is just one survey, and will probably not quench your survey thirst.</h3><p>So, here is a list of survey sites to tide you over.</p>\n<ul>\n<li><a href=\"http://www.dumb.com/polls\">Dumb</a></li>\n<li><a href=\"http://tjshome.com/survey/takesurvey.php?id=13537\">TJ's Home</a></li>\n<li><a href=\"http://www.quibblo.com/take/survey\">Quibblo</a></li>\n<li><a href=\"https://www.quotev.com/surveys/Fun\">Quotev</a></li>\n<li><a href=\"http://www.quizopplis.com\">Quizopolis</a></li>\n<li><a href=\"http://weirdpoll.com\">Weird Poll</a></li>\n<li><a href=\"http://www.wonderpolls.com\">Wonder Polls</a></li>\n\n</ul>",
   name: "likeSurveys"
  }],
  title: "Okay, well...",
  visible: false,
  visibleIf: "{likeSurveys} = 1"
 }, {
  name: "page_cryingOutLoud",
  questions: [{
   type: "html",
   html: "<h3>Just tell me.  Tell me.</h3>",
   name: "cryingOutLoad"
  }, {
   type: "text",
   commentText: "WHAT IS THIS?",
   isRequired: true,
   name: "yourName",
   placeHolder: "Mary Q. Contrarian",
   title: "Your Name",
   width: "50%"
  }, {
   type: "text",
   inputType: "email",
   isRequired: true,
   name: "yourEmail",
   placeHolder: "emailmadewhenIwas14@regrets.com",
   startWithNewLine: false,
   title: "Your Email",
   validators: [{
    type: "email"
   }],
   width: "50%"
  }, {
   type: "comment",
   name: "question21",
   placeHolder: "I have to know!",
   title: "Please, just tell me why you are here."
  }],
  title: "Oh, for crying out loud!",
  visible: false,
  visibleIf: "{likeSurveys} = 2"
 }, {
  name: "page_imIn",
  questions: [{
   type: "html",
   html: "<p>Reach out and give me the deets of when, where, and do I need a jacket?</p>",
   name: "imInInstructions"
  }, {
   type: "text",
   commentText: "WHAT IS THIS?",
   isRequired: true,
   name: "userName",
   placeHolder: "Come with me, if you want to live.",
   title: "Your Name",
   width: "50%"
  }, {
   type: "text",
   inputType: "email",
   isRequired: true,
   name: "userEmail",
   placeHolder: "cher@aol.com",
   startWithNewLine: false,
   title: "Your Email",
   validators: [{
    type: "email"
   }],
   width: "50%"
  }, {
   type: "comment",
   name: "userComment",
   placeHolder: "I've never been a fan of Cold Play, if my input is under consideration.",
   title: "What part of history needs to be changed?"
  }],
  title: "I'm in!",
  visible: false,
  visibleIf: "{timeTravel} = 1"
 }, {
  name: "page_emailReferal",
  navigationButtonsVisibility: "iherit",
  questions: [{
   type: "html",
   html: "<h3>You know what to do.</h3>\n<p>Assuming that you're not a Platypus and never seen the internet before.</p>\n</br>\n<p>I sincerely apologize to all Platypus enthusiasts out there who are offended by that thoughtless comment about the ineptitude of the Platypi. I respect the noble Platypus, and it is not my intention to slight these stupid creatures in any way. Thank you again.**</p>\n",
   name: "emailInstructions"
  }, {
   type: "text",
   commentText: "WHAT IS THIS?",
   name: "userCompany",
   placeHolder: "The Best Inc",
   title: "Your Company (if applicable)",
   width: "33%"
  }, {
   type: "text",
   commentText: "WHAT IS THIS?",
   isRequired: true,
   name: "userName",
   placeHolder: "Keyser Soze",
   startWithNewLine: false,
   title: "Your Name",
   width: "33%"
  }, {
   type: "text",
   inputType: "email",
   isRequired: true,
   name: "userEmail",
   placeHolder: "emailmadewhenIwas14@regrets.com",
   startWithNewLine: false,
   title: "Your Email",
   validators: [{
    type: "email"
   }],
   width: "33%"
  }, {
   type: "text",
   commentText: "WHAT IS THIS?",
   isRequired: true,
   name: "theirCompany",
   placeHolder: "Awesome LLC",
   title: "Their Company",
   width: "33%"
  }, {
   type: "text",
   commentText: "WHAT IS THIS?",
   isRequired: true,
   name: "theirName",
   placeHolder: "Bill Jobs-Gates",
   startWithNewLine: false,
   title: "Their Name",
   width: "33%"
  }, {
   type: "text",
   inputType: "email",
   isRequired: true,
   name: "theirEmail",
   placeHolder: "boringemailaddress@company.com",
   startWithNewLine: false,
   title: "Their Email",
   validators: [{
    type: "email"
   }],
   width: "33%"
  }, {
   type: "comment",
   name: "theirAbout",
   placeHolder: "They want to pay you a millionny dollars an hour to index all the cat videos on the internet!",
   title: "What's the inside info?"
  }, {
   type: "html",
   html: "<p>*X-Men quote.  No big deal.</p>\n<p>**An apt apprehensive, and partially alliterate, unapologetic appropriation of the \"Platypi Apology.\"</p>",
   name: "godAmongInsects"
  }],
  title: "\"You are a god among insects.\"*",
  visible: false,
  visibleIf: "{goodDeed} = 1"
 }],
 requiredText: "",
 showQuestionNumbers: "off",
 showTitle: false,
 storeOthersAsComment: false
}

function sendDataToServer(survey) {
 survey.sendResult('1d806669-ede1-4c01-8cbb-8c200b5e52e6');
}

export default class HiringEricMessickSurvey extends Component {
  render() {
      return ( 
        < Survey.Survey json = {surveyJSON} onComplete = {sendDataToServer} />
      );
  }
}