// import ReactDOM from 'react-dom';


var PubSubManager = {
    subscribers: [],
    options: [],
    subscribe: function(parent, callback) {
        this.subscribers.pop();
         $('.reactDiv canvas:nth-of-type(1)').remove();
        this.subscribers.push({ parent, callback });
        // this.subscribers = [{ parent, callback}];
    },
    optionsApplied: function(name) {
      this.options = name;
      // Notify subscribers of event.
      this.subscribers.forEach(function(subscriber) {
        subscriber.callback(name, subscriber.parent);
      });
    }
};



// setTimeout(function() {
  // ReactDOM.render(React.createElement(App, { context: PubSubManager }), document.getElementById('threeJsHere'));
// }, 0);