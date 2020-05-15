const vaidatedockerfile = require('validate-dockerfile');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

function validatedf(dockerfilepath) {
    return readFile(dockerfilepath);
}

//Replace the Paramter of this function to the dockerfile path
//In this case its 'Dockerfile'
validatedf(process.argv.slice(2).toString()).then(data => {
    const filecontent = data.toString('utf8');
    const isvalid = vaidatedockerfile(filecontent);
    if(isvalid['valid']===true) {
        console.log("Docker File is Valid");
    }
    else {
        console.log("Docker File is Invalid, Please Correct the errors");
        console.log(isvalid['errors']);
    }
});