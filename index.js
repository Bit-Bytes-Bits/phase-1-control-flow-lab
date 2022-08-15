// 1. If else-if statement

function scuberGreetingForFeet(ride){
  // Write your code here!
  
  if (ride <= 400){
    return 'This one is on me!'
  }
  else if (ride > 2000 && ride < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else if(ride > 2500){
    return 'No can do.'
  }
}
scuberGreetingForFeet(199)

// 2. Ternary operator

function ternaryCheckCity(city){
  // Write your code here!

  let result = (city === 'NYC')? 'Ok, sounds good.' : 'No go.';
  return result
}
ternaryCheckCity("NYC")

// 3. Switch statement

function switchOnCharmFromTip(tip){
  // Write your code here!

  switch (tip){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.'
  }
}
switchOnCharmFromTip("generous");