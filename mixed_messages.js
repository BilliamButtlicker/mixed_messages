// arrays of statements and messages to pull from
const statements = ['The scarecrows are watching.'];
const goodMessages = ['You will find what you didn\'t need.'];
const badMessages = ['You will wish you hadn\'t.'];


// Factory function for building message objects
const msgFactory = (msg='', gb=true) => {
    return {
        message: msg,
        good: gb
    }

}

// returns a random 'good' message
const goodMsg = () => {
    let i = Math.floor(Math.random()*goodMessages.length);
    return goodMessages[i];
}

// returns a random 'bad' message
const badMsg = () => {
    let i = Math.floor(Math.random()*badMessages.length);
    return badMessages[i];
}

// selects a good or bad message randomly and sends it to the factory.
const goodOrBad = () => {
    let gb = (Math.floor(Math.random()*2));
    return gb < 1 ? msgFactory(goodMsg(),true) : msgFactory(badMsg(),false);
}

// selects a random statement
const statement = () => {
    let i = Math.floor(Math.random()*statements.length);
    return statements[i];
}

// builds the first message and replaces the punctuation with a comma.
const firstMsg = () => { 
    let msg = goodOrBad();
    let punct = Array.from(msg.message);
    
    punct.pop();

    msg.message = punct.join('');
    return msg;
}

// builds the second message and de-capitalises it.
const secondMsg = () => {
    let msg = goodOrBad();

    msg.message = msg.message.toLowerCase();

    return msg;
}


// Works! need to make sure the two messages are not identical though. Need to check this before the messages are modified... maybe add an id or key to each message.
const generateMessage = () => {
    let fullMsg = '';
    let state = statement();
    let fMsg = firstMsg();
    let sMsg = secondMsg();
    let conj = '';

    while (sMsg.message == fMsg.message)

    (fMsg.good == sMsg.good) ? conj = ' and ' : conj = ', but ';

    fullMsg = state + ' ' + fMsg.message + conj + sMsg.message;
    console.log(fullMsg);
}

generateMessage();