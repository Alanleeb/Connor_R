import React, { Component, Fragment } from 'react';
import { 
  Header, 
  Grid,
  Divider, 
  } from 'semantic-ui-react';
import { setHeaders } from "../reducers/headers"
import axios from 'axios'
import styled from "styled-components"

class Home extends Component {
  state = {products: [] }
  componentDidMount() {
    axios.get('/api/products')
      .then(res => {
        this.setState({ products: res.data.products});
        this.props.dispatch(setHeaders(res.headers))
      });
  };
 
  displayProducts = () => {
    debugger
    const { products } = this.state;
    console.log('hello')
    let visible = products;
    return visible.map( (product, i) => {
      return (
        <Fragment key={i}>
          <DisplayCard>
              <HeaderName>
                {product.product_name.charAt(0).toUpperCase()}{" "}
              </HeaderName>
            <CardContent>
            
              <br/>
              <CardDescription>
        
              </CardDescription>
            </CardContent>
          </DisplayCard>
          <Divider hidden />
        </Fragment>
      )
    });
}
  render() {
    // const { products } = this.state;
    return (
      <Fragment>
        <Header as='h1' textAlign='center'>Home Component</Header>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column mobile={4} computer={16}>
                <HeaderText>
                  Products
                </HeaderText>
                <CardGroup itemsPerRow={1}>
                  {this.displayProducts()}
                </CardGroup>
            </Grid.Column>
          </Grid.Row>
        </Grid> 
      </Fragment> 
    );
  };
}

const HeaderImage = styled.div`
  background-image: url(https://images.unsplash.com/photo-1504643039591-52948e3ddb47?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=caa0ffb3f714ebc5ffded0426b7ff785&auto=format&fit=crop&w=800&q=60);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const HeaderText = styled.h1`
  font-size: 55px;
  color: black;
`;
const DisplayCard = styled.div`
  display: flex;
  border-radius: 6px;
  border: solid black 6px;
  height: 200px;  
`;
const HeaderName = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
`;
const CardContent = styled.h4`
  color: red;
`;
const CardIcon = styled.div`
  width: 20%;
  padding-top: 75px;
  padding-right: 130px;
  color: blue;
  left: 80%;
`;
const CardDescription = styled.div`
  color: #142111;
  justify-content: center;
  font-size: 15px;
`;
const CardGroup = styled.div`
  width: 100%;
  radius: 60%;
`;

export default Home;


