import React from 'react';
import { PropsRoute} from 'react-router-with-props'
import PlanetList from './PlanetList.jsx';
import PlanetInfo from './PlanetInfo.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.planetsName = [];
        this.state = {
            singlePlanet: {},
            planet: [],

        }
    }
    fetchData = (event) => {

        fetch(event)
            .then( result => result.json())
            .then(that => {

                that.results.map(item => this.planetsName.push(item))
                this.setState({planet: this.planetsName});
            })
            .catch(err => {
                console.log('ERROR!' + err)
            });
    }

    componentDidMount() {
        for (let i = 1; i < 8; i++) {
            this.fetchData("https://swapi.co/api/planets/?page=" + i)
        }
    }

    //receving value from input and filtering array to matched results
    filter =( event ) => {
        this.setState({
            planet: this.planetsName.filter(item => item.name.match(event))
        })
    }

    morePlanetInfo = (event) => {
        this.setState({
            singlePlanet: event
        })

    }
    render() {
        const { planet, singlePlanet } = this.state;


        //sorting array of planets
        planet.sort((a, b) => {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        })

        return (
            <div>
                <PropsRoute exact path='/' component={PlanetList}
                            planetList={planet}
                            morePlanetInfo={this.morePlanetInfo}
                            filterPlanets={this.filter}
                />
                <PropsRoute exact path='/planet' component={PlanetInfo}
                            onePlanet={singlePlanet}
                            planetList={planet}
                />
            </div>
        )
    }

}

export default App;