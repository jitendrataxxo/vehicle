import * as React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { VehicleSpecification } from '../../contants';
import Input from '../common/Input';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

const Specification = (props: Props) => {
	const classes = useStyles();
	const [state, setState] = React.useState({ ...props.specification });

  const handleDimentionsChange = (event: any) => {
    const nextState: any = {...state}
    nextState.dimentions[event.target.name] = event.target.value;
		setState(nextState);
  };
  
  const handleWeightChange = (event: any) => {
    const nextState: any = {...state}
    nextState.weight[event.target.name] = event.target.value;
		setState(nextState);
  };
  
  const handlePerformanceChange = (event: any) => {
    const nextState: any = {...state}
    nextState.performance[event.target.name] = event.target.value;
		setState(nextState);
  };
  
  const handleFuelEconomyChange = (event: any) => {
    const nextState: any = {...state}
    nextState.fuelEconomy[event.target.name] = event.target.value;
		setState(nextState);
  };

	const { dimentions, fuelEconomy, weight, performance } = state;

	const {
		width,
		height,
		length,
		interiorValume,
		passangerValume,
		cargoValume,
		groundClearance,
		bedLength,
	} = dimentions;

	const { epaCity, epaHighway, epaCombined } = fuelEconomy;

	const { curbWeight, grossVehicleWeightRating } = weight;

	const { towningCapacity, maxPayload } = performance;
  console.log(state);
	return (
		<React.Fragment>
			<h4 style={{ color: '#66b3ff' }}>IDENTIFICATION</h4>
      <h4>DIMENTIONS</h4>
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Grid xs={6}>
						<Input
							label="WIDTH"
							onChange={handleDimentionsChange}
							name="width"
              value={width}
              sufix='in'
						/>
					</Grid>
					<Grid xs={6}>
						<Input label="HEIGHT" onChange={handleDimentionsChange} name="height" value={height} sufix='in' />
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Input
							label="LENGTH"
							onChange={handleDimentionsChange}
							name="length"
              value={length}
              sufix='in'
						/>
					</Grid>
					<Grid item xs={6}>
						<Input label="INTERIOR VALUME" onChange={handleDimentionsChange} name="interiorValume" value={interiorValume} sufix='ft3'/>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={6}>
          <Input
							label="PASSANGER VALUME"
							onChange={handleDimentionsChange}
							name="passangerValume"
              value={passangerValume}
              sufix='ft3'
						/>
					</Grid>
					<Grid item xs={6}>
						<Input label="CARGO VALUME" onChange={handleDimentionsChange} name='cargoValume' value={cargoValume} sufix='ft3'/>
					</Grid>
          <Grid item xs={6}>
						<Input label="GROUND CLEARANCE" onChange={handleDimentionsChange} name='groundClearance' value={groundClearance} sufix='in'/>
					</Grid>
          <Grid item xs={6}>
						<Input label="BED LENGTH" onChange={handleDimentionsChange} name='bedLength' value={bedLength} sufix='in'/>
					</Grid>
				</Grid>
			</div>
			<h4>WEIGHT</h4>
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Grid xs={6}>
						<Input label="CURB WEIGHT" onChange={handleWeightChange} name="curbWeight" value={curbWeight} sufix='lb'/>
					</Grid>
					<Grid xs={6}>
          <Input label="GROSS VEHICLE WEIGHT RATING" onChange={handleWeightChange} name='grossVehicleWeightRating' value={grossVehicleWeightRating} sufix='lb'/>
					</Grid>
				</Grid>
			</div>
      <h4>PERFORMANCE</h4>
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Grid xs={6}>
						<Input label="TOWNING CAPACITY" onChange={handlePerformanceChange} name="towningCapacity" value={towningCapacity} sufix='lb'/>
					</Grid>
					<Grid xs={6}>
          <Input label="MAX PAYLOAD" onChange={handlePerformanceChange} name='maxPayload' value={maxPayload} sufix='lb'/>
					</Grid>
				</Grid>
			</div>
      <h4>FUEL ECONOMY</h4>
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Grid xs={6}>
						<Input label="EPA CITY" onChange={handleFuelEconomyChange} name="epaCity" value={epaCity}/>
					</Grid>
					<Grid xs={6}>
          <Input label="EPA HIGHWAY" onChange={handleFuelEconomyChange} name='epaHighway' value={epaHighway} />
					</Grid>
          <Grid xs={6}>
          <Input label="EPA COMBINED" onChange={handleFuelEconomyChange} name='epaCombined' value={epaCombined} />
					</Grid>
				</Grid>
			</div>
		</React.Fragment>
	);
};

interface Props {
	specification: VehicleSpecification;
}
export default Specification;
