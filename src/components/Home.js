import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios'
import {Container, Card} from 'semantic-ui-react'

class Home extends Component {
  state = { characters: [] }

  componentDidMount() {
    axios.get('https://api.got.show/api/characters/')
    .then( ({data: characters}) => this.setState({characters}) )
  }

  render() {
    const {characters} = this.state
    return (
      <Container>
        <Header as='h1' textAlign='center'>Game of Thrones Characteres</Header>
        {characters.map(c =>
          <Card key={c._id}>{c.name}</Card>
          )}
      </Container>
    );
  }
}

export default Home;
