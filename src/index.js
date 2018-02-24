module.exports = function solveEquation(equation) {
  // your implementation

  var rezik=equation.split('*').join().split('x').join().split('^2').join().split(',');
      rezik[1]=rezik[3];
      rezik[2]=rezik[5];
      rezik.length=3;
      for(var i=0;i<rezik.length;i++) {
        rezik[i]=rezik[i].replace(/\s/g,"");}
  var a=(rezik[0]),b=(rezik[1]),c=(rezik[2]);
  var Desc= Math.pow(b,2) - 4*a*c; var d=Math.sqrt(Desc);
  var x1=  Math.round(-b+d)/(2*a);
  var x2=Math.round(-b-d)/(2*a);
  var final=[x1,x2];
    if(final[0]>final[1]){
        var temp=final[0];
        final[0]=final[1];
        final[1]=temp;
    }
return(final);
}