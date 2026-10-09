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
