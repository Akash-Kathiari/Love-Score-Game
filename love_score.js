prompt("your name?");
prompt(" crush's name?");
var lovescore = (Math.random()*100);
lovescore= Math.floor(lovescore)+1;

if (lovescore>70){
    alert("Your love score is "+lovescore+ "%" + " You love each other like kanye loves kanye ");
}
if (lovescore>30 && lovescore<=70){
    alert("Your love score is "+lovescore+ "%");
}
if(lovescore<=30){
    alert("Your love score is "+lovescore+ "%" + " Yikes, good luck!")
}