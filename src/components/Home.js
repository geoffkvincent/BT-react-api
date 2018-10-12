import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios'
import {Container, Card, Grid} from 'semantic-ui-react'

class Home extends Component {
  state = { characters: [] }

  componentDidMount() {
    axios.get('https://api.got.show/api/characters/')
    .then( ({data: characters}) => this.setState({characters}) )
  }

  render() {
    const {characters} = this.state
    return (
      <div>
      <Header as='h1' textAlign='center'>Game of Thrones Characteres</Header>
      <Grid >
        
          {characters.map(c =>       
              <Card key={c._id}>
              <Card.Header>{c.name}</Card.Header>
              <Card.Meta>{c.pageRank}</Card.Meta>
              <Card.Description>{c.house}</Card.Description>
              </Card>       
          )}
      </Grid>
      </div>
    );
  }
}

export default Home;
