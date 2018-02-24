// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var coins = {};
    var dol = [50, 25, 10, 5, 1];
    var newDol = [0, 0, 0, 0, 0];
    
      if(currency>10000) {
        coins = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return coins;
      }
      else if (currency===0) {
        return coins;
      }
      else {
      for (var i=0; i<dol.length; i++) {
        if ((currency/dol[i])>=1) {
            newDol[i] = Math.floor(currency/dol[i]);
            currency = currency - newDol[i]*dol[i];

        }
      else continue;
      }

      coins.H = newDol[0];
       coins.Q = newDol[1];
       coins.D = newDol[2];
       coins.N = newDol[3];
       coins.P = newDol[4];
       if (coins.H === 0)
        {delete coins.H;
        }
       if (coins.Q===0) {delete coins.Q;}
       if (coins.D===0) {delete coins.D;}
       if (coins.N===0) {delete coins.N;}
       if (coins.P===0) {delete coins.P;}

       return coins;
     }
}