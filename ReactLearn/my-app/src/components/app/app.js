import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesListItem from '../employeers-list-item/employees-list-item';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../emploees-add-form/employees-add-form';

import './app.css';

class App  extends Component { 
    constructor(props){ 
        super(props)
        this.state={
            data: [
                {name: 'Иван' , salary: '8000' ,increase:true, id:1 , like:true},
                {name: 'Вася' , salary: '11900',increase:false, id:2 , like:false},
                {name: 'Коля' , salary: '21000',increase:true, id:3 , like:false}
            ],
           
        }
        this. lastId= 4;
    }
 
    deleteItem =(id)=>{
        //console.log(id)
        this.setState(({data})=>{
            const index = data.findIndex(elem=>elem.id===id )
            //console.log(index);
            // data.splice(index,1);
        //// 1 ver
            // const before = data.slice(0,index);
            // const after = data.slice(index+1);
            // const newArr=[...before,...after];
        //// 2 ver with filter
            const newArr= data.filter(item=>item.id!==id)

            return{
                data: newArr
            }

        })
    }
    addItem = (name,salary) =>{
    const newItem={
        name,
        salary,
        increase: false,
        like: false,
        id: this.lastId++
    }
    this.setState(({data})=>{
        const newArr = [...data,newItem];
        return {
            data: newArr
        }
    });
    }
    ////This is Update random obj (?)
    onToggleIncrease = (id)=>{

            this.setState(({data})=>({
                data: data.map(item=>{
                    if(item.id===id){
                        return{...item,increase: !item.increase}
                    }
                    return item;
                })
            }))
    }

    onToggleRise=(id)=>{
        console.log(`Rise this${id}`);
    }

  render(){

    const employees = this.state.data.length;
    const increased = this.state.data.filter(item=>item.increase).length;
    return(
        <div className="app">
            <AppInfo
          
           employees={employees}
           increased={increased}
            />

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                
            </div>
            <EmployeesList 
            data={this.state.data} 
            onDelete={this.deleteItem}
            onToggleIncrease={this.onToggleIncrease}
            onToggleRise={this.onToggleRise}
            
            />
            <EmployeesAddForm
            onAddItem={this.addItem} 
            />
        </div>
    )
  }
};

export default App;