import React, { Component } from 'react'

class Req6 extends Component {
	constructor(props) {
		super(props)

		this.state = {
			text: '',
			output: '',
			negativeNumbers: []
		}
	}

	handleInputChange = (e) => {
		this.setState({ text: e.target.value })
	}

	convertString = parsedString => {
		let negativeNumbers = [];

		if (parsedString.length < 2) {
			for (let i = parsedString.length; i < 2; i++) {
				parsedString.push('0');
			}
		}

		let convertedString = parsedString.map((number) => {
			if (isNaN(number) || number === '' || number > 1000) {
				number = 0;
			} else {
				number = parseInt(number, 10);
			}

			if (number < 0) {
				negativeNumbers.push(number);
			}

			return number;
		})

		this.setState(prevState => ({
			negativeNumbers: [...prevState.negativeNumbers, ...negativeNumbers]
		}));

		return convertedString;
	}

	parseDelimiter = () => {
		// let delimiter = this.state.text.match(/(?<=^\/\/)(\D)/);
		let delimiter = this.state.text.match(/^\/\/(\D)\n/)

		if (delimiter) return delimiter[1];
	}

	handleSubmit = async (e) => {
		e.preventDefault();

		let delimiter = this.parseDelimiter();
		
		let regex = new RegExp('[\n,'+delimiter+']+','g');
		let parsedString = this.state.text.split(regex);

		let convertedString = await this.convertString(parsedString);

		let sum = convertedString.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		});

		if (this.state.negativeNumbers.length > 0) {
			this.setState({ output: 'Error: No negative numbers allowed - Negative Numbers: ' + this.state.negativeNumbers });
		} else {
			this.setState({ output: sum })
		}

	}
	
	render() {
	
		return (
			<form onSubmit={(e) => this.handleSubmit(e)}>
				<label>
					Input
					<textarea value={this.state.text} onChange={e => this.handleInputChange(e)} />
				</label>
				<button data-testid="submit-button" type="submit">Submit</button>
				<p data-testid="output-field">{this.state.output}</p>
			</form>
		)
	}
}

export default Req6