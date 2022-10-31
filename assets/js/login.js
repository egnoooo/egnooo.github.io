const wax = new waxjs.WaxJS({
   rpcEndpoint: 'https://wax.greymass.com'
 });

  async function login() {
   try {
      const userAccount = await wax.login();
      const pubKeys = wax.pubKeys;

      document.getElementById("loginButton").setHTML( wax.user.account);
   } catch (e) {
         
   }}

