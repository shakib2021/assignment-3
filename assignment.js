
//................. kilometerToMeter..................

 function kilometerToMeter(value) {
    if(value<0){
          return "plz enter positive number"
    }
    else{
      var meter=value*1000;
      return meter;
 
    }
    
}
     var result=kilometerToMeter(1);
     console.log( result,"meters");

// ................. budgetCalculator..................

function budgetCalculator(watch,phone,laptop) {
      if((watch<0)||(phone<0)||(laptop<0)){
            return "negetive value is not valid"
      }

  else{
 //Declaring the price

 var watchPrice=50;
 var phonePrice=100;
 var laptopPrice=500;
// Calculating
 var totalWatchPrice=watchPrice*watch;
 var totalPhonePrice=phonePrice*phone;
 var totalLaptopPrice=laptopPrice*laptop;
// Total cost
var totalCost=totalWatchPrice+totalPhonePrice+totalLaptopPrice;
  
return totalCost;
}
     
}

var result2=budgetCalculator(-1,1,1);
console.log(result2);



// ................. hotelCost..................



   function hotelCost(days) {
       var cost=0;
      
      if(days<=10){
        cost=days*100;

      }

     else if(days<=20){
       var remaining =days-10;
       var firstTenDay=days*100;
       var secondTenDay=remaining*80;
       
           cost=firstTenDay+secondTenDay;

      }

        else{
       var firstTenDay=days*100;
       var secondTenDay=days*80;
       var remaining =days-20;

       var anotherDay=remaining*50;

       cost=firstTenDay+secondTenDay+anotherDay;

      }

       return cost;
   }

   var result3=hotelCost(1);
   console.log(result3);


//..................megaFriend..................

function megaFriend(name) {
    
      var empty="";
      var largestName=0;
         for(var i=0; i<name.length;i++)  {
                  var friendName=name[i];
                  if(friendName.length>empty)
                  {
                      empty=friendName.length;
                      largestName=empty;
                  }
            
            }
            return largestName;
}
     var result4=megaFriend(["shakib","naim","muktadir"])
     console.log(result4)
  

