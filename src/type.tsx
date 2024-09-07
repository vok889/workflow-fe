const car: { 
    brand: string; 
    mileage?: number 
} = { // no error
  brand: "Toyota"
};
car.mileage = 2000;
car.mileage = undefined;
car.mileage = null;


