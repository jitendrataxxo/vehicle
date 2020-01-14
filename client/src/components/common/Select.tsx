import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SelectInputProps } from '@material-ui/core/Select/SelectInput';

// Component styles.

const useStyles = makeStyles(theme => ({
	// Make sure the field label is on the left.

	// Allow absolute positioning within the field's wrapper.
	// We need this to make the prefix show inline with the field.
	fieldWrapper: {
		position: 'relative',
		display: 'block',
		margin: '-1px',
		padding: '10px',
		width: '100%',
	},
	label: {
		fontWeight: 'lighter',
    color: '#a6a6a6'
	},

	select: {
		height: '50px',
    width: '85%',
    color: '#a6a6a6',
		borderTopLeftRadius: '25px',
		borderTopRightRadius: '25px',
		borderBottomLeftRadius: '25px',
		borderBottomRightRadius: '25px',
		paddingTop: '5px',
		paddingBottom: '5px',
		fontWeight: 'lighter',
		fontSize: '16px',
    paddingLeft: '20px',
    paddingRight: '10px',
	},
}));

const Select = (props: Props) => {
	const classes = useStyles();
	const { options, label, value, name, onChange } = props;

	return (
		<div>
			<label className={classes.label} htmlFor="">
				{label}
			</label>
			<div className={classes.fieldWrapper}>
				<select value={value} onChange={onChange} className={classes.select} name={name}>
          {options.map((option: string) =><option value={option}>{option}</option>)}
				</select>
			</div>
		</div>
	);
};

interface Props extends SelectInputProps {
	label?: string;
	options: string[];
	value?: string | number | string[];
	onChange?: (e: any) => void;
}
export default Select;
