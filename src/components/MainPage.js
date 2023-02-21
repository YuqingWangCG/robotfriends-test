import './MainPage.css';
import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import Header from './Header';


class MainPage extends Component{
  componentDidMount(){
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const {robots, searchField} = this.props;
    return robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
  }

  render(){

    const {onSearchChange, isPending} = this.props;
    
 
    return isPending ? <h1>Loading...</h1>
      :
      (
        <div className='tc'>
          <Header/>
          <SearchBox searchContent={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={this.filterRobots()}/> 
            </ErrorBoundry>
          </Scroll>
        </div>
      )

  }
  
}

export default MainPage;
