import React, { Suspense } from 'react';
import Search from './Search';
import { GlobalStyles } from '../styles/GlobalStyles';

const SearchResult = React.lazy(() => import('./search/SearchResult'));

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<Search />
			<Suspense fallback={<div>Loading...</div>}>
				<SearchResult />
			</Suspense>
		</div>
	);
}

export default App;
