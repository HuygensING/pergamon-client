import * as React from 'react';
import {Link, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import styled from "styled-components";
import Messages, { addMessage } from 'hire-messages';
import store from "../store";
import Home from './home';
import history from '../store/history';

const App = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const Header = styled.header`
	background: #CCC;
	flex: 1;
	font-size: 2em;
	font-weight: bold;
	height: 8vh;
	line-height: 8vh;
	padding-left: 1vw;
`;

export default () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App>
				<Header>
					<Link to="/">ePistolarium</Link>
				</Header>
				<Route
					component={Home}
					exact
					path="/"
				/>
				{/*{Messages}*/}
			</App>
		</ConnectedRouter>
	</Provider>
);
