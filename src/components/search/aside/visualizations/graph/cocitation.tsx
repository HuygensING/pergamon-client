import * as React from 'react';
import { ISearchResults } from 'huc-ui-components'
import Graph from './index'

export interface IProps {
	searchResults: ISearchResults
	strength?: any
	distance?: any
}
export interface IState {
	links: any
	loading: boolean
	nodes: any
}
class CoCitationGraph extends React.PureComponent<IProps, IState> {
	public state = {
		links: [],
		loading: true,
		nodes: [],
	}

	public async componentDidMount() {
		let body = JSON.parse(JSON.stringify(this.props.searchResults.query)) 
		body = body.hasOwnProperty('query') ?
			body.query :
			body.hasOwnProperty('post_filter') ?
				body.post_filter :
				{ match_all: {} }	
		body = { query: body }

		const response = await fetch('/api/docsets', {
			body: JSON.stringify(body),
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
			method: 'POST',
		})	

		let location = response.headers.get('Location')
		if (location == null) return
		location = location + '/cocitations'

		const response2 = await fetch(location)
		const data = await response2.json()

		const nodes = data.reduce((prev, curr) => {
			const [item1, item2] = curr.items
			const node1Index = prev.findIndex(n => n.name === item1)
			const node2Index = prev.findIndex(n => n.name === item2)
			if (node1Index === -1) prev.push({ name: item1, group: 1, w: 1 })
			else prev[node1Index].w++
			if (node2Index === -1) prev.push({ name: item2, group: 1, w: 1 })
			else prev[node2Index].w++
			return prev
		}, [])

		const links = data.reduce((prev, curr) => {
			const [item1, item2] = curr.items
			const node1Index = nodes.findIndex(n => n.name === item1)
			const node2Index = nodes.findIndex(n => n.name === item2)
			prev.push({
				source: node1Index,
				target: node2Index,
				w: curr.count
			})
			return prev
		}, [])

		this.setState({ links, loading: false, nodes })
	}

	public render() {
		if (this.state.loading) return <img src="/static/graphics/ui/loader.svg" />

		return (
			<Graph
				links={this.state.links}
				nodes={this.state.nodes}
				{...this.props}
			/>
		)
	}
}

export default CoCitationGraph