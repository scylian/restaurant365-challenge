import React from 'react';
import Req2 from './req2';
import { render, cleanup, fireEvent } from '@testing-library/react';

afterEach(cleanup);

test('Correct String Format', () => {
	const { getByLabelText, getByTestId } = render(<Req2/>);

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
	const { getByTestId } = render(<Req2/>);

	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('0');
});

test('Single Number Input', () => {
	const { getByLabelText, getByTestId } = render(<Req2/>);

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
	const { getByLabelText, getByTestId } = render(<Req2/>);

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
	const { getByLabelText, getByTestId } = render(<Req2/>);

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
	const { getByLabelText, getByTestId } = render(<Req2/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1,2,3,4,5,6,7,8,9,10,11,12' }
	})
	
	fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('78');
})