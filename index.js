//🔐 Part 1: Login & Access Control
let username = prompt(" 🔐 Enter your username:");
let password = prompt(" 🔐 Enter your password:");
let role, securityLevel;

if ((username === "admin" || username === "user") && password === "1234") {
  role = username;
  securityLevel = username === "admin" ? "high" : "low";
} else {
  alert(" 🚫 Invalid credentials! Access denied.");
  throw new Error("Program stopped due to authentication failure.");
}

console.log(username)
//     document.getElementById("coffeeForm").addEventListener("submit", function(event) {
//       event.preventDefault();

//       const name = document.getElementById("name").value;
//       const age = parseInt(document.getElementById("age").value);
//       const coffeeType = document.getElementById("coffeeType").value;
//       const quantity = parseInt(document.getElementById("quantity").value);
//       const people = parseInt(document.getElementById("people").value);
//       const tipPercentage = parseInt(document.getElementById("tip").value);

      
//       let pricePerCup = {
//         espresso: 2.5,
//         latte: 3.5,
//         cappuccino: 4.0
//       }[coffeeType] || 0;

//       let originalTotal = pricePerCup * quantity;
//       let discount = (age < 18 || age > 60) ? originalTotal * 0.1 : 0;
//       let finalTotal = originalTotal - discount;
//       let tipAmount = finalTotal * (tipPercentage / 100);
//       let totalWithTip = finalTotal + tipAmount;
//       let splitAmount = totalWithTip / people;

//       document.getElementById("outputArea").innerHTML = `
//         <strong>Hello ${name}!</strong><br>
//         You ordered ${quantity} ${coffeeType}(s).<br>

// Original Total: $${originalTotal.toFixed(2)}<br>
//         Discount: $${discount.toFixed(2)}<br>
//         Tip: $${tipAmount.toFixed(2)}<br>
//         <strong>Total with Tip: $${totalWithTip.toFixed(2)}</strong><br>
//         <strong>Split between ${people}: $${splitAmount.toFixed(2)} each</strong>
//       `;
//     });
   
 