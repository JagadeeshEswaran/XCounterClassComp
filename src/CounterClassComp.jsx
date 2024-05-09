import React from "react";

class Counter extends React.Component {
	constructor() {
		super();
		this.state = { count: 0 };
	}

	decrease = () => {
		this.setState((prevState) => ({ count: prevState.count - 1 }));
		// console.log(this.state.count);
	};

	increase = () => {
		this.setState((prevState) => ({ count: prevState.count + 1 }));
	};

	render() {
		return (
			<>
				<section>
					<h1>Counter App</h1>

					<p>Count: {this.state.count}</p>

					<article>
						<button onClick={this.increase}>Increment</button>
						<button onClick={this.decrease}>Decrement</button>
					</article>
				</section>
			</>
		);
	}
}

export default Counter;
