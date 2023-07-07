import { Component } from 'react';

import "./app-filter.css"

class AppFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            all: "btn btn-light",
            raise: "btn btn-outline-light",
            more: "btn btn-outline-light"
        }
    }

    onFilter = (e) => {
        const faded = "btn btn-outline-light";
        const selected = "btn btn-light";
        this.props.getFilter(e.target.name);
        this.setState(({all, raise, more}) => ({
            all: faded,
            raise: faded,
            more: faded,
            [e.target.name]: selected
        }));
        
    }

    render() {
        const {all, raise, more} = this.state;

        return (
            <div className="btn-group">
                <button
                    className={all}
                    name="all"
                    onClick={this.onFilter}
                    type="button">
                        Все сотрудники
                </button>
                <button
                    className={raise}
                    name="raise"
                    onClick={this.onFilter}
                    type="button">
                        На повышение
                </button>
                <button
                    className={more}
                    name="more"
                    onClick={this.onFilter}
                    type="button">
                        З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;