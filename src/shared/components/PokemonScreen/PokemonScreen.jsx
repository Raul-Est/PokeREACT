import './PokemonScreen.css'

function getPokemonImage(pokemon) {
  if (pokemon === null || pokemon === undefined) {
    return '';
  }

  const other = pokemon.sprites.other

  if (other && other['official-artwork']) {
    const image = other['official-artwork'].front_default

    if (image) {
      return image
    }
  }

  return pokemon.sprites.front_default
}

function formatId(id) {
  return String(id).padStart(3, '0')
}

function PokemonScreen({
  pokemon,
  previousPokemon,
  nextPokemon,
  isLoading,
  onPrevious,
  onNext,
  onPlayCry
}) {

  let name = 'CARGANDO'
  let id = '---'
  let image = ''
  let previous = 'ANTERIOR'
  let next = 'SIGUIENTE'

  if (pokemon) {
    name = pokemon.name.toUpperCase()
    id = formatId(pokemon.id)
    image = getPokemonImage(pokemon)
  }

  if (previousPokemon) {
    previous = '#' + formatId(previousPokemon.id)
  }

  if (nextPokemon) {
    next = '#' + formatId(nextPokemon.id)
  }

  return (
    <section className="device-panel scan-panel" aria-label="Vista del Pokémon">

      <div className="panel-screws" aria-hidden="true">
        <span></span>
        <span></span>
      </div>

      <div className="scan-screen">

        <div className="scan-header">
          <span>#{id} · {name}</span>
          <span>MODE: OPTIC-CAPTURE</span>
        </div>

        <div className="scan-view">

          {isLoading && (
            <p className="scan-message">BUSCANDO SEÑAL...</p>
          )}

          {!pokemon && !isLoading && (
            <p className="scan-message">SIN SEÑAL</p>
          )}

          {pokemon && !isLoading && (
            <img src={image} alt={pokemon.name} />
          )}

        </div>

        <div className="scan-footer">
          <span>♪ CRY SYNTH:</span>

          <span className="cry-bars" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>

      </div>

      <div className="pokemon-navigation">

        <button
          type="button"
          onClick={onPrevious}
          disabled={!previousPokemon}
        >
          ← {previous}
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={!nextPokemon}
        >
          {next} →
        </button>

      </div>

      <div className="scan-controls">

        <button
          className="cry-button"
          id="cries"
          type="button"
          onClick={onPlayCry}
        >
          INFO CRY
        </button>

        <div className="direction-pad" aria-hidden="true">
          <span className="direction-pad__up"></span>
          <span className="direction-pad__left"></span>
          <span className="direction-pad__center"></span>
          <span className="direction-pad__right"></span>
          <span className="direction-pad__down"></span>
        </div>

      </div>

    </section>
  )
}

export default PokemonScreen