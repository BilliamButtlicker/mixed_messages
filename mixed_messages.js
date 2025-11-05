const goodMessages = [];
const badMessages = [];
const statements = [];

const msgFactory = (msg='', good=true) => {
    return {
        message: msg,
        good: good
    }

}

const goodMsg = () => {
    i = Math.floor(Math.random()*goodMessages.length);
    return goodMessages[i];
}

const badMsg = () => {
    i = Math.floor(Math.random()*badMessages.length);
    return badMessages[i];
}

const goodOrBad = () => {
    let gb = (Math.floor(Math.random()*2));
    gb < 1 ? msgFactory(goodMsg(),true) : msgFactory(badMsg(),false);
}

const firstMsg = () => { 
    let msg = goodOrBad();
    let conj = '';

    let punct = Array.from(msg.message);
    
    punct.pop();
    punct.push(', ');

    msg.message = punct.join('');
}

const secondMsg = () => {
    let msg = Array.from(goodOrBad().message)
}

//TODO: test msg creation logic works
const generateMessage = () => {
    let fullMsg = '';
    let fMsg = firstMsg();
    let sMsg = secondMsg();
    let conj = '';

    (fMsg.good == sMsg.good) ? conj = ' and ' : conj = ', but ';

    fullMsg = statement() + fMsg.message + conj + sMsg.message;
    console.log(fullMsg);
}

