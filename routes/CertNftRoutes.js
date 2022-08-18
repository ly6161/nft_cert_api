

//get all nfts minted, with pagination
global_app.route('/cert_nft/all').get(function(req,res,next){
	res.send('/cert_nft/all')
});

//return image path, ipfs path etc for wallet address
//can have multiple nfts
global_app.route('/cert_nft/wallet_address/:wallet_address').get(function(req,res,next){
	res.send('/cert_nft/wallet_address/:wallet_address')
});

//get nft data
global_app.route('/cert_nft/token_id/:token_id').get(function(req,res,next){
	res.send('/cert_nft/token_id/:token_id')
});

//mint nft
//put cert image/pdf in filebase via api, get back ipfs url
//put cert image/pdf in wasabi, get back media url
//translate json payload to metadata, store metadata in filebase folder
//use web3 function to call smart contract to mint, add metadata, ++ the token index
//transfer to wallet address
global_app.route('/cert_nft/mint/:wallet_address').post(function(req,res,next){
	res.send('/cert_nft/mint/:wallet_address')
});

//burn or remove nft
//call filebase api to remove it and related metadata
global_app.route('/cert_nft/burn/:wallet_address').post(function(req,res,next){
	res.send('/cert_nft/burn/:wallet_address')
});