import { useState } from 'react'
import Header from '../shared/components/Header/Header.jsx'
import SearchToolbar from '../shared/components/SearchToolbar/SearchToolbar.jsx';
import PokemonScreen from '../shared/components/PokemonScreen/PokemonScreen.jsx';

function App() {
  return (
    <>
      <Header></Header>,
      <SearchToolbar></SearchToolbar>
      <PokemonScreen></PokemonScreen>
    </>
  );
}

export default App
