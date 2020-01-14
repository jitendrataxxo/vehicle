import * as React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { VehicleEngineAndTransmission, ASPIRATION, BLOCK_TYPE, CAM_TYPE, TYPE } from '../../contants';
import Input from '../common/Input';
import Select from '../common/Select';

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

const EngineAndTransmission = (props: Props) => {
	const classes = useStyles();
	const [state, setState] = React.useState({ ...props.engineAndTransmission });

	const handleEngineChange = (event: any) => {
    const nextState: any = {...state}
    nextState.engine[event.target.name] = event.target.value;
		setState(nextState);
  };
  
  const handleTransmissionChange = (event: any) => {
    const nextState: any = {...state}
    nextState.transmission[event.target.name] = event.target.value;
		setState(nextState);
  };

	const { engine, transmission } = state;

	const {
		engineSummery,
		brand,
		aspiration,
		blockType,
		bore,
		camType,
		compression,
		cylinders,
		displacement,
		fuelInduction,
		fuelQuality,
		maxHP,
		maxTorque,
		redLineRPM,
		stroke,
		valves,
	} = engine;

	const { summary, type, gears } = transmission;
	const vehicleBrand = transmission.brand;

	return (
		<React.Fragment>
			<h4 style={{ color: '#66b3ff' }}>ENGINE AND TRANSMISSION</h4>
			<h4>ENGINE</h4>
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Grid xs={6}>
						<Input
							label="ENGINE SUMMARY"
							onChange={handleEngineChange}
							name="engineSummery"
							value={engineSummery}
						/>
					</Grid>
					<Grid xs={6}>
						<Input label="BRAND" onChange={handleEngineChange} name="brand" value={brand} />
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Select
							label="ASPIRATION"
							onChange={handleEngineChange}
							name="aspiration"
							value={aspiration}
							options={ASPIRATION}
							native={true}
							multiple={false}
							autoWidth={true}
						/>
					</Grid>
					<Grid item xs={6}>
						<Select
							label="BLOCK TYPE"
							onChange={handleEngineChange}
							name="blockType"
							value={blockType}
							options={BLOCK_TYPE}
							native={true}
							multiple={false}
							autoWidth={true}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Input label="BORE" onChange={handleEngineChange} name="bore" value={bore} sufix="in" />
					</Grid>
					<Grid item xs={6}>
						<Select
							label="CAM TYPE"
							onChange={handleEngineChange}
							name="blockType"
							value={camType}
							options={CAM_TYPE}
							native={true}
							multiple={false}
							autoWidth={true}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input
							label="COMPRESSION"
							onChange={handleEngineChange}
							name="compression"
							value={compression}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input label="CYLINDERS" onChange={handleEngineChange} name="cylinders" value={cylinders} />
					</Grid>
					<Grid item xs={6}>
						<Input
							label="DISPLACEMENT"
							onChange={handleEngineChange}
							name="displacement"
							value={displacement}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input
							label="FUEL INDUCTION"
							onChange={handleEngineChange}
							name="fuelInduction"
							value={fuelInduction}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input label="MAX TORQUE" onChange={handleEngineChange} name="maxTorque" value={maxTorque} />
					</Grid>
					<Grid item xs={6}>
						<Input
							label="FUEL QUALITY"
							onChange={handleEngineChange}
							name="fuelQuality"
							value={fuelQuality}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input label="MAX HP" onChange={handleEngineChange} name="maxHP" value={maxHP} />
					</Grid>
					<Grid item xs={6}>
						<Input label="REDLINE RPM" onChange={handleEngineChange} name="redLineRPM" value={redLineRPM} />
					</Grid>
					<Grid item xs={6}>
						<Input label="STROKE" onChange={handleEngineChange} name="stroke" value={stroke} />
					</Grid>
					<Grid item xs={6}>
						<Input label="VALVES" onChange={handleEngineChange} name="valves" value={valves} />
					</Grid>
				</Grid>
			</div>
			<h4>TRANSMISSION</h4>
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Grid xs={6}>
						<Input label="SUMMARY" onChange={handleTransmissionChange} name="summary" value={summary} />
					</Grid>
					<Grid xs={6}>
						<Input label="BRAND" onChange={handleTransmissionChange} name="vehicleBrand" value={vehicleBrand} />
					</Grid>
					<Grid xs={6}>
						<Select
							label="TYPE"
							onChange={handleTransmissionChange}
							name="type"
							value={type}
							autoWidth={true}
							native={true}
							multiple={false}
							options={TYPE}
						/>
					</Grid>
					<Grid xs={6}>
						<Input label="GEARS" onChange={handleTransmissionChange} name="gears" value={gears} />
					</Grid>
				</Grid>
			</div>
		</React.Fragment>
	);
};

interface Props {
	engineAndTransmission: VehicleEngineAndTransmission;
}
export default EngineAndTransmission;
