import * as React from 'react'
import {
	RefinementListFilter,
	SearchBox,
	SearchkitComponent,
	SearchkitManager,
	SearchkitProvider,
	Layout,
	LayoutBody,
	SideBar,
	RangeFilter,
	ResetFilters,
	SearchkitComponentProps
} from 'searchkit'

const searchkit = new SearchkitManager("/api/documents/search", { searchUrlPath: '' })

export interface IProps extends SearchkitComponentProps {
	onChange: (r: any) => void
}
class Facets extends SearchkitComponent<IProps, null> {
	private resultsListener

	public componentDidMount() {
		this.resultsListener = searchkit.addResultsListener(this.props.onChange)
	}

	public componentWillUnmount() {
		this.resultsListener()
	}

	public render() {
		return (
			<SearchkitProvider searchkit={searchkit}>
				<div>
					<ResetFilters />
					<RefinementListFilter
						field="sender"
						id="count_per_sender"
						operator="OR"
						size={10}
						title="Senders"
					/>
					<RefinementListFilter
						field="recipient"
						id="count_per_recipient"
						operator="OR"
						size={10}
						title="Recipients"
					/>
					<RefinementListFilter
						field="senderloc"
						id="count_per_senderloc"
						operator="OR"
						size={10}
						title="Sender Locations"
					/>
					<RefinementListFilter
						field="recipientloc"
						id="count_per_recipientloc"
						operator="OR"
						size={10}
						title="Recipient Locations"
					/>
					<RefinementListFilter
						field="language"
						id="count_per_language"
						operator="OR"
						size={10}
						title="Language"
					/>
				</div>
			</SearchkitProvider>
		)
	}
}

export default Facets