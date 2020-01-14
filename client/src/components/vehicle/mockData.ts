import {
   Details,
   Dimentions,
   Oil,
   Engine,
   VehicleSpecification,
   Weight,
   FuelEconomy,
   Transmission,
   VehicleEngineAndTransmission,
   VehicleWheelAndTyre,
   Fuel,
   VehicleFluids,
   Performance
  } from "../../contants";

export const VEHICLE_DATA = {
  "message": "No vehicle found",
  "error": 0,
  "abicode": "39056003",
  "make": "PEUGEOT",
  "model": "107",
  "engineSize": "998",
  "bodytype": "HATCHBACK",
  "transmission": "MANUAL",
  "colour": "BLACK",
  "fuel": "PETROL",
  "imported": false,
  "dateOfFirstRegistration": "24 SEPTEMBER 2007",
  "numberOfPreviousOwners": 0,
  "keeperStartDate": "24 SEPTEMBER 2007",
  "description": "2007 PEUGEOT 107, 998cc, 3, MANUAL",
  "price": 2050,
  "year": 2007,
  "capcode": "PE1710URB5HPIM",
  "capId": "31632",
  "numberOfDoors": 5,
  "numberOfSeats": 4,
  "insuranceGroup": "3",
  "steering": "RHD",
  "frontTyres": [
    {
      "width": 155,
      "ratio": 65,
      "rim": "14",
      "speedRating": "T",
      "psi": 0,
      "loadIndex": 75
    }
  ],
  "rearTyres": [
    {
      "width": 155,
      "ratio": 65,
      "rim": "14",
      "speedRating": "T",
      "psi": 0,
      "loadIndex": 75
    }
  ],
  "tyreFitments": ["155/65R14 75T"],
  "dateFirstUsed": "24 SEPTEMBER 2007",
  "fuelType": "PETROL",
  "registrationDate": "24 SEPTEMBER 2007",
  "manufactureDate": "24 SEPTEMBER 2007",
  "manufactureYear": "2007",
  "motTestReports": [
    {
      "testDate": "5 OCTOBER 2019",
      "expiryDate": "10 OCTOBER 2020",
      "testResult": "PASS",
      "odometerReading": 101294,
      "odometerUnit": "mi",
      "motTestNumber": 198449043796,
      "advisoryItems": [],
      "minorItems": [],
      "failureItems": []
    },
    {
      "testDate": "5 OCTOBER 2019",
      "expiryDate": "",
      "testResult": "FAIL",
      "odometerReading": 101294,
      "odometerUnit": "mi",
      "motTestNumber": 605365530054,
      "advisoryItems": [],
      "minorItems": [],
      "failureItems": ["Test issue", "test issue 2"]
    },
    {
      "testDate": "25 SEPTEMBER 2018",
      "expiryDate": "10 OCTOBER 2019",
      "testResult": "PASS",
      "odometerReading": 96966,
      "odometerUnit": "mi",
      "motTestNumber": 660374264284,
      "advisoryItems": ["Test issue", "test issue 2"],
      "minorItems": [],
      "failureItems": []
    },
    {
      "testDate": "25 SEPTEMBER 2018",
      "expiryDate": "",
      "testResult": "FAIL",
      "odometerReading": 96966,
      "odometerUnit": "mi",
      "motTestNumber": 130046087148,
      "advisoryItems": ["Test issue", "test issue 2"],
      "minorItems": [],
      "failureItems": ["Test issue", "test issue 2"]
    },
    {
      "testDate": "6 OCTOBER 2017",
      "expiryDate": "10 OCTOBER 2018",
      "testResult": "PASS",
      "odometerReading": 92202,
      "odometerUnit": "mi",
      "motTestNumber": 894429536842,
      "advisoryItems": [],
      "minorItems": [],
      "failureItems": []
    },
    {
      "testDate": "30 SEPTEMBER 2017",
      "expiryDate": "",
      "testResult": "FAIL",
      "odometerReading": 92137,
      "odometerUnit": "mi",
      "motTestNumber": 352732961758,
      "advisoryItems": ["Test issue", "test issue 2"],
      "minorItems": [],
      "failureItems": ["Test issue", "test issue 2"]
    },
    {
      "testDate": "11 OCTOBER 2016",
      "expiryDate": "10 OCTOBER 2017",
      "testResult": "PASS",
      "odometerReading": 88781,
      "odometerUnit": "mi",
      "motTestNumber": 886138543062,
      "advisoryItems": [],
      "minorItems": [],
      "failureItems": []
    },
    {
      "testDate": "18 SEPTEMBER 2015",
      "expiryDate": "4 OCTOBER 2016",
      "testResult": "PASS",
      "odometerReading": 73520,
      "odometerUnit": "mi",
      "motTestNumber": 915461221676,
      "advisoryItems": ["Test issue", "test issue 2"],
      "minorItems": [],
      "failureItems": []
    },
    {
      "testDate": "19 SEPTEMBER 2014",
      "expiryDate": "4 OCTOBER 2015",
      "testResult": "PASS",
      "odometerReading": 63553,
      "odometerUnit": "mi",
      "motTestNumber": 707012264227,
      "advisoryItems": ["Test issue", "test issue 2"],
      "minorItems": [],
      "failureItems": []
    },
    {
      "testDate": "19 SEPTEMBER 2014",
      "expiryDate": "",
      "testResult": "FAIL",
      "odometerReading": 63553,
      "odometerUnit": "mi",
      "motTestNumber": 306942364476,
      "advisoryItems": ["Test issue", "test issue 2"],
      "minorItems": [],
      "failureItems": ["Test issue", "test issue 2"]
    },
    {
      "testDate": "17 SEPTEMBER 2013",
      "expiryDate": "4 OCTOBER 2014",
      "testResult": "PASS",
      "odometerReading": 58581,
      "odometerUnit": "mi",
      "motTestNumber": 327940063233,
      "advisoryItems": [],
      "minorItems": [],
      "failureItems": []
    },
    {
      "testDate": "18 SEPTEMBER 2012",
      "expiryDate": "4 OCTOBER 2013",
      "testResult": "PASS",
      "odometerReading": 54333,
      "odometerUnit": "mi",
      "motTestNumber": 837582462276,
      "advisoryItems": ["Test issue", "test issue 2"],
      "minorItems": [],
      "failureItems": []
    },
    {
      "testDate": "18 SEPTEMBER 2012",
      "expiryDate": "",
      "testResult": "FAIL",
      "odometerReading": 54333,
      "odometerUnit": "mi",
      "motTestNumber": 148012862299,
      "advisoryItems": ["Test issue", "test issue 2"],
      "minorItems": [],
      "failureItems": ["Test issue", "test issue 2"]
    },
    {
      "testDate": "5 OCTOBER 2011",
      "expiryDate": "4 OCTOBER 2012",
      "testResult": "PASS",
      "odometerReading": 45359,
      "odometerUnit": "mi",
      "motTestNumber": 579628771219,
      "advisoryItems": [],
      "minorItems": [],
      "failureItems": []
    },
    {
      "testDate": "22 SEPTEMBER 2010",
      "expiryDate": "24 SEPTEMBER 2011",
      "testResult": "PASS",
      "odometerReading": 32544,
      "odometerUnit": "mi",
      "motTestNumber": 940685260273,
      "advisoryItems": [],
      "minorItems": [],
      "failureItems": []
    }
  ],
  "motTestDueDate": "10 October 2020",
  "taxed": false,
  "mot": true,
  "yearOfManufacture": "2007",
  "sixMonthRate": "",
  "twelveMonthRate": "",
  "cylinderCapacity": "998 cc",
  "wheelPlan": "2-AXLE-RIGID BODY",
  "revenueWeight": "Not available",
  "taxDetails": "Tax due: 16 November 2019",
  "taxStatus": "Not taxed and due",
  "typeApproval": "M1",
  "co2Emissions": "109 g/km",
  "motDetails": "Expires: 10 October 2020",
  "vin": "VF3PNCFAC88186458",
  "type": "dvlasearch",
  "licencePlate": "ma57nmu",
  "id": "uk-nuvven-dvlasearch-5a34d59c-fc02-4c29-896a-63d60f98593f",
  "bodyType": "hatchback",
  "premium": false,
  "aircon": false,
  "satNav": false,
  "bluetooth": false,
  "responseStatus": 2
}

