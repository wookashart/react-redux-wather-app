import React from 'react';
import Search from './Search';
import SearchResult from './search/SearchResult';
import { GlobalStyles } from '../styles/GlobalStyles';

export default () => (
	<div>
		<GlobalStyles />
		<Search />
		<SearchResult />
	</div>
);
