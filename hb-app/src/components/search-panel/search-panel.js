import { Component } from 'react';
import "./search-panel.css";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    onSearch = (e) => {
        this.props.getTerm(e.target.value);
        this.setState({
            [e.target.name]: e.target.value 
        });
    }

    render() {
        const {term} = this.state;

        return (
            <input 
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
            name='term'
            value={term}
            onChange={this.onSearch}/>
        )
    }
}

export default SearchPanel;