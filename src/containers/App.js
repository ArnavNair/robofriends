import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
// Import Statements
import Scroll from '../components/Scroll';
import CardArray from '../components/CardArray';
import './App.css';

class App extends Component{
    constructor(){
        super();

        // Instantiate the component's state 
        this.state = {
            robots: [],
            searchField: ''
        };
    }

    // Update the search field state whenever the user makes a change
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }
    
    render(){
        const {robots, searchField} = this.state;

        // Obtain list of those robots that match the search field
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
        
        return(
            <div className="tc">
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardArray robots = {filteredRobots} />
                </Scroll>
            </div>
        );
    }

    // Once the component is mounted, obtain the robots through an external API
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
                .then(users => this.setState({ robots: users}))
    }
}

export default App;