import { Component } from 'react';

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John Conor", salary: 800, isIncrease: false, isRise: false, id: 1},
                {name: "Peter Parker", salary: 3000, isIncrease: false, isRise: false, id: 2},
                {name: "Carl Johnson", salary: 5000, isIncrease: false, isRise: false, id: 3},
            ],
            term: "",
            filter: "all"
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        this.setState(({data}) => {
            const ids = data.map(a => a.id)
            const newId = Math.max.apply(null, ids) + 1

            const employee = {
                name: name,
                salary: salary,
                isIncrease: false,
                isRise: false,
                id: newId
            };
            let newData = [...data, employee];
            return {
                data: newData
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id == id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    getTerm = (term) => {
        this.setState({term});
    }

    getFilter = (filter) => {
        this.setState({filter});
    }

    filterEmps = (items, filter) => {
        switch (filter) {
            case "all": return items;
            case "rise": return items.filter(elem => elem.isRise);
            case "more": return items.filter(elem => elem.salary > 1000)
            default: return items;
        }
    }

    updateEmps = (items, term) => {
        if (term.length == 0){
            return items;
        }
        
        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filterEmps(this.updateEmps(data, term), filter);
        fetch('http://localhost:9000/api/employees', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
        .catch(e => console.log(e))

        return (
            <div className="app">
                <AppInfo
                empAmnt={data.length}
                empIncr={this.state.data.filter(item => item.isIncrease).length}/>
    
                <div className="search-panel">
                    <SearchPanel
                    getTerm={this.getTerm}/>
                    <AppFilter
                    getFilter={this.getFilter}
                    filter={this.state.filter}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;