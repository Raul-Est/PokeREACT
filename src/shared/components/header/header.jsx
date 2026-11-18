import logo from '../../../assets/img/logo.png'
import './Header.css'

export default function Header({ query, onQueryChange, onSearch }) {
  return (
    <header className="pokedex-header">

      <a className="pokedex-brand" href="#kanto" aria-label="Pokédex, inicio">
        <img src={logo} alt="" />
        <span>POKÉDEX</span>
      </a>

      <nav className="pokedex-nav" aria-label="Navegación principal">
        <a href="#kanto">POKÉDEX</a>
        <a href="#types">TYPE MATCHUPS</a>
        <a href="#cries">CRIES ARCHIVE</a>
        <a href="#diagnostics">DIAGNOSTICS</a>
      </nav>

      <form className="header-search" onSubmit={onSearch}>

        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="ID / NAME"
          aria-label="Buscar Pokémon por número o nombre"
        />

        <button type="submit" aria-label="Buscar">
          <span aria-hidden="true">⌕</span>
        </button>

      </form>

    </header>
  );
}

// export default Header