interface Car {
  brand: string;
  model: string;
  price: number;
  year: number;
}

const sampleCars: Car[] = [
  { brand: "BMW", model: "M3", price: 85000, year: 2023 },
  { brand: "Audi", model: "A4", price: 42000, year: 2021 },
  { brand: "Tesla", model: "Model 3", price: 48000, year: 2022 },
  { brand: "Porsche", model: "911 GT3", price: 195000, year: 2024 },
  { brand: "Volkswagen", model: "Golf", price: 28000, year: 2020 }
];

function getTotalPrice(cars: Car[]): number {
  let total = 0;
  cars.forEach(car => {
    total += car.price;
  });
  return total;
}

function printCars(cars: Car[]): void {
  cars.forEach(car => {
    console.log(`${car.year} ${car.brand} ${car.model} - ${car.price} €`);
  });
}

function getExpensiveCars(cars: Car[], minPrice: number): Car[] {
  const expensiveCars: Car[] = [];
  cars.forEach(car => {
    if (car.price > minPrice) {
      expensiveCars.push(car);
    }
  });
  return expensiveCars;
}

function getTotalPriceArray(cars: Car[]): number {
  return cars.reduce((total, car) => total + car.price, 0);
}

function printCarsArray(cars: Car[]): void {
  cars.forEach(car => 
    console.log(`${car.year} ${car.brand} ${car.model} - ${car.price} €`)
  );
}

function getExpensiveCarsArray(cars: Car[], minPrice: number): Car[] {
  return cars.filter(car => car.price > minPrice);
}

console.log("Gesamtpreis:", getTotalPrice(sampleCars));
printCars(sampleCars);
printCars(getExpensiveCars(sampleCars, 50000));

console.log("Gesamtpreis (Array):", getTotalPriceArray(sampleCars));
printCarsArray(getExpensiveCarsArray(sampleCars, 50000));