const carMakers = ['ford', 'lexus', 'BMW'];
const dates = [new Date(), new Date()];

const carsByMake = [['m5'], ['corsa'], ['bugatti']];

// help with inference when extracting
const myCar = carMakers[0];

carMakers.map((car: string): string => {
  return `car was ${car}`;
});

// flexibile types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push(new Date());
importantDates.push('2020-10-10');
