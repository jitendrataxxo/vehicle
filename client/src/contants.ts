export interface Details {
	vehicleName: string;
	vinNumber: string;
	licencePlate: string;
	vehicleType: string;
	make: string;
  model: string;
  colour: string;
  bodyType: string;
  msrp: number;
  bodySubType: string;
  linkedVehicle: string;
  vehicleImange: string
}

export interface Dimentions {
  width: number;
  height: number;
  length: number;
  interiorValume?: number;
  passangerValume?: number;
  cargoValume: string;
  groundClearance?: number;
  bedLength?: number; 
}

export interface Weight {
  curbWeight?: number;
  grossVehicleWeightRating?: number;
}

export interface Performance {
  towningCapacity?: number;
  maxPayload?: number;
}

export interface FuelEconomy {
  epaCity?: string;
  epaHighway?: string;
  epaCombined?: string

}

export interface VehicleSpecification {
  dimentions: Dimentions;
  weight: Weight;
  performance: Performance;
  fuelEconomy: FuelEconomy;
}

export interface Engine {
  engineSummery?: string;
  brand?: string;
  aspiration?: string;
  blockType?: string;
  bore?: string;
  camType?: string;
  compression?: string;
  cylinders?: string;
  displacement?: string;
  fuelInduction?: string;
  fuelQuality?: string;
  maxHP?: string;
  maxTorque?: string;
  redLineRPM?: string;
  stroke?: string;
  valves?: string;
}

export interface Transmission {
  summary?: string;
  brand?: string;
  type?: string;
  gears?: string;
}

export interface VehicleEngineAndTransmission {
  engine: Engine;
  transmission: Transmission;
}

export interface VehicleWheelAndTyre {
  driveType?: string;
  brackSystem?: string;
  frontTrackSystem?: string;
  wheelBase?: string;
  frontWheelDiameter?: string;
  rearWheelDiameter?: string;
  rearAxel?: string;
  frontTyreType?: string;
  frontTyrePSI?: string;
  rearTyreType?: string;
  rearTyrePSI?: string;
}

export interface Fuel {
  fuelType?: string;
  fuelQuantity?: string;
  fuelTankOneCapacity?: string;
  fuelTankThreeCapacity?: string;
}

export interface Oil {
  oilCapacity?: string;
}

export interface VehicleFluids {
  fuel: Fuel;
  oil: Oil;
}
export const VEHICLE_TYPE = ['Car', 'Bus', 'Van']
export const BODY_TYPE = ['hatchback', 'hatchback', 'hatchback']
export const BODY_SUB_TYPE = ['hatchback', 'hatchback', 'hatchback']
export const ASPIRATION = ['', 'Aspiration1', 'Aspiration2']
export const BLOCK_TYPE = ['', 'Block Type1', 'BlockType2']
export const CAM_TYPE = ['', 'Block Type1', 'BlockType2']
export const TYPE = ['', 'Block Type1', 'BlockType2']
export const DRIVE_TYPE = ['', 'Block Type1', 'BlockType2']
export const BRAKE_SYSTEM = ['', 'Block Type1', 'BlockType2']
