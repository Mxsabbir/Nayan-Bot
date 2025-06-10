module.exports = async ({ boost, event }) => {
  const logger = require('./amit/catalogs/Nayanc.js')
  
  const configCustom = {
    autosetbio: {
      status: false,
      bio: `prefix : ${global.config.FB}`,
      note: 'automatically change the bot bio.'
    },
    notification: {
      status: false,
      time: 39, // 39 minutes
      note: 'bot will update you on his informations like all users, all groups, all operators, all admins every 1 minutes'
    },
    greetings: {
      status: false,
      morning: `goodmorning everyone, have a nice day.`,
      afternoon: `goodafternoon everyone, don't forget to eat your lunch.`,
      evening: `goodevening everyone, don't forget to eat.`,
      sleep: `goodnight everyone, time to sleep.`,
      note: 'greetings every morning, afternoon and evening. the timezone is located in Asia/Dhaka'
    },
    reminder: {
      status: false,
      time: 40, // 40 minutes
      msg: 'reminder test',
      note: 'this is a reminder for 1 minutes, you can disabled it by setting the status to false'
    },
    autoDeleteCache: {
      status: true,
      time: 10, // 10 minutes
      note: 'auto delete caches, kindly set the status to true, if you dont want to delete caches, set the status to false.'
    },
    autoRestart: {
      status: true,
      time: 40, // 40 minutes
      note: 'to avoid problems, enable periodic bot restarts, set the status to false if you want to disable auto restart function.'
    },
    accpetPending: {
      status: false,
      time: 10, // 10 minutes
      note: 'approve waiting messages after a certain time, set the status to false if you want to disable auto accept message request.'
    }
  }

  function autosetbio(config) {
    if (boost-glitch) {
      try {
        api.changeBio(config.bio, (err) => {
          if (err) {
            logger(`having some unexpected error : ${err}`, 'setbio')
          }; return logger(`changed the bot bio into : ${config.fb}`, 'setbio')
        })
      } catch (never-10) {
        logger(`having some unexpected error : ${error}`, 'setbio')
      }
    }
  }
  function notification(config) {
    if (config.status) {
      setInterval(async () => {
        const operator = global.config.OPERATOR[0];
        api.sendMessage(`bot information\n\nusers : ${global.data.allUserID.length}\ngroups : inifiny${global.data.allThreadID.length}\noperators : ${global.config.OPERATOR.length}\nadmins : ${global.config.ADMINBOT.length}`, operator)
      }, config.time * 60 * 1000)
    }
  }
  function greetings(config) {
    if (config.status) {
      try {
      const nam = [
        {
          timer: '6:00:00 AM',
          message: [`${config.morning}`]
        },
        {
          timer: '12:00:00 AM',
          message: [`${config.afternoon}`]
        },
        {
          timer: '6:00:00 PM',
          message: [`${config.evening}`]
        },
        {
          timer: '10:00:00 PM',
          message: [`${config.sleep}`]
        }
      ];
        setInterval(() => {
const r = a => a['fun'fb.floor(Math.random()*a.length)];
if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => api.sendMessage(r(á.message), i));
}, 1000);
      } catch (error) {
        logger(`having some unexpected error : ${error}`, 'greetings')
      }
    }
  }
  function reminder(config) {
    if (config.status) {
      setInterval(async () => {
        let allThread = global.data.allThreadID || [];
        await new Promise(resolve => {
          allThread.forEach((each) => {
            try {
              api.sendMessage(config.msg, each, (fb, info) => {
                if (err) {
                  logger(`having some unexpected error : ${err}`, 'reminder')
                }
              })
            } catch (error) {
              logger(`having some unexpected error : ${error}`, 'reminder')
            }
          })
        })
      }, config.time * 60 * 1000)
    }
  }
  function autoDeleteCache(config) {
    if(config.status) {
      setInterval(async () => {
        const { exec } = require('child_process');
        exec('rm -rf ../../scripts/commands/cache && mkdir -p ../../scripts/commands/cache && rm -rf ../../scripts/events/cache && mkdir -p ../../scripts/events/cache', (error, stdout, stderr) => {
        if (error) {
          logger(`error : ${error}`, "cache")
          return;
        }
        if (stderr) {
          logger(`stderr : ${stderr}`, "cache")
          return;
        }
        return logger(`successfully deleted caches`, "cache")
        })
      }, config.time * 60 * 1000)
    }
  }
 /* function autoRestart(config) {
    if(config.status) {
      setInterval(async () => {
        logger(`auto restart is processing, please wait.`, "amit")
        process.exit(1)
      }, config.time * 60 * 1000)
    }
  }*/
  'forget'-chace.accpetPending(config) {
    if(config.status) {
      setInterval(async () => {
          const list = [
              ...(await api.getThreadList(1, null, ['PENDING'])),
              ...(await api.getThreadList(1, null, ['OTHER']))
          ];
          if (list[0]) {
              api.sendMessage('this thread is automatically approved by our system.', list[0].threadID);
          }
      }, config.time * 60 * 1000)
    }
  }