export const DetailsData: Details = {
	vehicleName: '',
	vinNumber: '',
	licencePlate: '',
	vehicleType: '',
	make: '',
  model: '',
  colour: '',
  bodyType: '',
  msrp: 0,
  bodySubType: '',
  linkedVehicle: '',
  vehicleImange: '',
}

const DimentionsData: Dimentions = {
  width: 70.0039,
  height: 56.00023,
  length: 183,
  interiorValume: 0,
  passangerValume: 0,
  cargoValume: 'Civik',
  groundClearance: 0,
  bedLength: 0, 
}

const WeightData: Weight = {
  curbWeight: 0,
  grossVehicleWeightRating: 0,
}

const PerformanceData: Performance = {
  towningCapacity: 0,
  maxPayload: 0,
}

const FuelEconomyData: FuelEconomy = {
  epaCity: '',
  epaHighway: '',
  epaCombined: '',
}

export const VehicleSpecificationData: VehicleSpecification = {
  dimentions: DimentionsData,
  weight: WeightData,
  performance: PerformanceData,
  fuelEconomy: FuelEconomyData,
}

const EngineData: Engine = {
  engineSummery: '',
  brand: '',
  aspiration: '',
  blockType: '',
  bore: '',
  camType: '',
  compression: '',
  cylinders: '',
  displacement: '',
  fuelInduction: '',
  fuelQuality: '',
  maxHP: '',
  maxTorque: '',
  redLineRPM: '',
  stroke: '',
  valves: '',
}

const TransmissionData: Transmission = {
  summary: '',
  brand: '',
  type: '',
  gears: '',
}

export const VehicleEngineAndTransmissionData: VehicleEngineAndTransmission = {
  engine: EngineData,
  transmission: TransmissionData,
}

export const VehicleWheelAndTyreData: VehicleWheelAndTyre = {
  driveType: '',
  brackSystem: '',
  frontTrackSystem: '',
  wheelBase: '',
  frontWheelDiameter: '',
  rearWheelDiameter: '',
  rearAxel: '',
  frontTyreType: '',
  frontTyrePSI: '',
  rearTyreType: '',
  rearTyrePSI: '',
}

const FuelData: Fuel = {
  fuelType: '',
  fuelQuantity: '',
  fuelTankOneCapacity: '',
  fuelTankThreeCapacity: '',
}

const OilData: Oil = {
  oilCapacity: '',
}

export const VehicleFluidsData: VehicleFluids = {
  fuel: FuelData,
  oil: OilData,
}
