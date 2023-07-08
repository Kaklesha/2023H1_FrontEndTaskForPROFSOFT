import { Component } from 'react';

import "./app-filter.css"

class AppFilter extends Component {
    constructor(props){
        super(props);
    }

    onFilter = (e) => {
        const faded = "btn btn-outline-light";
        const selected = "btn btn-light";
        this.props.getFilter(e.target.name);
    }

    render() {
        const buttonsData = [
            {name: 'all', label: "Все сотрудники"},
            {name: 'rise', label: "На повышение"},
            {name: 'more', label: "З/П больше 1000$"},
        ];
        const buttons = buttonsData.map(({name, label}) => {
            return (
                <button
                className= {name == this.props.filter ? "btn btn-light" : "btn btn-outline-light"}
                name={name}
                onClick={this.onFilter}
                type="button">
                {label}
                </button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

export default AppFilter;