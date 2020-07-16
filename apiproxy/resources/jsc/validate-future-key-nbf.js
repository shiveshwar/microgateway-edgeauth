var futureKeysNbf = context.getVariable("private.future_keys_nbf"); 
var futurePrivateKey = context.getVariable("private.future_private_key"); 
var futurePrivateKeyKid = context.getVariable("private.future_private_key_kid"); 
var futureCertficate = context.getVariable("private.future_certficate"); 

if(futureKeysNbf && futureKeysNbf < Date.now()){
    context.setVariable('applyNewKey', true);
    context.setVariable('private.privateKey', futurePrivateKey);
    context.setVariable('private.private_key_kid', futurePrivateKeyKid);
    context.setVariable('private.publicKey', futureCertficate);
}