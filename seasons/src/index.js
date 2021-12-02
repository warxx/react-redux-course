import React from 'react';
import ReactDom from 'react-dom';

// class App extends React.Component {
//     state = { lat: null, errorMessage: ''};

//     componentDidMount() {
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => this.setState({ lat: position.coords.latitude }),
//             (err) => this.setState({ errorMessage: err.message })
//         );
//     }

//     componentDidUpdate

//     renderContent() {
//         if(this.state.errorMessage && !this.state.lat) {
//             return <div>Error: {this.state.errorMessage}</div>;
//         }

//         if(!this.state.errorMessage && this.state.lat) {
//             return <SeasonDisplay lat={this.state.lat} />;
//         }

//         return <Spinner message="Please accept location request" />;
//     }

//     render() {
//         return (
//             <div className="border red">
//                 {this.renderContent()}
//             </div>
//         );
//     }
// }

class Clock extends React.Component {
    state = {time: ''};

    componentDidMount() {
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()})    
        }, 1000);
    }
    
    render() {
        return (
            <div className="time">
                The time is: {this.state.time}
            </div>
        );
    }
}

ReactDom.render(<Clock />, document.querySelector('#root'));