export const handleCharacter = async (page) => {
  const urlRequestDefault = 'https://rickandmortyapi.com/api/'
  const characterJson = await fetch(
    `${urlRequestDefault}/character?page=${page}`
  ).then((reponse) => reponse.json())
  return characterJson
}

export const handleCharacterPeerName = async (name) => {
  try {
    const urlRequestDefaultName = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    ).then((response) => response.json())
    const handleCharacter = urlRequestDefaultName.results.map(
      (result, index) => {
        return { result, index }
      }
    )
    return handleCharacter
  } catch (e) {
    return console.log("Let's not create panic")
  }
}
