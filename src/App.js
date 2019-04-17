import React, { Component } from 'react';
import Router from './Router'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      
    };
  }

  updateSearch (event) {
    this.setState({search: event.target.value});
    console.log(event.target.value)
    // added new line
    this.props.updateSearch(event.target.value);
    
  }
  clearSearch =()=> {
    this.setState({
      search: ''
    })
  }
componentDidUpdate(prevProps){
  if(this.props.cart !== prevProps.cart){
    const numItem = this.props.cart.reduce( (acc, current) => acc + current.quantity ,0); 
    this.setState({
      numItem
    })
  }
}


  render(){
    const hasItem = this.state.numItem > 0
    return (
      <div style={{ backgroundColor: '#F8F8F8', borderRadius: '10px' }}>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink style={{ color: 'red' }} to='/'>eGadget</NavLink>
            </Navbar.Brand>
          </Navbar.Header>
      
          <div className="search-box">
            <input  id ='se' className="search-txt" type="text" name="search" ref='search' value = {this.state.search} onChange = {this.updateSearch.bind(this)} placeholder="Type to search" />
            <a className="search-btn" href='#'>
              <i className="fas fa-search"></i>
            </a>
          </div>
          <NavLink to='/cart' onClick ={this.clearSearch}>Cart{ hasItem ? ' ('+this.state.numItem +')': null}</NavLink>
        </Navbar>
      </div>

    )
  }
}



class App extends Component {
  render() {
    return (
      <div className="page-container">
      {/* added new action so that it can connect to store */}
      <Navigation 
        updateSearch={this.props.updateSearch}
        cart={this.props.cart}
        />
      {/*   updateSearch={this.props.updateSearch}*/}
        <Router />
        
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch){
  return {
    updateSearch: searchTerm => {
      dispatch ({
        type: 'UPDATE_SEARCH',
        payload: searchTerm
      })
    }
  }
}

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App));
// export default App;
