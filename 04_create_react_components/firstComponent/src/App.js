import React, { Component } from 'react'; // class based component, Life Cycle methods

// create component

// why extends used here?
// we are extending the component class from the react library and we are using the component class to create a component class
class App extends React.Componenet{
    render(){ // render method takes ip and output and renders in the ui
        return(
        <div>
            <h1>Hello World</h1>
        </div>
        );
    }
}

export default App; // export the component
// if you dont export the compoenent default then cannot use in other files



