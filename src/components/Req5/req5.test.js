import React from 'react';
import Req5 from './req5';
import { render, cleanup, fireEvent } from '@testing-library/react';

afterEach(cleanup);

test('Correct String Format', () => {
	const { getByLabelText, getByTestId } = render(<Req5/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1,2' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('3');
});

test('Empty Input', () => {
	const { getByTestId } = render(<Req5/>);

	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('0');
});

test('Single Number Input', () => {
	const { getByLabelText, getByTestId } = render(<Req5/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('1');
});

test('Single Incorrect Input', () => {
	const { getByLabelText, getByTestId } = render(<Req5/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1,abc' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('1');
})

test('Both Incorrect Inputs', () => {
	const { getByLabelText, getByTestId } = render(<Req5/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: 'abc,defg;' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('0');
})

test('More than 2 Inputs', () => {
	const { getByLabelText, getByTestId } = render(<Req5/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1,2,3,4,5,6,7,8,9,10,11,12' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('78');
})

test('Newline as alternative delimiter', () => {
	const { getByLabelText, getByTestId } = render(<Req5/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: `1\n2,3` }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('6');
})

test('Deny Negative Numbers', () => {
	const { getByLabelText, getByTestId } = render(<Req5/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: `1\n2,3,-10,-12` }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('Error: No negative numbers allowed - Negative Numbers: -10,-12');
})

test('Invalidate numbers over 1000', () => {
	const { getByLabelText, getByTestId } = render(<Req5/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '2,1001,6' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('8');
})