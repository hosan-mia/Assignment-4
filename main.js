function calculateMoney(tiket){

    const details = {
        tiket_free : 120 ,
        daroyan_free : 500,
        lunch : 50,
        worker : 8
    }

    const income = tiket * 120 ; 
    const expenditure = details.daroyan_free  + (details.lunch * details.worker);
    const remained = income - expenditure ; 

    if(tiket < 0){
        return  true
    }
    
    
    return remained;
}

function checkName(name) {

    if (typeof name !== 'string') {
        return "invalid";
    }

    name = name.trim();
    let last_letter = name[name.length - 1];
    let  letter = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    if (letter.includes(last_letter.toLowerCase())) {
        return "Good Name";
    } else {
        return "Bad Name";
    }

    return name;
}

function deleteInvalids(arr) {
   
     if(!Array.isArray(arr)|| arr.some(item => typeof item !== 'number')){
        return "Error : Invalid input ";
    }
    
    return arr.filter(item => !isNaN(item));
   
  
}

function password(obj) {
    
    if(!obj.hasOwnProperty('name') || !obj.hasOwnProperty('brithYear') || !obj.hasOwnProperty('siteName') || obj.birthYear.toString().langth !== 4){
        return "invalid"
    }

    let password = obj.siteName.charAt(0).toUpperCase() + '#' + boj.name + '@' + obj.birthYear;

    return password;
}

function monthlySavings(payments, livingCost) {

    if (!Array.isArray(payments) || typeof livingCost !== 'number'){
        return "invalid input";
    }

    let totalPayment = payments.reduce((acc, payment) => acc + payment, 0);
    let tax = totalPayment > 3000 ? 0.2 * (totalPayment - 3000) : 0 ;
    let savings = totalPayment - tax- livingCost; 
    
    if ( savings >= 0){
        return savings;
    } else{
        return "earn more";
    }
}


