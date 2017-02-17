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
 pages: [
  {
   name: "page_hiring",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "radiogroup",
     name: "hiringManager",
     startWithNewLine: false,
     title: "Select the one that best applies.",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Why, Yes I am!"
      },
      {
       value: "2",
       text: "Close...I work directly for a company and am in a position to bend the boss's ear."
      },
      {
       value: "3",
       text: "I am a recruiter, looking for qualified individuals such as your self."
      },
      {
       value: "4",
       text: "Nope.  Not a hiring manager or a recruiter.  Guess again."
      }
     ],
     otherText: "other"
    }
   ],
   title: "Are you a hiring manager or recruiter?"
  },
  {
   name: "page_position",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "radiogroup",
     name: "position",
     title: "Choose the closest fit.",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Entry or Junior Level Position"
      },
      {
       value: "2",
       text: "Senior Developer or Management Position"
      }
     ],
     otherText: "other"
    }
   ],
   title: "What kind of position is the company looking to fill?",
   visible: false,
   visibleIf: "{hiringManager} <= 3"
  },
  {
   name: "page_consider",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "radiogroup",
     name: "consider",
     title: "Honestly, I'm not there yet.  Would you consider me for an Entry or Junior Level Position, if not now, when one opens up?",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "I'll think about it.  Let's see where the rest of this questionnaire leads."
      },
      {
       value: "2",
       text: "No, I think we're done here.  Cool survey though."
      }
     ],
     otherText: "other"
    }
   ],
   title: "Dadgummit.",
   visible: false,
   visibleIf: "{position} = 2"
  },
  {
   name: "page_references",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "radiogroup",
     name: "references",
     title: "Would you like a candidate with some awesome references?",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Well, duh."
      },
      {
       value: "2",
       text: "Nah, dude.  References are for posers and for people who talk during movies."
      }
     ],
     otherText: "other"
    }
   ],
   title: "How about references?  ",
   visible: false,
   visibleIf: "{consider} = 1 || {position} = 1"
  },
  {
   name: "page_liveAustin",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "radiogroup",
     name: "liveAustin",
     title: "You can't be in two places at once.",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Yes.  Keeping it weird, man."
      },
      {
       value: "2",
       text: "No.  Too weird for me."
      }
     ],
     otherText: "other"
    }
   ],
   title: "Are you located in Austin or the surrounding area?",
   visible: false,
   visibleIf: "{hiringManager} = 4"
  },
  {
   name: "page_knownLanguages",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "radiogroup",
     name: "knownLanguages",
     title: "...a candidate who knows HTML5, CSS3, Javascript, JQuery, Wordpress, Node, React, Git, Photoshop, and...",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Yes"
      },
      {
       value: "2",
       text: "No"
      }
     ],
     otherText: "other"
    }
   ],
   title: "And are you looking for...",
   visible: false,
   visibleIf: "{references}= 1 || {references}=2"
  },
  {
   name: "page_unknownLanguages",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "radiogroup",
     name: "unknownLanguages",
     title: "...is hungry to learn Angular, MySQL, Flux, or whatever you need?!",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Yes! Yes!"
      },
      {
       value: "2",
       text: "No, I can't wait.  I need someone who knows other languages, libraries, or frameworks NOW!"
      }
     ],
     otherText: "other"
    }
   ],
   title: "And who...",
   visible: false,
   visibleIf: "{knownLanguages} = 1"
  },
  {
   name: "page_youreAWinner",
   questions: [
    {
     type: "html",
     name: "youreAWinner",
     html: "<h3>Not that I'm a prize pig or anything</h3><p>But, this is exactly the foot-in-the-door I am looking for</p>"
    },
    {
     type: "html",
     name: "fifthElement",
     html: "<p>*Quote from the 5th Element.  No big deal</p>"
    }
   ],
   title: "\"YOU'RE A WINNER!\"*",
   visible: false,
   visibleIf: "{unknownLanguages} = 1"
  },
  {
   name: "page_neededLanguages",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "checkbox",
     choices: [
      {
       value: "1",
       text: "Angular"
      },
      {
       value: "2",
       text: "Babel"
      },
      {
       value: "3",
       text: "Backbone"
      },
      {
       value: "4",
       text: "Bootstrap"
      },
      {
       value: "5",
       text: "C++"
      },
      {
       value: "6",
       text: "Ember"
      },
      {
       value: "7",
       text: "Flux"
      },
      {
       value: "8",
       text: "Grunt"
      },
      {
       value: "9",
       text: "Gulp"
      },
      {
       value: "10",
       text: "Java"
      },
      {
       value: "11",
       text: "Knockout"
      },
      {
       value: "12",
       text: "Less"
      },
      {
       value: "13",
       text: "Lodash"
      },
      {
       value: "14",
       text: "Meteor"
      },
      {
       value: "15",
       text: "MySQL"
      },
      {
       value: "16",
       text: "Polymer"
      },
      {
       value: "17",
       text: "Socket"
      },
      {
       value: "18",
       text: "Underscore"
      },
      {
       value: "19",
       text: "And others"
      }
     ],
     isRequired: true,
     name: "neededLanguages",
     otherText: "Other",
     storeOthersAsComment: false,
     title: "What languages, frameworks, or libraries do you need?"
    },
    {
     type: "comment",
     name: "inputLanguages",
     placeHolder: "Qapla'  (thats Klingon for \"Success!\")",
     rows: 3,
     title: "Other languages, frameworks, or libraries?",
     visible: false,
     visibleIf: "{neededLanguages} contains 19"
    }
   ],
   title: "Tell me, please.",
   visible: false,
   visibleIf: "{knownLanguages} = 2 or {unknownLanguages} = 2"
  },
  {
   name: "page_checkBack",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "html",
     name: "checkBack",
     html: "<h3>I appreciate you letting me know what you need</h3><p>Tell you what, check back in a few months</p><p><strong>I may surprise you.</strong></p>"
    }
   ],
   title: "I hear you, and...",
   visible: false,
   visibleIf: "{neededLanguages} >= 1"
  },
  {
   name: "page_goodDeed",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "radiogroup",
     name: "goodDeed",
     title: "Do you know anyone who is hiring Web Developers in the area?  And if so, do you want to do me a solid and give me their info?  It could be your good deed for the day...",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Yeah, I know someone."
      },
      {
       value: "2",
       text: "I hate you! You shouldn't have capitalized \"Do\".  I hope you never get a job, Eric!"
      }
     ],
     otherText: "other"
    }
   ],
   title: "Since you are here,",
   visible: false,
   visibleIf: "{liveAustin} = 1"
  },
  {
   name: "page_stumble",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "radiogroup",
     name: "stumble",
     title: "Did you just stumble upon this while Googling a survey coding example, using React, Redux, or Node?",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Yes"
      },
      {
       value: "2",
       text: "No"
      }
     ],
     otherText: "other"
    }
   ],
   title: "I know your struggle.",
   visible: false,
   visibleIf: "{liveAustin} = 2"
  },
  {
   name: "page_noGoodDeed",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "html",
     name: "question3",
     html: "<h3>Look at this kitten and think about your life.</h3><p>If you think might change your mind</p>"
    }
   ],
   title: "Well, that's just plain mean.",
   visible: false,
   visibleIf: "{goodDeed} = 2"
  },
  {
   name: "page_wantGit",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "radiogroup",
     name: "wantGit",
     title: "Would you like to visit my GitHub page so you can get the code?",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Yes"
      },
      {
       value: "2",
       text: "No"
      }
     ],
     otherText: "other"
    }
   ],
   title: "Awesome!",
   visible: false,
   visibleIf: "{stumble} = 1"
  },
  {
   name: "page_getGit",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "radiogroup",
     name: "getGit",
     title: "If you know anyone who is hiring in Austin, Texas, would you send me their info and help me get a job.  If not, it's cool.  You can still have the link.",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Sure can do."
      },
      {
       value: "2",
       text: "I don't know anyone.  Just the link, please."
      }
     ],
     otherText: "other"
    }
   ],
   title: "Since you are here,",
   visible: false,
   visibleIf: "{wantGit} = 1"
  },
  {
   name: "page_emailGit",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "html",
     name: "gitLink",
     html: "<h3>First, click the link.</h3><p>But then, come right back and finish 'cause I didn't Javascript this piece.</p><a target=\"_blank\" href=\"\">To the GitHub</a>"
    },
    {
     type: "html",
     name: "question9",
     html: "<h3>Then, give send me the 411.</h3>"
    },
    {
     type: "text",
     name: "userCompany",
     width: "33%",
     title: "Your Company (if applicable)",
     commentText: "WHAT IS THIS?",
     isRequired: true,
     placeHolder: "The Best Inc"
    },
    {
     type: "text",
     name: "userName",
     width: "33%",
     startWithNewLine: false,
     title: "Your Name",
     commentText: "WHAT IS THIS?",
     isRequired: true,
     placeHolder: "Hubert Humperdink"
    },
    {
     type: "text",
     name: "userEmail",
     width: "33%",
     startWithNewLine: false,
     title: "Your Email",
     isRequired: true,
     validators: [
      {
       type: "email"
      }
     ],
     inputType: "email",
     placeHolder: "emailmadewhenIwas14@regrets.com"
    },
    {
     type: "text",
     name: "theirCompany",
     width: "33%",
     title: "Their Company",
     commentText: "WHAT IS THIS?",
     isRequired: true,
     placeHolder: "Awesome LLC"
    },
    {
     type: "text",
     name: "theirName",
     width: "33%",
     startWithNewLine: false,
     title: "Their Name",
     commentText: "WHAT IS THIS?",
     isRequired: true,
     placeHolder: "Bill Jobs-Gates"
    },
    {
     type: "text",
     name: "theirEmail",
     width: "33%",
     startWithNewLine: false,
     title: "Their Email",
     isRequired: true,
     validators: [
      {
       type: "email"
      }
     ],
     inputType: "email",
     placeHolder: "boringemailaddress@company.com"
    },
    {
     type: "comment",
     name: "theirAbout",
     placeHolder: "They want to pay you a millionny dollars an hour to look at cat videos!",
     title: "What's the inside info?"
    }
   ],
   title: "You are my new best friend.",
   visible: false,
   visibleIf: "{getGit} = 1"
  },
  {
   name: "page_justGit",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "html",
     name: "justGit",
     html: "<h3>And good luck.</h3><p>Psst.  Click the link.</p><a target=\"_blank\" href=\"\">Here's the git</a>"
    }
   ],
   title: "May the Code be with You.",
   visible: false,
   visibleIf: "{getGit} = 2"
  },
  {
   name: "page_endForYou",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "html",
     name: "endForYou",
     html: "<h3>This is sort of the end of the line for you then.</h3>"
    }
   ],
   title: "Okay. Well...",
   visible: false,
   visibleIf: "{wantGit} = 2"
  },
  {
   name: "page_timeTravel",
   questions: [
    {
     type: "radiogroup",
     name: "timeTravel",
     title: "You are a time traveler looking to assemble a rag tag crew, and needing a lovable roguish jack of all trades to be the heart and glue that holds the team together?",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "I can't believe you figured it out in 3 guesses!  I could use a clairvoyant to help save the world."
      },
      {
       value: "2",
       text: "Nope. Also, isn't the purpose of this survey to get a job?  You're kind of an idiot."
      }
     ],
     otherText: "other"
    }
   ],
   title: "Oh, I know why you are here.",
   visible: false,
   visibleIf: "{stumble} = 2"
  },
  {
   name: "page_likeSurveys",
   questions: [
    {
     type: "radiogroup",
     name: "likeSurveys",
     title: "Tell the truth.  This is a \"safe space\".",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Yes.  They are my Nuke!* "
      },
      {
       value: "2",
       text: "No.  Give up, yet?"
      }
     ],
     otherText: "other"
    },
    {
     type: "html",
     name: "nuke",
     html: "<p>*Warning:  Nerd Alert! \"Nuke\" is the fictional drug from RoboCop 2.</p>"
    }
   ],
   title: "Do you just really like doing random surveys?",
   visible: false,
   visibleIf: "{timeTravel} = 2"
  },
  {
   name: "page_surveySites",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "html",
     name: "likeSurveys",
     html: "<h3>This is just one survey, and will probably not quench your survey thirst.</h3><p>So, here is a list of survey sites to tide you over.</p>\n<ul>\n<li><a href=\"http://www.dumb.com/polls\">Dumb</a></li>\n<li><a href=\"http://tjshome.com/survey/takesurvey.php?id=13537\">TJ's Home</a></li>\n<li><a href=\"http://www.quibblo.com/take/survey\">Quibblo</a></li>\n<li><a href=\"https://www.quotev.com/surveys/Fun\">Quotev</a></li>\n<li><a href=\"http://www.quizopplis.com\">Quizopolis</a></li>\n<li><a href=\"http://weirdpoll.com\">Weird Poll</a></li>\n<li><a href=\"http://www.wonderpolls.com\">Wonder Polls</a></li>\n\n</ul>"
    }
   ],
   title: "Okay, well...",
   visible: false,
   visibleIf: "{likeSurveys} = 1"
  },
  {
   name: "page_cryingOutLoud",
   questions: [
    {
     type: "html",
     name: "cryingOutLoad",
     html: "<h3>Just tell me.  Tell me.</h3>"
    },
    {
     type: "text",
     name: "yourName",
     width: "50%",
     title: "Your Name",
     commentText: "WHAT IS THIS?",
     isRequired: true,
     placeHolder: "Mary Q. Contrarian"
    },
    {
     type: "text",
     name: "yourEmail",
     width: "50%",
     startWithNewLine: false,
     title: "Your Email",
     isRequired: true,
     validators: [
      {
       type: "email"
      }
     ],
     inputType: "email",
     placeHolder: "emailmadewhenIwas14@regrets.com"
    },
    {
     type: "comment",
     name: "question21",
     placeHolder: "I have to know!",
     title: "Please, just tell me why you are here."
    }
   ],
   title: "Oh, for crying out loud!",
   visible: false,
   visibleIf: "{likeSurveys} = 2"
  },
  {
   name: "page_imIn",
   questions: [
    {
     type: "html",
     name: "imInInstructions",
     html: "<p>Reach out and give me the deets of when, where, and do I need a jacket?</p>"
    },
    {
     type: "text",
     name: "userName",
     width: "50%",
     title: "Your Name",
     commentText: "WHAT IS THIS?",
     isRequired: true,
     placeHolder: "Come with me, if you want to live."
    },
    {
     type: "text",
     name: "userEmail",
     width: "50%",
     startWithNewLine: false,
     title: "Your Email",
     isRequired: true,
     validators: [
      {
       type: "email"
      }
     ],
     inputType: "email",
     placeHolder: "cher@aol.com"
    },
    {
     type: "comment",
     name: "userComment",
     placeHolder: "I've never been a fan of Cold Play, if my input is under consideration.",
     title: "What part of history needs to be changed?"
    }
   ],
   title: "I'm in!",
   visible: false,
   visibleIf: "{timeTravel} = 1"
  },
  {
   name: "page_emailReferal",
   navigationButtonsVisibility: "iherit",
   questions: [
    {
     type: "html",
     name: "emailInstructions",
     html: "<h3>You know what to do.</h3>\n<p>Assuming that you're not a Platypus and never seen the internet before.</p>\n</br>\n<p>I sincerely apologize to all Platypus enthusiasts out there who are offended by that thoughtless comment about the ineptitude of the Platypi. I respect the noble Platypus, and it is not my intention to slight these stupid creatures in any way. Thank you again.**</p>\n"
    },
    {
     type: "text",
     name: "userCompany",
     width: "33%",
     title: "Your Company (if applicable)",
     commentText: "WHAT IS THIS?",
     placeHolder: "The Best Inc"
    },
    {
     type: "text",
     name: "userName",
     width: "33%",
     startWithNewLine: false,
     title: "Your Name",
     commentText: "WHAT IS THIS?",
     isRequired: true,
     placeHolder: "Keyser Soze"
    },
    {
     type: "text",
     name: "userEmail",
     width: "33%",
     startWithNewLine: false,
     title: "Your Email",
     isRequired: true,
     validators: [
      {
       type: "email"
      }
     ],
     inputType: "email",
     placeHolder: "emailmadewhenIwas14@regrets.com"
    },
    {
     type: "text",
     name: "theirCompany",
     width: "33%",
     title: "Their Company",
     commentText: "WHAT IS THIS?",
     isRequired: true,
     placeHolder: "Awesome LLC"
    },
    {
     type: "text",
     name: "theirName",
     width: "33%",
     startWithNewLine: false,
     title: "Their Name",
     commentText: "WHAT IS THIS?",
     isRequired: true,
     placeHolder: "Bill Jobs-Gates"
    },
    {
     type: "text",
     name: "theirEmail",
     width: "33%",
     startWithNewLine: false,
     title: "Their Email",
     isRequired: true,
     validators: [
      {
       type: "email"
      }
     ],
     inputType: "email",
     placeHolder: "boringemailaddress@company.com"
    },
    {
     type: "comment",
     name: "theirAbout",
     placeHolder: "They want to pay you a millionny dollars an hour to index all the cat videos on the internet!",
     title: "What's the inside info?"
    },
    {
     type: "html",
     name: "godAmongInsects",
     html: "<p>*X-Men quote.  No big deal.</p>\n<p>**An apt apprehensive, and partially alliterate, unapologetic appropriation of the \"Platypi Apology.\"</p>"
    }
   ],
   title: "\"You are a god among insects.\"*",
   visible: false,
   visibleIf: "{goodDeed} = 1"
  }
 ],
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