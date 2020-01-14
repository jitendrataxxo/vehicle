import * as React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { VehicleFluids } from '../../contants';
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

const Fluids = (props: Props) => {
	const classes = useStyles();
	const [state, setState] = React.useState({ ...props.vehicleFluids });

	const handleFuelChange = (event: any) => {
    const nextState: any = {...state}
    nextState.fuel[event.target.name] = event.target.value;
		setState(nextState);
  };

  const handleOilChange = (event: any) => {
    const nextState: any = {...state}
    nextState.oil[event.target.name] = event.target.value;
		setState(nextState);
  };

	const { fuel, oil } = state;

	const { fuelType, fuelQuantity, fuelTankOneCapacity, fuelTankThreeCapacity } = fuel;

	const { oilCapacity } = oil;

	return (
		<React.Fragment>
			<h4 style={{ color: '#66b3ff' }}>FLUIDS</h4>
			<h4>FUEL</h4>
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Grid xs={6}>
						<Input
							label="FUEL TYPE"
							onChange={handleFuelChange}
							name="fuelType"
							value={fuelType}
						/>
					</Grid>
					<Grid xs={6}>
						<Input label="FUEL QUANTITY" onChange={handleFuelChange} name="fuelQuantity" value={fuelQuantity} />
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={6}>
          <Input
							label="FUEL TANK 1 CAPACITY"
							onChange={handleFuelChange}
							name="fuelTankOneCapacity"
              value={fuelTankOneCapacity}
              sufix='GallonsUS'
						/>
					</Grid>
					<Grid item xs={6}>
          <Input
							label="FUEL TANK 3 CAPACITY"
							onChange={handleFuelChange}
							name="fuelTankThreeCapacity"
              value={fuelTankThreeCapacity}
              sufix='GallonsUS'
						/>
					</Grid>
				</Grid>
			</div>
			<h4>OIL</h4>
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Grid xs={6}>
						<Input label="OIL CAPACITY" onChange={handleOilChange} name="oilCapacity" value={oilCapacity} />
					</Grid>
				</Grid>
			</div>
		</React.Fragment>
	);
};

interface Props {
	vehicleFluids: VehicleFluids;
}
export default Fluids;
