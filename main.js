const Welcome = React.createClass({
  render: function() {
    const {greeting, info} = this.props
    return (
      <div>
        <h1>{greeting}</h1>
        <p>{info}</p>
      </div>
    )
  }
})

const Counter = React.createClass({

  render: function() {
    const { counterID, addCount, minusCount, count } = this.props
    return (
      <div>
        <h3>Counter { counterID }: { count }</h3>
        <button onClick={ addCount }>+</button>
        <button onClick={ minusCount }>-</button>
      </div>
    );
  },
})

const Root = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      messages: [],
    };
  },

  addCount: function() {
    this.setState({ count: this.state.count + 1 });
  },

  minusCount: function() {
    this.setState({ count: this.state.count - 1 });
  },

  render: function() {
    let message = {
      greeting: 'Hello World',
      info: `Let's count stuff!`,
    };

    const counterProps = {
      addCount: this.addCount,
      minusCount: this.minusCount,
      count: this.state.count,
    }

    return(
      <div>
        <Welcome {...message} />

        <MessageForm />

        <Counter counterID='1' {...counterProps} />
        <Counter counterID='2' {...counterProps} />
        <Counter counterID='3' {...counterProps} />
      </div>
    )
  },
})


ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
