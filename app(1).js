const {exec} = require('child_process');


function versions(package_name) {

    exec(`npm view ${package_name} versions`,(error,stdout,stderr) => {
        if(stdout){
            console.log(`Version of ${package_name} \n ${stdout}`);
        }
        else{
            console.log('Please check package name.');
        }
    })
}
function latestversion(package_name) {

    exec(`npm view ${package_name} version`,(error,stdout,stderr) => {
        if(stdout){
            console.log(`Latest version of ${package_name} \n ${stdout}`);
        }
        else{
            console.log('Please check package name.');
        }
    })
}

module.exports.versions = versions;
module.exports.latestversion = latestversion;