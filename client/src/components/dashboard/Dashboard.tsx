import React from 'react';
import { match, RouterProps } from 'react-router';
import clsx from 'clsx';
import {
	CssBaseline,
	Drawer,
	AppBar,
	Toolbar,
	Typography,
	Divider,
	IconButton,
	Badge,
	Container,
	List,
	ListItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, ChevronLeft, Notifications, DriveEta } from '@material-ui/icons';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DashboardRouter from './DashboardRouter';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		background: '#f2f2f2',
		color: 'black'
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		background: '#f2f2f2',
		color: '#4d4d4d'
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
	drawerPaper: {
		background: 'black',
		color: 'white',
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9),
		},
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 240,
	},
}));

export default function Dashboard(props: Props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} >
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
					>
						<Menu />
					</IconButton>
					<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
						Dashboard
					</Typography>
					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							<Notifications />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeft />
					</IconButton>
				</div>
				<Divider />
				<List>
					<ListItem button onClick={() => props.history.push('/dashboard')}>
						<ListItemIcon style={{color: 'white'}}>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary="Dashboard" />
					</ListItem>
					<ListItem button onClick={() => props.history.push('/dashboard/vehicle')}>
					<ListItemIcon style={{color: 'white'}}>
								<DriveEta />
							</ListItemIcon>
							<ListItemText primary="Vehicle" />
					</ListItem>
				</List>
				<Divider />

				<Divider />
				{/* <List>{secondaryListItems}</List> */}
			</Drawer>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="lg" className={classes.container}>
					<DashboardRouter />
				</Container>
			</main>
		</div>
	);
}


export interface Props extends RouterProps {
	match: match<{}>;
  }
  