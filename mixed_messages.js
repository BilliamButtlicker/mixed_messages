const msgFactory = (msg='', good=true) => {
    return {
        message: msg,
        good: good
    }

}

const goodMsg = () => {
    i = Math.floor(Math.random()*10);
    switch (i) {
        case 0: 
            return '';
        case 1: 
            return '';
        case 2: 
            return '';
        case 3: 
            return '';
        case 4: 
            return '';
        case 5: 
            return '';
        case 6: 
            return '';
        case 7: 
            return '';
        case 8: 
            return '';
        case 9: 
            return '';
        
    }
}

// proobably better to create a permanent array to choose from rather than including the actual sentance in the function logic.
const badMsg = () => {
    i = Math.floor(Math.random()*10);
    switch (i) {
        case 0: 
            return '';
        case 1: 
            return '';
        case 2: 
            return '';
        case 3: 
            return '';
        case 4: 
            return '';
        case 5: 
            return '';
        case 6: 
            return '';
        case 7: 
            return '';
        case 8: 
            return '';
        case 9: 
            return '';
        
    }
}

const goodOrBad = () => {
    let gb = (Math.floor(Math.random()*2));
    gb < 1 ? msgFactory(goodMsg(),true) : msgFactory(badMsg(),false);
}

const firstMsg = () => {
    let msg = Array.from(goodOrBad().message);
    msg.pop();
    msg.push(', ')
    return msg.join('');
}

//TODO: test msg creation logic works
const generateMessage = () => {
    let fullMsg = '';
    let fMsg = firstMsg();
    let sMsg = secondMsg();
    let conj = '';

    (fMsg.good == sMsg.good) ? conj = ' and ' : conj = ', but ';

    fullMsg = statement() + fMsg.message + conj + sMsg;
    console.log(fullMsg);
}

