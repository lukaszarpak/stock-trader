import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/stocks.vue';

export const routes = [
	{ path: '', component: Home },
	{ path: '/stocks-portfolio', component: Portfolio },
	{ path: '/stocks', component: Stocks },
];
