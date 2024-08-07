const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = ["2348160835852"];
global.OwnerNumber = ["2348160835852"];
global.ownertag = ["2348160835852"]; 
global.OwnerName =  "Blurr-Sama";
global.BotName = "Blurr-V2";
global.packname = "Blurr-Sama";                             //Do not change.
global.author = "Blurr";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://whatsapp.com/channel/0029VaF5BGC90x2r7DQY1T0b"; 
global.SupportGroupLink = "https://whatsapp.com/channel/0029VaF5BGC90x2r7DQY1T0b"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2348160835852"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"CBxOWvYgD21+dndxaQh6UmCld7w3/O1ku9RvsAfjrFs="},"public":{"type":"Buffer","data":"0qzl3myh8Vv4/KFQnosvbuuvVqeP+kYncfVVpmhp4zQ="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"kEYXHnn7CvRMXzDi0qw8ZZy1Dp56f+GB/YVfVIclKHw="},"public":{"type":"Buffer","data":"i4ojljFhTGgYVRJYAKLieOvoqbjjA2M8+ndvEHrlLT4="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"mDbrjcyQvx68orE5T1ftE2VOyZajT3+RN0GCLnRlKXU="},"public":{"type":"Buffer","data":"kebCmIcdeK57Kcj2sNzSWSVycC6tTrgyu9OUt5UYsXY="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"iLmbdTVxxtQb5uvcLWPnf9H9YSspn5lkE4of+cg4xlM="},"public":{"type":"Buffer","data":"qWrM8eg4z0NQyU0IUZayyuSUw9vV9/jLFDP/D1KwOnw="}},"signature":{"type":"Buffer","data":"18TyY+yYn8kHuYOxSK+4R+44GbMETNVdJPQmizTfq9owBQ1yMyjgR+8S0Cl11K0n6jkuz3xF3q6Emzti92ofAg=="},"keyId":1},"registrationId":239,"advSecretKey":"nhHGb8cegPI2reVCdwmPdkJaWf0PLy8rQGVSZhvWMu0=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"x0Vb2kEqTACNHdKGLTVo6A","phoneId":"3f5fc440-274d-4751-af22-cc47c8191c1b","identityId":{"type":"Buffer","data":"m0tgstoGZL0yFGZ9ctXZt2s38Eo="},"registered":true,"backupToken":{"type":"Buffer","data":"9jtHQRd2BwD3hfw9eguxBuwExqE="},"registration":{},"pairingCode":"YKE7JW5R","me":{"id":"2348160835852:40@s.whatsapp.net"},"account":{"details":"CLql0doEEIaJzbUGGAEgACgA","accountSignatureKey":"givXpUWjmMN+L/j9fkDk5ewalNeJpj7/X0gCZsztezk=","accountSignature":"gN84VCGHbgJmgaTNcyoGLivmv+SQuXPuapAj3KqHqMYq9eWZ+o8nff8qib6Cw7JPIIg9CXJgRt2Qf+XNIFpFBg==","deviceSignature":"lQnHUtqhTu9ksacXDgucQt/mynyhscqg49XNT9vI3xTj5K5ztrRrv78unc1yKYWbb4lOJSjRnPSmoHcMD/8VDA=="},"signalIdentities":[{"identifier":{"name":"2348160835852:40@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BYIr16VFo5jDfi/4/X5A5OXsGpTXiaY+/19IAmbM7Xs5"}}],"platform":"android","lastAccountSyncTimestamp":1723024549}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
