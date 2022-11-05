const wax = new waxjs.WaxJS({
   rpcEndpoint: 'https://wax.greymass.com'
 });

  async function login() {
   try {
      const userAccount = await wax.login();
      const pubKeys = wax.pubKeys;

      document.getElementById("loginButton").setHTML( wax.user.account);
      let tableNFT = document.getElementById("walletNFT");
      $.ajax({
        url: "https://wax.api.atomicassets.io/atomicassets/v1/assets?owner="+wax.user.account+"&collection_name=therusticana",
        success: function(result){
          debugger;
          let assets = result.data;
          let readableAsset = [];
          for(let i=0; i<assets.length; i++){
            let obj = {
              collectionName: assets[i].collection.name,
              owner: assets[i].owner,
              mint: assets[i].template_mint,
              name: assets[i].name,
              img: "https://ipfs.hivebp.io/ipfs/" + assets[i].data.img
            }
            readableAsset.push(obj)
          }

          for(let j=0; j<20; j++){
            let block = document.createElement("div");
            let img = document.createElement("img");
            img.src = readableAsset[j].img;
            img.className = "imgNFT";

            let name = document.createElement("div");
            name.innerHTML = readableAsset[j].name;
            name.className = "txtWallet"

            let mintNr = document.createElement("div");
            mintNr.innerHTML = "#"+readableAsset[j].mint;
            mintNr.className = "mintNr";

            block.appendChild(img);
            block.appendChild(name);
            block.appendChild(mintNr);
            block.className = "itemGridWallet"
            tableNFT.appendChild(block);

          }
        }
      })

   } catch (e) {
         
   }}

