import React, { Fragment } from 'react';
import { Form, Grid, Image, Container, Divider, Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import user from '../reducers/user';
import { updateProduct } from '../reducers/product';

class AdminDashboard extends React.Component {
    state = { products: [], formValues: { name: '', email: '' } }

 componentDidMount() {
    const { user: { name, email } } = this.props;
    this.setState({ formValues: { name, email } })  
}

handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ 
      formValues: {
        ...this.state.formValues,
        [name]: value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {    
        product_name, 
        price, 
        distance_preference,
        city,
        state,
        zip,
        country,
        international,
        brand,
        size,
        gender,
        photo,
        description } = this.state;

    const { dispatch } = this.props;
    dispatch(updateProduct(user.id, {    
        product_name, 
        price, 
        distance_preference,
        city,
        state,
        zip,
        country,
        international,
        brand,
        size,
        gender,
        photo,
        description }))
    this.setState({ 
      editing: false,
      formValues: {
        ...this.state.formValues
      }
     })
  }

//    handleSubmit = event => {
//     event.preventDefault();
//     const { code } = this.state;
//     const { dispatch } = this.props;
//     axios.post('/api/user_promo_codes', { code })
//       .then(res => {
//         dispatch(setHeaders(res.headers));
//         alert("Promo code accepted")  
//         this.props.shareCode(res.data.promo_code)
//         this.setState({ code: "" });
//       }).catch( res => {
//         dispatch(setHeaders(res.response.headers));
//         const message = res.response.data.errors
//         if (message) {
//           return alert(message);
//         }
//         else {
//         return alert("Something went wrong, code not accepted");
//         }
//       })
//   };
profileView = () => {
    const { user } = this.props;
    return (
      <Fragment>
            <HeaderWrap>
          <Header as="h1">{`welcome ${user.name}`}</Header>
        </HeaderWrap>
        <Grid.Column width={4}>
          <Image src={user.image} />
        </Grid.Column>
      </Fragment>
    )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { editing: !state.editing }
    })
  }

  editView = () => {
   // const { user } = this.props;
    const { formValues: { 
        product_name, 
        price, 
        distance_preference,
        city,
        state,
        zip,
        country,
        international,
        brand,
        size,
        gender,
        photo,
        description
    } } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Grid.Column width={4}>
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input
            label="Product Name"
            name="product_name"
            value={product_name}
            required
            onChange={this.handleChange}
          />
          <Form.Input
            label="Price"
            name="price"
            value={price}
            // required
            onChange={this.handleChange}
          />
           <Form.Input
            label="Distance Preference"
            name="distance_preference"
            value={distance_preference}
           // required
            onChange={this.handleChange}
          />
           <Form.Input
            label="City"
            name="city"
            value={city}
            onChange={this.handleChange}
          />
           <Form.Input
            label="State"
            name="state"
            value={state}
            //required
            onChange={this.handleChange}
          />
           <Form.Input
            label="Zip"
            name="zip"
            value={zip}
            onChange={this.handleChange}
          />
           <Form.Input
            label="Country"
            name="country"
            value={country}
            //required
            onChange={this.handleChange}
          />
           <Form.Input
            label="International"
            name="international"
            value={international}
            //required
            onChange={this.handleChange}
          />
           <Form.Input
            label="Brand"
            name="brand"
            value={brand}
            //required
            onChange={this.handleChange}
          />
           <Form.Input
            label="Size"
            name="size"
            value={size}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Gender"
            name="gender"
            value={gender}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Photo"
            name="photo"
            value={photo}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Description"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
          <Button>Add a Product</Button>
        </Grid.Column>
      </Form>
    )
  }

  render() {
    const { editing } = this.state;
    return (
      <Container>
        <Divider hidden />
        <Grid>
          <Grid.Row>
            { editing ? this.editView() : this.profileView() }
            <Grid.Column>
              <Button onClick={this.toggleEdit}>{ editing ? 'Cancel' : 'Add a Product' }</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const HeaderWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(AdminDashboard)


