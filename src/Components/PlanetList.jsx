import React from 'react';


class PlanetList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buttonsValue: [5, 10, 25, 50, 100],
            planetPerPage: 10,
            currentPage: 1
        }
    }
    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.innerText)
        });
    }
    currentPageSize =(event) =>{
        this.setState({
            planetPerPage: Number(event.target.innerText),
            currentPage: 1
        })
    }
    morePlanetInfo = (event) => {
        const detail = event.target.innerText ;
        let obj = this.props.planetList.find(o => o.name === detail);
        this.props.morePlanetInfo(obj)
        this.props.history.push('/planet')
    }
    filter =( event ) => {
        this.setState({
            currentPage: 1
        })
        this.props.filterPlanets(event.target.value)
    }
    render() {
        const {buttonsValue, planetPerPage, currentPage } = this.state
        const { planetList } = this.props;


        // Logic for displaying current pagesize
        const indexOfLastListElem = currentPage * planetPerPage;
        const indexOfFirstListElem = indexOfLastListElem - planetPerPage;
        const currentTodos = planetList.slice(indexOfFirstListElem, indexOfLastListElem);


        //  displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(planetList.length / planetPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div>
                <input type="text" onKeyUp={ this.filter }/>
                {
                    buttonsValue.map((btnVal, i) => {
                        return (
                            <button key={i} onClick={this.currentPageSize}>{btnVal}</button>
                        )
                    })
                }
                <ul>
                    <h4>Choose page:</h4>
                    {
                        pageNumbers.map(number => {
                            return (
                                <button
                                    key={number}
                                    onClick={this.handleClick}
                                >
                                    {number}
                                </button>
                            )
                        })
                    }
                </ul>
                <ul>
                    <h3>List of Planets</h3>
                    {
                        currentTodos.map((planet, index) => {
                            return <li key={index}  onClick={this.morePlanetInfo}>{planet.name}</li>;
                        })
                    }
                </ul>
            </div>

        )
    }

}

export default PlanetList;