module.exports = function reverse (n) {
    const reversed = n.toString().split('').reverse().join(''); 
    if (n>0){
        return (Math.sign(n)) * parseInt(reversed); 
    } else {
        return -(Math.sign(n)) * parseInt(reversed); 
    }
  
  }
  

