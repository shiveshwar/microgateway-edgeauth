var privateKey = context.getVariable("private.privateKey"); 
var cert = context.getVariable("private.publicKey"); 
var privateKeyKid = context.getVariable("private.private_key_kid"); 
var publicKey1Kid = context.getVariable("private.public_key1_kid"); 
var publicKey1 = context.getVariable("private.publicKey1"); 

validateKvm();

function validateKvm() {
    var newPrivateKey = context.getVariable('private_key') || '';
    var newPrivateKeyKid = context.getVariable('private_key_kid') || '';
    var newPublicKey = context.getVariable('public_key') || '';
    var newPublicKey1 = context.getVariable('public_key1') || '';
    
    if(privateKey === null || privateKey === '') {
        context.setVariable('errText', 'KVM does not exist, Please run configure command');
        return;
    }
    if(cert === null || cert === '') {
        context.setVariable('errText', 'KVM does not exist, Please run configure command');
        return;
    }
    if(privateKeyKid === null || privateKeyKid === '' ) {
        context.setVariable('errText', 'private_key_kid does not exist in kvm, Please run upgradekvm command');
        return;
    }
    if(publicKey1Kid === null || publicKey1Kid === '') {
        context.setVariable('errText', 'public_key1_kid does not exist in kvm, Please run upgradekvm command');
        return;
    }else{
        context.setVariable('oldPublicKeyKid', publicKey1Kid);
    }
    if(publicKey1 === null || publicKey1 === '') {
        context.setVariable('errText', 'publicKey1 does not exist in kvm, Please run upgradekvm command');
        return;
    }else{
        context.setVariable('oldPublicKey', publicKey1); 
    }
    if(newPrivateKey === null || newPrivateKey === '') {
        context.setVariable('errText', 'private_key is required');
        return;
    }else{
        context.setVariable('newPrivateKey', newPrivateKey);
    }
    if(newPrivateKeyKid === null || newPrivateKeyKid === '') {
        context.setVariable('errText', 'private_key_kid is required');
        return;
    }
    if(newPublicKey === null || newPublicKey === '') {
        context.setVariable('errText', 'public_key is required');
        return;
    }else{
        context.setVariable('newPublicKey', newPublicKey);
    }
    if(newPublicKey1 === null || newPublicKey1 === '') {
        context.setVariable('errText', 'public_key1 is required');
        return;
    }else{
        context.setVariable('newPublicKey1', newPublicKey1);
    }
    if(privateKeyKid === newPrivateKeyKid){
        newPrivateKeyKid = (parseInt(newPrivateKeyKid) + parseInt(1));
        context.setVariable('newPrivateKeyKid', newPrivateKeyKid.toString());
        context.setVariable('responseMessage', 'The kid : ' + privateKeyKid + ' already exists, ' + 'Key Rotation completed with kid : ' + newPrivateKeyKid);
    }else{
        context.setVariable('newPrivateKeyKid', newPrivateKeyKid);
    }
} 