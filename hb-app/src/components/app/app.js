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
                {name: "John Conor", salary: 800, increase: true, id: 1},
                {name: "Peter Parker", salary: 3000, increase: true, id: 2},
                {name: "Carl Johnson", salary: 5000, increase: false, id: 3},
            ]
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
            let newData = [...data];

            const ids = data.map(a => a.id)
            const newId = Math.max.apply(null, ids) + 1

            const employee = {
                name: name,
                salary: salary,
                increase: false,
                id: newId
            };
            newData.push(employee);
            return {
                data: newData
            }
        })
    }

    render() {
        const {data} = this.state

        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;