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
  state = {products: [], category: "", page: 1, total_pages: 0 };
  
  componentDidMount() {
    axios.get('/api/products')
      .then(res => {
        this.setState({ products: res.data.products, total_pages: res.data.total_pages });
        this.props.dispatch(setHeaders(res.headers))
      });
  };

  displayProducts = () => {
    const { products } = this.state;
    let visible = products;
    return products.map( (product, i) => {
      return (
        <Fragment key={i}>
          <DisplayCard>
    
            <CardContent>
              ${product.product_name}
              <br/>
            </CardContent>
          </DisplayCard>
          <Divider hidden />
        </Fragment>
      )
    });
  };

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
const CardGroup = styled.div`
  width: 100%;
  radius: 60%;
`;

export default Home;



