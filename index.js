const price = prompt('Įveskite prekės kainą');
const isDeliveryNeeded = prompt('Ar reikalingas pristatymas į namus? (taip/ne)');
let city;
const DELIVERY_FEE = 20;

if (isDeliveryNeeded === 'taip') {
  city = prompt('Į kurį miestą reiks pristatyti?');
}

// Prekės kaina : xx.xx €
// Pristatymas: xx.xx €
// Iš viso: xx.xx €
// Prekę pristatysime į "įvestas miestas" per 1-3 dienas.

// Prekės kaina : xx.xx €
// Prekę nemokamai pristatysime į "įvestas miestas" per 1-3 dienas.

if (isDeliveryNeeded !== 'taip') {
  console.log(`Prekes kaina ${price}$ \nPrekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a`);
} else if (price >= 50 || city === 'Vilnius') {
  console.log(`Prekės kaina : ${price} € \nPrekę nemokamai pristatysime į ${city} per 1-3 dienas.`);
} else {
  console.log(
    `Prekės kaina : ${price} € \nPristatymas: ${DELIVERY_FEE} € \nIš viso: ${
      +price + DELIVERY_FEE
    } €\nPrekę pristatysime į ${city} per 1-3 dienas.`
  );
}
