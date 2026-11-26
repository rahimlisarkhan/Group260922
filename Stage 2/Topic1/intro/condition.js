// var age = 18;
// var citizen = 'fr';

// var result = age >= 18 && citizen == 'az';

// if (result == true) {
//   var a = 5;

//   console.log('--------');
//   console.log('Senari 1 ise salindi', a);
//   console.log('--------');
// } else {
//   console.log('--------');
//   console.log('Senari 2 ise salindi');
//   console.log('--------');
// }

var imtahanNeticesi = 100;

// A: 90 - 100 (90 ve 100 daxil)
// B: 80 - 89  (80 daxil, 90-a qeder)
// C: 70 - 79  (70 daxil, 80-e qeder)
// Qalan butun hallar: F

// if (imtahanNeticesi >= 90 && imtahanNeticesi <= 100) {
//   console.log('Netice:', imtahanNeticesi, '- Qiymet: A');
// } else if (imtahanNeticesi >= 80 && imtahanNeticesi < 90) {
//   console.log('Netice:', imtahanNeticesi, '- Qiymet: B');
// } else if (imtahanNeticesi >= 70 && imtahanNeticesi < 80) {
//   console.log('Netice:', imtahanNeticesi, '- Qiymet: C');
// } else {
//   console.log('Netice:', imtahanNeticesi, '- Qiymet: F');
// }

// if (imtahanNeticesi >= 90 && imtahanNeticesi <= 100) {
//   console.log('A');
// } else if (imtahanNeticesi >= 80 && imtahanNeticesi <= 89) {
//   console.log('B');
// } else if (imtahanNeticesi >= 70 && imtahanNeticesi <= 79) {
//   console.log('C');
// } else if (imtahanNeticesi >= 0 && imtahanNeticesi <= 69) {
//   console.log('F');
// } else {
//   console.log('Duzgun reqem daxil edin'); // EDGE CASE
// }

// if (imtahanNeticesi == 100) {
//   console.log('URAA teqaude qazandin!');
// }

// var a = prompt('Imtahan neticevizi yazin');
// var a = confirm('Imtahan netivevizi yazmaq isteyirsiniz?');
// console.log(a);

// alert('Salam');

// var isStartResult = false;
var isStartResult = confirm('Imtahan neticevizi yazmaq isteyirsiniz?');

if (isStartResult) {
  // imtahan neticesi logic...

  var imtahanNeticesi = prompt('Imtahan neticevizi yazin');

  if (imtahanNeticesi >= 90 && imtahanNeticesi <= 100) {
    alert('A');
  } else if (imtahanNeticesi >= 80 && imtahanNeticesi <= 89) {
    alert('B');
  } else if (imtahanNeticesi >= 70 && imtahanNeticesi <= 79) {
    alert('C');
  } else if (imtahanNeticesi >= 0 && imtahanNeticesi <= 69) {
    alert('F');
  } else {
    alert('Duzgun reqem daxil edin'); // EDGE CASE
    // window.location.reload();
  }
} else {
  alert('Ziyaretiniz ucun tesekkur edirik!');
}
