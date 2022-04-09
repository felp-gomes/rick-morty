import React, { Component } from 'react'
import {
  handleCharacter,
  handleCharacterPeerName,
} from '../Components/handleCharacter'
import { Main } from '../Components/Main/Main'
import './style.css'

export class Home extends Component {
  state = {
    page: 1,
    characterJson: [],
    loadCharacters: [],
    loadCharacterPeerName: [],
    searchValue: '',
  }

  async componentDidMount() {
    const { page } = this.state
    const characterJson = await handleCharacter(page)
    const loadCharacters = characterJson.results.map((result, index) => {
      return { result, index }
    })

    this.setState({
      loadCharacters: loadCharacters,
      characterJson: characterJson,
      page: page,
    })
  }

  nextPage = async () => {
    const { page } = this.state
    const characterJson = await handleCharacter(page + 1)
    const loadCharacters = characterJson.results.map((result, index) => {
      return { result, index }
    })
    this.setState({ loadCharacters: loadCharacters, page: page + 1 })
  }

  prevPage = async () => {
    const { page } = this.state
    const characterJson = await handleCharacter(page - 1)

    const loadCharacters = characterJson.results.map((result, index) => {
      return { result, index }
    })
    this.setState({ loadCharacters: loadCharacters, page: page - 1 })
  }

  handleChange = async (e) => {
    const { value } = e.target
    const loadCharacterPeerName = await handleCharacterPeerName(value)

    this.setState({
      loadCharacterPeerName: loadCharacterPeerName,
      searchValue: value,
    })
  }

  render() {
    const { page, loadCharacters, loadCharacterPeerName, searchValue } =
      this.state
    return (
      <>
        <header>
          <h1>API the Rick and Morty</h1>
        </header>
        <nav>
          <input
            type='search'
            onChange={this.handleChange}
            placeholder='Search here!'
          />
        </nav>
        {!searchValue ? (
          <>
            <div className='navigation-pages'>
              {page > 1 ? (
                <button onClick={this.prevPage}>
                  <span>←</span>
                </button>
              ) : (
                <button className='visible' onClick={this.prevPage}>
                  <span>←</span>
                </button>
              )}
              <span className='page'>
                <p>{page}</p>
              </span>
              {page < 42 ? (
                <button onClick={this.nextPage}>
                  <span>→</span>
                </button>
              ) : (
                <button className='visible' onClick={this.nextPage}>
                  <span>→</span>
                </button>
              )}
            </div>
            <Main loadCharacter={loadCharacters} />
          </>
        ) : (
          <Main loadCharacter={loadCharacterPeerName} />
        )}
        <footer>
          <span>©</span> All rights reserved
        </footer>
      </>
    )
  }
}
