import './SearchToolbar.css'

const TYPE_FILTERS = [
  { value: 'all', label: 'TODOS' },
  { value: 'grass', label: 'PLANTA' },
  { value: 'fire', label: 'FUEGO' },
  { value: 'water', label: 'AGUA' },
  { value: 'electric', label: 'ELÉC' },
  { value: 'psychic', label: 'PSI' },
]

function SearchToolbar({ query, onQueryChange, onSearch, activeFilter, onTypeFilter }) {
  return (
    <section className="search-toolbar" id="types" aria-label="Búsqueda y filtros">
      <form className="number-search" onSubmit={onSearch}>
        <span className="search-icon" aria-hidden="true">⌕</span>
        <div className="number-search__fields">

          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Número de Pokédex"
            aria-label="Número o nombre de Pokémon"
          />
          <button type="button" onClick={() => onQueryChange('')}>
            RESET
          </button>
          <button className="search-submit" type="submit">
            Buscar
          </button>
        </div>
      </form>

      <div className="type-filters" aria-label="Filtrar por tipo">
        <span className="filter-label">FILTRO:</span>
        {TYPE_FILTERS.map((filter) => (
          <button
            className={activeFilter === filter.value
              ? 'filter-button is-active'
              : 'filter-button'}
            key={filter.value}
            type="button"
            aria-pressed={activeFilter === filter.value}
            onClick={() => onTypeFilter(filter.value)}
          >
          {filter.label}
          </button>
        ))}
      </div>
    </section>
  )
}

export default SearchToolbar
