import React from 'react';

class PlanetInfo extends React.Component {
    backToPlanetList = () => {
        this.props.history.push('/')
    }
    render(){
        const {onePlanet} = this.props;
        return (
            <div>
                <button onClick={this.backToPlanetList}>Back to the list</button>
                <h1>name: {onePlanet.name}</h1>
                <p>climate: {onePlanet.climate}</p>
                <p>diameter: {onePlanet.diameter}</p>
                <p>rotation period: {onePlanet.rotation_period}</p>
            </div>
        )
    }
}

export default PlanetInfo