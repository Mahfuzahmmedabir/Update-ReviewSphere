const n = [1,2,3,4,6,7,8,9]

for (let i = 0; i <= n.lenght; i++) {
  if (n % 2 === 0 ) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

for (let i = 0; i < n.length; i++) {
  if (n[i] < 0) {
    console.log(n[i] + ' is Negative');
  } else if (n[i] % 2 === 0) {
    console.log(n[i] + ' is Even');
  } else {
    console.log(n[i] + ' is Odd');
  }
}