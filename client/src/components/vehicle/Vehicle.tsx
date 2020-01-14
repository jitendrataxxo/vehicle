import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../common/TabPanel';
import { Grid, Paper, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import {Details } from '../../contants';
import WheelAndTyres from './WheelAndTyres';
import VehicleDetails from './VehicleDetails';
import Specification from './Specification';
import EngineAndTransmisson from './EngineAndTransmisson';
import { VEHICLE_DATA, VehicleSpecificationData, VehicleEngineAndTransmissionData, VehicleWheelAndTyreData, VehicleFluidsData } from './mockData';
import Fluids from './VehicleFluids';
import img from './car.png';

function setTabId(index: any) {
	return {
		id: `details-tab-${index}`,
		'aria-controls': `details-tabpanel-${index}`,
	};
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
	gridItem: {
		margin: '3px',
		padding: '3px',
		fontSize: 'small',
	},
	button: {
		margin: theme.spacing(1),
		float: 'right',
		borderRadius: '20px',
	},
}));

export default function Vehicle() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event: any, newValue: any) => {
		setValue(newValue);
	};

	const { abicode, vin, motDetails, licencePlate, model, make, bodyType, colour, price } = VEHICLE_DATA;
	const vehicleDetails: Details = {
		vehicleName: 'Audi',
		vinNumber: vin,
		licencePlate: licencePlate,
		vehicleType: 'Car',
		make: make,
		model: model,
		colour: colour,
		bodyType: bodyType,
		msrp: price,
		bodySubType: 'hatchback',
		linkedVehicle: 'Bus',
		vehicleImange: 'Vehicle Image',
  };
 

	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={8}>
					<h2 style={{ color: '#00cc00' }}>Vehicle Details</h2>
				</Grid>
				<Grid item xs={1}>
					<Button variant="contained" color="secondary" className={classes.button} startIcon={<DeleteIcon />}>
						Delete
					</Button>
				</Grid>
				<Grid item xs={3}>
					<Button variant="contained" color="primary" className={classes.button} endIcon={<Icon>send</Icon>}>
						Create New Vehicle
					</Button>
				</Grid>
			</Grid>
			<Paper style={{ marginBottom: '40px', height: '190px' }}>
				<Grid container spacing={4}>
					<Grid item xs={3}>
						<Paper elevation={0}>
							<img src={img} style={{padding: '20px'}}width="250px" height="165px" alt="car" />
						</Paper>
					</Grid>
					<Grid item xs={3} style={{ height: '195px' }}>
						<Paper elevation={0}>
							<h5 className={classes.gridItem}>AUDI A300 | V1200 </h5>
							<p className={classes.gridItem}>
								Status: <span style={{ color: 'green' }}>ACTIVE</span>
							</p>
							<p className={classes.gridItem}>
								Abi Code: <strong>{abicode}</strong>
							</p>
							<p className={classes.gridItem}>
								Registation: <strong>AN876OP</strong>
							</p>
							<p className={classes.gridItem}>
								VIN Number: <strong>{vin}</strong>
							</p>
							<p className={classes.gridItem}>
								Expiry Date: <strong>{motDetails}</strong>
							</p>
						</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper elevation={0}>
							<p className={classes.gridItem}>
								Booking Status: <strong>Booked</strong>
							</p>
							<p className={classes.gridItem}>
								Booking Start Date: <strong>26/12/2019</strong>
							</p>
							<p className={classes.gridItem}>
								Booking End Date: <strong>28/12/2019</strong>
							</p>
							<p className={classes.gridItem}>
								Booked By: <strong>Joy</strong>
							</p>
							<p className={classes.gridItem}>
								Booking Type: <strong>Self Pickup</strong>
							</p>
						</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper elevation={0}>
							<p className={classes.gridItem}>
								Next Servicing: <strong>20/05/2020</strong>
							</p>
							<p className={classes.gridItem}>
								Emission Expiry Date: <strong>10 OCTOBER 2020</strong>
							</p>
						</Paper>
					</Grid>
				</Grid>
			</Paper>
			<Paper style={{ marginBottom: '40px' }}>
				<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
					<Tab label="Details" {...setTabId(0)} />
					<Tab label="Specification" {...setTabId(1)} />
					<Tab label="Engine & Transmisson" {...setTabId(2)} />
					<Tab label="Wheel & Tyres" {...setTabId(3)} />
					<Tab label="Fluids" {...setTabId(4)} />
				</Tabs>
			</Paper>
			<Paper style={{ marginBottom: '40px' }}>
				<TabPanel value={value} index={0}>
					<VehicleDetails vehicleDetails={vehicleDetails} />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Specification specification={VehicleSpecificationData}/>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<EngineAndTransmisson engineAndTransmission={VehicleEngineAndTransmissionData}/>
				</TabPanel>
				<TabPanel value={value} index={3}>
					<WheelAndTyres wheelAndTyre={VehicleWheelAndTyreData}/>
				</TabPanel>
				<TabPanel value={value} index={4}>
					<Fluids vehicleFluids={VehicleFluidsData}/>
				</TabPanel>
			</Paper>
		</React.Fragment>
	);
}
