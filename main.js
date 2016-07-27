const Root = React.createClass({

  getInitialState: function() {
    return {
      count: 0,
      time: 0,
      timerId: null,
    }
  },

  addCount: function() {
    console.log('add nums');
    this.setState({ count: this.state.count + 1 });
  },

  subtractCount: function() {
    console.log('subtract nums');
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  },

  toggleTimer: function() {
      if (!this.state.timerId) {
        this.state.timerId = setInterval(() => {
          this.setState({ time: (parseFloat(this.state.time ) + .01).toFixed(2) });
        }, 10);
      } else {
        clearInterval(this.state.timerId);
        this.setState({ timerId: null });
      }
  },

  resetTimer: function() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId);
      this.setState({ timerId: null });
    }
    this.setState({ time: 0 });
  },

  render: function() {
    return(
      <div>
        <h1>Welcome to the Root Component!</h1>
        <p>Let's count stuff</p>

        <h3>Time: { this.state.time }</h3>
        <button onClick={ this.toggleTimer }>{ this.state.timeId ? 'Stop' : "Start" }</button>
        <button onClick={ this.resetTimer }>Reset</button>
        <h3>Counter: { this.state.count }</h3>
        <button onClick={ this.addCount }>+</button>
        <button onClick={ this.subtractCount }>-</button>
      </div>
    )
  },
})


ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
