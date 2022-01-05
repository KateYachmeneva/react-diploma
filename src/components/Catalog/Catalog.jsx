import React from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';
import Categories from './Categories/Categories.jsx';
import Items from './Items/Items.jsx';

export default function Catalog() {
  return (
    <React.Fragment>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <SearchForm prefix="catalog" />
        <Categories />
        <Items />
      </section>
    </React.Fragment>
  );
}
