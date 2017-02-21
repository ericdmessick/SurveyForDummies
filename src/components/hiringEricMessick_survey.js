import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';
//must import images with create-react-app

var surveyJSON = {
 clearInvisibleValues: true,
 completedHtml: "<div class=\"results_container\">\n<h1>Congrats!</h1>\n<h2>You finished the survey.</h3>\n</br>\n<h4>If you provided an employment lead,</br>Thank you!</h4>\n<p>I promise you, I won't let your information go to waste.  I will reach out shortly.*</p>\n<p>In the mean time, wanna have some fun?</p>\n<p>Take the survey again. Play around.**</p>\n<a href=\"javascript:history.go(0);\">Click to retake Survey for Dummies.</a>\n<p class=\"footnote\"  style=\"margin-bottom: 2px;\">*I'll probably wait <strong>48 hours</strong>, as to not look desperate, though.</p>\n<p class=\"footnote\">**Hint: Pretend <i>not</i> to be an interested employer.  Answer <i>No</i> as much as possible.</p>\n</br>\n<h4>To the participants who did not provide a lead, or were not employers, recruiters, or the like:</h4>\n<p>You can retake the survey too.*</p>\n<p><i>Pretend</i> to be an employer, if you're not.</p>\n<p>Just please don't send me a false lead at the end.  That's just mean, not to mention awkward for everyone, since I <strong>will</strong> email them and claim you as the referral.</p>\n<a href=\"javascript:history.go(0);\">Click to retake Survey for Dummies.</a>\n<p class=\"footnote\">*I'm just assuming you are a coder who wants to see how things work</p>\n</div>",
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
       text: "Yes. Yes I am!"
      },
      {
       value: "2",
       text: "Close.  I work directly for a company and am in a position to bend the boss's ear."
      },
      {
       value: "3",
       text: "I am a recruiter, looking for qualified individuals such as yourself."
      },
      {
       value: "4",
       text: "Nope.  Not a hiring manager or a recruiter."
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
     title: "A candidate who knows HTML5, CSS3, Javascript, JQuery, Wordpress, Node, React, Git, Photoshop, and...",
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
   title: "And are you looking for:",
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
     title: "...who is hungry to learn more?!",
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
   title: "And...",
   visible: false,
   visibleIf: "{knownLanguages} = 1"
  },
  {
   name: "page_youreAWinner",
   questions: [
    {
     type: "html",
     html: "<div class=\"results_container\"><h3>Not that I'm a prize pig...</h3><p>But, this is exactly the foot-in-the-door I am looking for.</p>",
     name: "youreAWinner"
    },
    {
     type: "text",
     name: "userName",
     width: "50%",
     title: "Your Name",
     commentText: "WHAT IS THIS?",
     isRequired: true,
     placeHolder: "Mary Q. Contrarian"
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
     placeHolder: "boringNameEmail@company.com"
    },
    {
     type: "comment",
     name: "userComment",
     title: "What's the inside info?",
     placeHolder: "You want to pay you a millionny dollars an hour to index all the cat videos on the internet!"
    },
    {
     type: "html",
     html: "<p class=\"footnote\">*Quote from the 5th Element.  No big deal</p>\n</div>",
     name: "finePrint"
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
     name: "neededLanguages",
     title: "What languages, frameworks, or libraries do you need?",
     isRequired: true,
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
     otherText: "Other",
     storeOthersAsComment: false
    },
    {
     type: "comment",
     name: "inputLanguages",
     visible: false,
     visibleIf: "{neededLanguages} contains 19",
     title: "Other languages, frameworks, or libraries?",
     rows: 3,
     placeHolder: "Qapla'  (thats Klingon for \"Success!\")"
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
     html: "<h3>I appreciate you letting me know what you need.</h3>\n<p>I use that last question to get a better consensus of what languages, frameworks, and libraries employers are looking for.  Then, I tailor my training accordingly.</p><p>When I am not working, I take courses on Udemy, Codecademy, and Code School, in conjunction with the documentation available on the developer's sites.  Typically, I try to create a project that allows me to flex my new muscles, and then submit them to other developer's for feedback.</p><p>Tell you what, check back in a few months.  <strong>I may surprise you.</strong></p>",
     name: "checkBack"
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
     html: "<h3>Now, look at this kitten and think about your soul.</h3>",
     name: "noGoodKitten"
    },
    {
     type: "html",
     html: "<img src='https://surveyfordummies.herokuapp.com/kittens/cuteKitten01.jpg' />\n</br>",
     name: "kitten"
    },
    {
     type: "rating",
     isRequired: true,
     name: "guiltKitten",
     rateValues: [
      {
       value: "1",
       text: "I'm allergic."
      },
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      {
       value: "9",
       text: "Bastet, forgive me."
      }
     ],
     title: "On a scale from 1 to 9, how guilty does this kitty make you feel?"
    },
    {
     type: "html",
     html: "<h3>Oh, you're one of those \"dog people\", aren't ya?.</h3>",
     name: "noGoodPuppy",
     visible: false,
     visibleIf: "{guiltKitten} < 5"
    },
    {
     type: "html",
     html: "<img src='https://surveyfordummies.herokuapp.com/puppies/cutePuppy01.jpg' />\n</br>",
     name: "noGoodPuppy",
     visible: false,
     visibleIf: "{guiltKitten} < 5"
    },
    {
     type: "rating",
     isRequired: true,
     name: "guiltPuppy",
     rateValues: [
      {
       value: "1",
       text: "I like snakes."
      },
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      {
       value: "9",
       text: "Crying into a tub of ice cream."
      }
     ],
     title: "Can you seriously not hear Sarah Mclachlan singing right now?",
     visible: false,
     visibleIf: "{guiltKitten} < 5"
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
     html: "<h3>First, click the link.</h3><p>But then, come right back and finish 'cause I didn't Javascript this piece.</p><a target=\"_blank\" href=\"\">To the GitHub</a>",
     name: "gitLink"
    },
    {
     type: "html",
     html: "<h3>Then, give send me the 411.</h3>",
     name: "question9"
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
     placeHolder: "emailMadeWhenIWas14@regrets.com"
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
     placeHolder: "boringEmailAddress@company.com"
    },
    {
     type: "comment",
     name: "theirAbout",
     title: "What's the inside info?",
     placeHolder: "They want to pay you a millionny dollars an hour to look at cat videos!"
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
     html: "<h3>And good luck.</h3><p>Psst.  Click the link.</p><a target=\"_blank\" href=\"\">Here's the git</a>",
     name: "justGit"
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
     html: "<div class=\"results_container\"><h3>This is sort of the end of the line for you then.</h3></div>",
     name: "endForYou"
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
     html: "<p class=\"footnote\">*Warning:  Nerd Alert! \"Nuke\" is the fictional drug from RoboCop 2.</p>",
     name: "nuke"
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
     html: "<div class=\"results_container\">\n<h3>This is just one survey, and will probably not quench your survey thirst.</h3><p>So, here is a list of survey sites to tide you over.</p>\n<ul>\n<li><a href=\"http://www.dumb.com/polls\">Dumb</a></li>\n<li><a href=\"http://tjshome.com/survey/takesurvey.php?id=13537\">TJ's Home</a></li>\n<li><a href=\"http://www.quibblo.com/take/survey\">Quibblo</a></li>\n<li><a href=\"https://www.quotev.com/surveys/Fun\">Quotev</a></li>\n<li><a href=\"http://www.quizopplis.com\">Quizopolis</a></li>\n<li><a href=\"http://weirdpoll.com\">Weird Poll</a></li>\n<li><a href=\"http://www.wonderpolls.com\">Wonder Polls</a></li>\n\n</ul>\n</div>",
     name: "likeSurveys"
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
     html: "<h3>Just tell me.  Tell me.</h3>",
     name: "cryingOutLoad"
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
     placeHolder: "emailMadeWhenIWas14@regrets.com"
    },
    {
     type: "comment",
     name: "question21",
     title: "Please, just tell me why you are here.",
     placeHolder: "I have to know!"
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
     html: "<p>Reach out and give me the deets of when, where, and do I need a jacket?</p>",
     name: "imInInstructions"
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
     title: "What part of history needs to be changed?",
     placeHolder: "I've never been a fan of Cold Play, if my input is under consideration."
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
     html: "<h3>You know what to do.</h3>\n<p>Assuming that you're not a Platypus and never seen the internet before.</p>\n</br>\n<p>I sincerely apologize to all Platypus enthusiasts out there who are offended by that thoughtless comment about the ineptitude of the Platypi. I respect the noble Platypus, and it is not my intention to slight these stupid creatures in any way. Thank you again.**</p>\n",
     name: "emailInstructions"
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
     placeHolder: "emailMadeWhenIWas14@regrets.com"
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
     placeHolder: "boringEmailAddress@company.com"
    },
    {
     type: "comment",
     name: "theirAbout",
     title: "What's the inside info?",
     placeHolder: "They want to pay you a millionny dollars an hour to index all the cat videos on the internet!"
    },
    {
     type: "html",
     html: "<p class=\"footnote\"  style=\"margin-bottom: 2px;\">*X-Men quote.  No big deal.</p>\n<p class=\"footnote\">**An apt apprehensive, and partially alliterate, unapologetic appropriation of the \"Platypi Apology.\"</p>",
     name: "godAmongInsects"
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