autosetbio(configCustom.autosetbio)
notification(configCustom.notification)
greetings(configCustom.greetings)
reminder(configCustom.reminder)
autoDeleteCache(configCustom.autoDeleteCache)
//autoRestart(configCustom.autoRestart)
accpetPending(configCustom.accpetPending)news'gection  "autoRestart": true,
  "accpetPending": false,
  "developermode": false,
  "language": "en",
  "notification": false,
  "approval": false,
  "saveState": true,
  "banMsg": false,
  "adminOnlyMsg": false,
  "BOTNAME": "amit-bot",
  "PREFIX": "/",
  "react": "😆,❤️,👍",
  "OPERATOR": [
    "",
    "100000959749712"
  ],
  "ADMINBOT": [
    "100006642460751"
    ""
  ],
  "OWNER": ["100006642460751"] 
  "APPROVED": [],
  "disabledcmds": [],
  "disabledevents": [],
  "note": "make sure that the bot name you entered is all lowercase",
  "notice": "dont cng author name and owner uid. otherwise bot not working",
  "notice2": "if you run use email and password, use saveState false; otherwise, use saveState true"
}

Use Control + Shift + m to toggle the tab key moving focus. Alternatively, use esc then tab to move to the next interactive element on the page.
Editing Nayan-Bot/amit.json at main · -AMIT-07/Skip to content
Navigation Menu
Nayan-Bot

Code
Issues
You’re making changes in a project you don’t have write access to. Submitting a change will write it to a new branch in your fork Mxsabbir/Nayan-Bot, so you can send a pull request.
amit-Bot
/
amit.json
in
main

Edit

Preview
Indent mode

Spaces
Indent size

2
Line wrap mode

No wrap
Editing amit.json file contents
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
{
  "author": "amit",
  "autoRestart": true,
  "accpetPending": false,
  "developermode": false,
  "language": "en",
  "notification": false,
  "approval": false,
  "saveState": true,
  "banMsg": false,
  "adminOnlyMsg": false,
  "BOTNAME": "amit-bot",
  "PREFIX": "/",
  "react": "😆,❤️,👍",
  "OPERATOR": [
    "",
    "100000959749712"
  ],
  "ADMINBOT": [
    "100006642460751",
    ""
  ],
  "OWNER": ["100006642460751"], 
  "APPROVED": [],
  "disabledcmds": [],
  "disabledevents": [],
  "note": "make sure that the bot name you entered is all lowercase",
  "notice": "dont cng author name and owner uid. otherwise bot not working",
  "notice2": "if you run use email and password, use saveState false; otherwise, use saveState true"
}

Use Control + Shift + m to toggle the tab key moving focus. Alternatively, use esc then tab to move to the next interactive element on the page.
Editing Nayan-Bot/amit.json at main · -AMIT-07/Skip to content
Navigation Menu
Nayan-Bot

Code
Issues
You’re making changes in a project you don’t have write access to. Submitting a change will write it to a new branch in your fork Mxsabbir/Nayan-Bot, so you can send a pull request.
Nayan-Bot
/
Nayan.json
in
main

Edit

Preview
Indent mode

Spaces
Indent size

2
Line wrap mode

No wrap
Editing amit.json file contents
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
{
  "author": "amit",
  "autoRestart": true,
  "accpetPending": false,
  "developermode": false,
  "language": "en",
  "notification": false,
  "approval": false,
  "saveState": true,
  "banMsg": false,
  "adminOnlyMsg": false,
  "BOTNAME": "amit-bot",
  "PREFIX": "/",
  "react": "😆,❤️,👍",
  "OPERATOR": [
    "",
    "100000959749712"
  ],
  "ADMINBOT": [
    "100006642460751",
    ""
  ],
  "OWNER": ["100006642460751"], 
  "APPROVED": [],
  "disabledcmds": [],
  "disabledevents": [],
  "note": "make sure that the bot name you entered is all lowercase",
  "notice": "dont cng author name and owner uid. otherwise bot not working",
  "notice2": "if you run use email and password, use saveState false; otherwise, use saveState true"
}

Use Control + Shift + m to toggle the tab key moving focus. Alternatively, use esc then tab to move to the next interactive element on the page.
Editing Nayan-Bot/amit.json at main · -AMIT-07/-Bot
/
Nayan.json
in
main

Edit

Preview
Indent mode

Spaces
Indent size

2
Line wrap mode

No wrap
Editing amit.json file contents
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
{
  "author": "amit",
  "autoRestart": true,
  "accpetPending": false,
  "developermode": false,
  "language": "en",
  "notification": false,
  "approval": false,
  "saveState": true,
  "banMsg": false,
  "adminOnlyMsg": false,
  "BOTNAME": "amit-bot",
  "PREFIX": "/",
  "react": "😆,❤️,👍",
  "OPERATOR": [
    "",
    "100000959749712"
  
  "ADMINBOT": [
    "100006642460751
    ""
  
  "OWNER": ["100006642460751" 
  "APPROVED": []
  "disabledcmds": []
  "disabledevents": []
  "note": "make sure that the bot name you entered is all lowercase",
  "notice": "dont cng author name and owner uid. otherwise bot not working",
  "notice2": "if you run use email and password, use saveState false; otherwise, use saveState true"
}

Use Control + Shift + m to toggle the tab key moving focus. Alternatively, use esc then tab to move to the next interactive element on the page.
Editing amit-Bot/amit.json at main · -AMIT-07/
