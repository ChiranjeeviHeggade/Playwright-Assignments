/* if-elseif-else statement*/

function launchBrowser(browserName) {
    if (browserName === 'chrome') {
        console.log("Supported Browser - ", browserName);
    }
    else if (browserName === 'firefox') {
        console.log("Supported Browser - ", browserName);
    }
    else if (browserName === 'edge') {
        console.log("Supported Browser - ", browserName);
    }
    else if (browserName === 'opera') {
        console.log("Supported Browser - ", browserName);
    }
    else {
        console.log("Non-Supported Browser - ", browserName);
    }
}
launchBrowser('chrome')

console.log('**********');
/* switch statement*/

function runTests(testType) {
    switch (testType) {
        case 'e2e':
            console.log("Test to be Performed - ", testType);
            break;
        case 'sanity':
            console.log("Test to be Performed - ", testType);
            break;
        case 'regression':
            console.log("Test to be Performed - ", testType);
            break;
        default:
            console.log("Smoke Testing the the Default Test to be Performed");
            break;
    }
}
runTests('smoke')