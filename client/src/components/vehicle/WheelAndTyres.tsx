import * as React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { VehicleWheelAndTyre, BRAKE_SYSTEM, DRIVE_TYPE } from '../../contants';
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

const WheelAndTyre = (props: Props) => {
	const classes = useStyles();
	const [state, setState] = React.useState({ ...props.wheelAndTyre });

	const handleChange = (event: any) => {
		setState({
			...state,
			[event.target.name]: event.target.value,
		});
	};

	const {
		driveType,
		brackSystem,
		frontTrackSystem,
		wheelBase,
		frontWheelDiameter,
		rearWheelDiameter,
		rearAxel,
		frontTyreType,
		frontTyrePSI,
		rearTyreType,
		rearTyrePSI,
	} = state;

	return (
		<React.Fragment>
			<h4 style={{ color: '#66b3ff' }}>WHEEL AND TYRES</h4>
			<h4>ENGINE</h4>
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Grid xs={6}>
						<Select
							label="DRIVE TYPE"
							onChange={handleChange}
							name="driveType"
							value={driveType}
							options={DRIVE_TYPE}
							native={true}
							multiple={false}
							autoWidth={true}
						/>
					</Grid>
					<Grid xs={6}>
						<Select
							label="BRAKE SYSTEM"
							onChange={handleChange}
							name="brackSystem"
							value={brackSystem}
							options={BRAKE_SYSTEM}
							native={true}
							multiple={false}
							autoWidth={true}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Input
							label="FRONT TRACK SYSTEM"
							onChange={handleChange}
							name="frontTrackSystem"
							value={frontTrackSystem}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input label="WHEEL BASE" onChange={handleChange} name="wheelBase" value={wheelBase} />
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Input
							label="FRONT WHEEL DIAMETER"
							onChange={handleChange}
							name="frontWheelDiameter"
							value={frontWheelDiameter}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input
							label="REAR WHEEL DIAMETER"
							onChange={handleChange}
							name="rearWheelDiameter"
							value={rearWheelDiameter}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input label="REAR ALEX" onChange={handleChange} name="rearAlex" value={rearAxel} />
					</Grid>
					<Grid item xs={6}>
						<Input
							label="FONT TYRE TYPE"
							onChange={handleChange}
							name="frontTyreType"
							value={frontTyreType}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input
							label="REAR TYRE TYPE"
							onChange={handleChange}
							name="rearTyreType"
							value={rearTyreType}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input
							label="FONT TYRE PSI"
							onChange={handleChange}
							name="frontTyrePSI"
							value={frontTyrePSI}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input
							label="REAR TYRE PSI"
							onChange={handleChange}
							name="rearTyrePSI"
							value={rearTyrePSI}
						/>
					</Grid>
				</Grid>
			</div>
		</React.Fragment>
	);
};

interface Props {
	wheelAndTyre: VehicleWheelAndTyre;
}
export default WheelAndTyre;
