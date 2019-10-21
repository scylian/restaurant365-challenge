import React from 'react';
import Req6 from './req6';
import { render, cleanup, fireEvent } from '@testing-library/react';

afterEach(cleanup);

test('Correct String Format', async () => {
	const { getByLabelText, getByTestId } = render(<Req6/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1,2' }
	})
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('3');
});

test('Empty Input', async () => {
	const { getByTestId } = render(<Req6/>);

	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('0');
});

test('Single Number Input', async () => {
	const { getByLabelText, getByTestId } = render(<Req6/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1' }
	})
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('1');
});

test('Single Incorrect Input', async () => {
	const { getByLabelText, getByTestId } = render(<Req6/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1,abc' }
	})
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('1');
})

test('Both Incorrect Inputs', async () => {
	const { getByLabelText, getByTestId } = render(<Req6/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: 'abc,defg;' }
	})
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('0');
})

test('More than 2 Inputs', async () => {
	const { getByLabelText, getByTestId } = render(<Req6/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '1,2,3,4,5,6,7,8,9,10,11,12' }
	})
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('78');
})

test('Newline as alternative delimiter', async () => {
	const { getByLabelText, getByTestId } = render(<Req6/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: `1\n2,3` }
	})
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('6');
})

test('Deny Negative Numbers', async () => {
	const { getByLabelText, getByTestId } = render(<Req6/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: `1\n2,3,-10,-12` }
	})
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('Error: No negative numbers allowed - Negative Numbers: -10,-12');
})

test('Invalidate numbers over 1000', async () => {
	const { getByLabelText, getByTestId } = render(<Req6/>);

	const inputField = getByLabelText('Input');
	const outputField = getByTestId('output-field');
	const submitButton = getByTestId('submit-button');

	fireEvent.change(inputField, {
		target: { value: '2,1001,6' }
	})
	
	await fireEvent.click(submitButton);

	expect(outputField.textContent).toBe('8');
})

test('Support Single Custom Delimiter', async () => {
  const { getByLabelText, getByTestId } = render(<Req6/>);

  const inputField = getByLabelText('Input');
  const outputField = getByTestId('output-field');
  const submitButton = getByTestId('submit-button');

  fireEvent.change(inputField, {
    target: { value: '//#\n2#5' }
  })

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe('7')

  fireEvent.change(inputField, {
    target: { value: '//,\n2,ff,100' }
  })

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe('102')
})

test('Incorrect Delimiter Format', async () => {
  const { getByLabelText, getByTestId } = render(<Req6/>);

  const inputField = getByLabelText('Input');
  const outputField = getByTestId('output-field');
  const submitButton = getByTestId('submit-button');

  fireEvent.change(inputField, {
    target: { value: '//#2#5' }
  })

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe('0');

  fireEvent.change(inputField, {
    target: { value: '//##\n2#ff#100' }
  })

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe('0');
})

test('Still support all previous formats', async () => {
  const { getByLabelText, getByTestId } = render(<Req6/>);

  const inputField = getByLabelText('Input');
  const outputField = getByTestId('output-field');
  const submitButton = getByTestId('submit-button');

  fireEvent.change(inputField, {
    target: { value: '//#\n2#5,10,3' }
  })

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe('20')

  fireEvent.change(inputField, {
    target: { value: '//@\n2@ff\n100,10@5' }
  })

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe('117')
})