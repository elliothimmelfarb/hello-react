const Welcome = React.createClass({
  render: function() {
    const message = this.props.message;
    return (
      <div>
        <h1>{message}</h1>
        <p>Let's count stuff!</p>
      </div>
    )
  }
})

const Counter = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },

  render: function() {
    const number = this.props.number;
    return (
      <div>
        <h3>Counter {number}: { this.state.count }</h3>
        <button onClick={ () => this.setState({ count: this.state.count + 1 }) }>+</button>
        <button onClick={ () => this.setState({ count: this.state.count - 1 }) }>-</button>
      </div>
    );
  },
})

const Root = React.createClass({
  getInitialState: function() {
    return {
      counter: 1,
    };
  },

  render: function() {
    let message = 'Hello World';
    let counterID = 1;
    return(
      <div>
        <Welcome message={message} />

        <Counter number={counterID++}/>
        <Counter number={counterID++}/>
        <Counter number={counterID++}/>
      </div>
    )
  },
})


ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
