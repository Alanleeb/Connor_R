import React, { Fragment } from 'react';
import { Form, Grid, Image, Container, Divider, Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

class AdminDashboard extends React.Component {
    state = { products: [], formValues: { name: '', email: '' } }

    componentDidMount() {
    const { user: { name, email } } = this.props;
    this.setState({ formValues: { name, email } })  
}

profileView = () => {
    const { user } = this.props;
    return (
      <Fragment>
        <Grid.Column width={4}>
          <Image src={user.image} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h1">{`welcome ${user.name}`}</Header>
        </Grid.Column>
      </Fragment>
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
            {/* <Grid.Column>
              <Button onClick={this.toggleEdit}>{ editing ? 'Cancel' : 'Edit' }</Button>
            </Grid.Column> */}
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(AdminDashboard)


