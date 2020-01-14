import * as React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Details, VEHICLE_TYPE, BODY_TYPE, BODY_SUB_TYPE } from '../../contants';
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

const VehicleDetails = (props: Props) => {
	const classes = useStyles();
	const [state, setState] = React.useState({ ...props.vehicleDetails });

	const handleChange = (event: any) => {
		setState({
			...state,
			[event.target.name]: event.target.value,
		});
	};

	const {
		vehicleName,
		vinNumber,
		licencePlate,
		make,
		vehicleType,
		model,
		colour,
		bodyType,
		msrp,
		bodySubType,
		linkedVehicle,
		vehicleImange,
	} = state;

	return (
		<React.Fragment>
			<h4 style={{ color: '#66b3ff' }}>IDENTIFICATION</h4>
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Grid xs={6}>
						<Input
							label="VEHICLE NAME"
							onChange={handleChange}
							name="vehicleName"
							value={vehicleName}
						/>
					</Grid>
					<Grid xs={6}>
						<Input label="VIN/SN NUMBER" onChange={handleChange} name="vinNumber" value={vinNumber} />
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Input
							label="LICENSE PLATE"
							onChange={handleChange}
							name='licencePlate'
							value={licencePlate}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input label="MAKE" onChange={handleChange} name='make' value={make} />
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Select
							onChange={handleChange}
							name='vehicleType'
							value={vehicleType}
							label="VEHICLE TYPE"
							native={true}
							multiple={false}
							options={VEHICLE_TYPE}
							autoWidth={true}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input label="MODEL" onChange={handleChange} name={model} value={model} />
					</Grid>
				</Grid>
			</div>
			<h4 style={{ color: '#66b3ff' }}>ADITIONAL DETIALS</h4>
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Grid xs={6}>
						<Input label="COLOURE" onChange={handleChange} name="colour" value={colour} />
					</Grid>
					<Grid xs={6}>
						<Select
							label="BODY TYPE"
							onChange={handleChange}
							name="bodyType"
							value={bodyType}
							native={true}
							autoWidth={true}
							multiple={false}
							options={BODY_TYPE}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Input label="MSRP" onChange={handleChange} name="msrp" value={msrp} />
					</Grid>
					<Grid item xs={6}>
						<Select
							label="BODY SUB TYPE"
							onChange={handleChange}
							name="bodysubType"
							value={bodySubType}
							native={true}
							autoWidth={true}
							multiple={false}
							options={BODY_SUB_TYPE}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Input
							label="LINKED VEHICLE"
							onChange={handleChange}
							name="linkedVehicle"
							value={linkedVehicle}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input
							label="VEHICLE IMAGE"
							onChange={handleChange}
							name="vehicleImange"
							value={vehicleImange}
						/>
					</Grid>
				</Grid>
			</div>
		</React.Fragment>
	);
};

interface Props {
	vehicleDetails: Details;
}
export default VehicleDetails;
