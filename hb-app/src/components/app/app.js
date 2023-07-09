import { Component, useEffect } from 'react';

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import DataLoader from '../DataLoader/DataLoader';

import "./app.css";
import React from "react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
            term: "",
            filter: "all"
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            fetch(`http://localhost:9000/api/employee/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                }
            });
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
                id: newId,
                name: name,
                salary: Number(salary),
                isIncrease: false,
                isRise: false,
            };
            fetch('http://localhost:9000/api/employee', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: JSON.stringify(employee)
            });
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
                    this.updateData({...item, [prop]: !item[prop]});
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    onChangeSalary = (id, salary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id == id){
                    const num = Number(salary.slice(0, -1))
                    if (num >= 0) {
                        this.updateData({...item, salary: num});
                        return {...item, salary: num}
                    }
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

    loadData = (newData) => {
        this.setState(() => ({
            data: newData
        }))  
    }

    updateData = (employee) => {
        fetch('http://localhost:9000/api/alteremployee', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
            },
            body: JSON.stringify(employee)
        });
    }

    render() {
        const {data, term, filter} = this.state;
        if (data == undefined) {
            return (<DataLoader loadData={this.loadData}/>)
        }
        else {
            const visibleData = this.filterEmps(this.updateEmps(data, term), filter);

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
                        onToggleProp={this.onToggleProp}
                        onChangeSalary={this.onChangeSalary}/>
                    <EmployeesAddForm
                        onAdd={this.addItem}/>
                </div>
            )
        }
    }
}

export default App;