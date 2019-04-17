import React, { Component } from "react"
import { Button, Form, Col, Row, FormControl} from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class CheckOut extends Component {
    onSumbitClick = (e) => {
        this.props.removeEverything()
    }

    render(){
        const buttonStyle = { margin: '20px 0 0 0'}
    return ( 
        <div className="checkout-form">
            <Form horizontal>
                <h3>Please enter your shipping address:</h3>
                <Row>
                    <Col xs={12} md={6}>
                        Last Name:
                    <FormControl type="text" placeholder="Name" />
                    </Col>
                    <Col xs={12} md={6}>
                        First Name:
                    <FormControl type="text" placeholder="Name" />
                    </Col>
                </Row>
                <Col>
                    Street:
            </Col>
                <Col>
                    <FormControl type="text" placeholder="Street" />
                </Col>
                <Col>
                    City:
            </Col>
                <Col>
                    <FormControl type="text" placeholder="City" />
                </Col>
                <Col>
                    Zip Code:
            </Col>
                <Col>
                    <FormControl type="number" placeholder="zipcode" />
                </Col>
            <NavLink to='./done'>
            <Button onClick ={this.onSumbitClick} style={buttonStyle} bsSize='large' bsStyle="primary" type="submit" block>submit</Button>
            </NavLink>
            
            </Form>
        </div>
    )
    }
    
}

function mapStateToProps(state){
    return {}
  }
  
  function mapDispatchToProps(dispatch){
    return {
      removeEverything: () => {
        dispatch ({
          type: 'REMOVE_EVERYTHING'
        })
      }
    }
  }
  



export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(CheckOut)