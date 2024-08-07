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

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"KPZPrbWYcKsWyJrhyIgQB4M8CeqU8HI3BeDP2lm73lI="},"public":{"type":"Buffer","data":"QDKlpOQd1p+sKqNJEHR+YS+FHetGgm1xf4mTKPYVNDA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"iKlztwQe2pT89nQjHnsV1ssFlTM2Cw9NSPp2j8Q6dnU="},"public":{"type":"Buffer","data":"QMeTIoB3YIigy7oIqUhouHTh5rLLvlNRKH2J6/6a9y4="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"EJCfeCSERqqbYtb7x7TzWru4uG5OB+n/bLAPMGyb7VM="},"public":{"type":"Buffer","data":"cVfFickwWac820sJVA0RZXrlhDI/PYSzf67nuigf4ks="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"cNJs0qEcYUUPf5oRyb9fMqi/SNyBHQ27/GrqlfaG6kg="},"public":{"type":"Buffer","data":"tiiSM3Xq6ujKI1sCp67F4/jwcZm60Tx3xeLSJcRmpBQ="}},"signature":{"type":"Buffer","data":"p5ebrEbFicXonwCMXC9ksd7EQs+zwMRcN1mInt+d7lDv55eNmOxxJO5C4f3H57n0mfprWIZT0qxbep3efm6/Aw=="},"keyId":1},"registrationId":80,"advSecretKey":"EWzbpq8sVdaMfYeDX1628QGGeg5lBza1ycw0XmcZNac=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"oMglY0ACTz24dZApo14qog","phoneId":"d4ed4a7d-410e-411b-b6ab-e2935ca5287a","identityId":{"type":"Buffer","data":"8PeqpEYsEDFKMu6aGn0PuschftU="},"registered":true,"backupToken":{"type":"Buffer","data":"NsG7+NeXOtLSKwwJjbL0wp5taj0="},"registration":{},"pairingCode":"V7Y89M1S","me":{"id":"2348160835852:39@s.whatsapp.net"},"account":{"details":"CLml0doEELzgy7UGGAEgACgA","accountSignatureKey":"givXpUWjmMN+L/j9fkDk5ewalNeJpj7/X0gCZsztezk=","accountSignature":"g03qIBJWdIfRZRBhq5mEoP9WnzXAxprslhsTp+yiHj2hcMKAxs4+ndsfq7UEiTnBm9k0dNMEbyb6whysJL+uDA==","deviceSignature":"sDfpG/+PApcCcGoNVH6iYp/gP27yGOWALkSXJINw+uObzznbOglNEf4NKDiOFVd/dBrERz7x9JPMrdM4KKjsCA=="},"signalIdentities":[{"identifier":{"name":"2348160835852:39@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BYIr16VFo5jDfi/4/X5A5OXsGpTXiaY+/19IAmbM7Xs5"}}],"platform":"android","lastAccountSyncTimestamp":1723002952}`
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
