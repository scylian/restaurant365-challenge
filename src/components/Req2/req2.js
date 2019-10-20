import React, { Component } from 'react'

class Req2 extends Component {
	constructor(props) {
		super(props)

		this.state = {
			text: '',
			output: ''
		}
	}

	handleInputChange = (e) => {
		this.setState({ text: e.target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		
		let parsedString = this.state.text.split(',');

		if (parsedString.length < 2) {
			for (let i = parsedString.length; i < 2; i++) {
				parsedString.push('0');
			}
		}

		let convertedString = parsedString.map((number) => {
			if (isNaN(number) || number === '') {
				number = 0;
			} else {
				number = parseInt(number, 10);
			}

			return number;
		})
		
		let sum = convertedString.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		});

		this.setState({ output: sum })

	}
	
	render() {
	
		return (
			<form onSubmit={(e) => this.handleSubmit(e)}>
				<label>
					Input
					<input value={this.state.text} onChange={e => this.handleInputChange(e)} />
				</label>
				<button data-testid="submit-button" type="submit">Submit</button>
				<p data-testid="output-field">{this.state.output}</p>
			</form>
		)
	}
}

export default Req2