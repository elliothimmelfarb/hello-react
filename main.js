const Welcome = React.createClass({
  render: function() {
    <div>
      <h1>Hello React</h1>
      <p>Let's count stuff!</p>
    </div>
  }
})

const Root = React.createClass({

  getInitialState: function() {
    return {
      counters: {
        one: 0,
        two: 0,
      },
      something: 'This is awesome!'
    };
  },

  addCount: function(event) {
    const counterID = event.target.id;
    const counters = Object.assign({}, this.state.counters);
    counters[counterID]++;
    this.setState({ counters });
  },

  subtractCount: function(arg, event) {
    const counterID = arg;
    if (this.state.counters[counterID] > 0) {
      const counters = Object.assign({}, this.state.counters);
      counters[counterID]--;
      this.setState({ counters });
    }
  },



  render: function() {
    return(
      <div>
        <h1>Welcome to the Root Component!</h1>
        <p>Let's count stuff</p>


        <h3>Counter 1: { this.state.counters.one }</h3>
        <button id='one' onClick={ this.addCount }>+</button>
        <button onClick={ this.subtractCount.bind(this, 'one') }>-</button>

        <h3>Counter 2: { this.state.counters.two }</h3>
        <button id='two' onClick={ this.addCount }>+</button>
        <button onClick={ this.subtractCount.bind(this, 'two') }>-</button>
      </div>
    )
  },
})


ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
