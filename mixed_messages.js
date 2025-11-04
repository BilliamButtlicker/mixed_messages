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

const generateMessage = () => {
    let fullMsg = '';
    fullMsg = statement() + firstMsg() + secondMsg();
    console.log(fullMsg);
}

