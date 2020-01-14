import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputProps } from '@material-ui/core';

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
    width: '80%'

  },
  label: {
    fontWeight: 'lighter',
    color: '#a6a6a6'
  },

  input: {
    height: '50px',
    width: '85%',
    color: '#a6a6a6',
    border: '1px solid #d9d9d9',
    borderTopLeftRadius: '25px',
    borderTopRightRadius: '25px',
    borderBottomLeftRadius: '25px',
    borderBottomRightRadius: '25px',
    paddingTop: '5px',
    paddingBottom: '5px',
    fontWeight: 'lighter',
    paddingLeft: '20px',
  },
  
  sufixInput: {
    height: '50px',
    width: '85%',
    color: '#a6a6a6',
    border: '1px solid #d9d9d9',
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '25px',
    paddingTop: '5px',
    paddingBottom: '5px',
    fontWeight: 'lighter',
    paddingLeft: '20px',
  },

  prefixInput: {
    height: '50px',
    width: '85%',
    color: '#a6a6a6',
    border: '1px solid #d9d9d9',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    paddingTop: '5px',
    paddingBottom: '5px',
    fontWeight: 'lighter',
    paddingLeft: '20px',
  },

  prefixAndSufixInput: {
    height: '50px',
    width: '85%',
    color: '#a6a6a6',
    border: '1px solid #d9d9d9',
    paddingTop: '5px',
    paddingBottom: '5px',
    fontWeight: 'lighter',
    paddingLeft: '20px',
  },

	prefix: {
    float: 'left',
    border: '2px solid  #d9d9d9',
    height: '50px',
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '25px',
    width: 'auto',
    background: '#d9d9d9',
    fontWeight: 'lighter',
    paddingTop: '10px',
    paddingLeft: '20px',
    paddingRight: '10px'
	},
	sufix: {
    position: 'absolute',
    float: 'right',
    border: '2px solid #d9d9d9',
    height: '50px',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    width: 'auto',
    background: '#d9d9d9',
    fontWeight: 'lighter',
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '10px',
    paddingRight: '20px'
	},
}));

const Input = (props: Props) => {
	const classes = useStyles();
  const { sufix, prefix, label, value, name, onChange } = props;
  let inputClassName = classes.input

  if (sufix) {
    inputClassName = classes.sufixInput;
  } if (prefix) {
    inputClassName = classes.prefixInput;
  } if(sufix && prefix) {
    inputClassName = classes.prefixAndSufixInput;
  }

	return (
		<div>
			<label className={classes.label} htmlFor="">{label}</label>
			<div className={classes.fieldWrapper}>
        {prefix && <span className={classes.prefix}>{prefix}</span>}
        <input
          className={inputClassName}
          value={value}
          onChange={onChange}
          name={name}
        />
				{sufix && <span className={classes.sufix}>{sufix}</span>}
			</div>
		</div>
	);
};

interface Props extends InputProps {
	sufix?: string;
	prefix?: string;
  label?: string;
  value?: string | number | string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default Input;
