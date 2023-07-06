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
                {name: 'Иван' , salary: '8000' ,increase:true, id:1},
                {name: 'Вася' , salary: '11900',increase:false, id:2},
                {name: 'Коля' , salary: '21000',increase:true, id:3}
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

    // addItem = (name,salary) =>{

    //     console.log(`___ ${name}  ${salary} `);

    //     this.setState(({data})=>{
    //         let arr=data.slice();
    //         const ff = {
    //             name: name,
    //             salary: salary,
    //             increase:false,
    //             id: this.lastId++
    //         };
          
    //         arr.push(ff);
    //         return{
    //            data: arr
    //         }
    //     })
    // }

    addItem = (name,salary) =>{
    const newItem={
        name,
        salary,
        increase: false,
        id: this.lastId++
    }
    this.setState(({data})=>{
        const newArr = [...data,newItem];
        return {
            data: newArr
        }
    });
    }
    




  render(){
    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                
            </div>
            <EmployeesList 
            data={this.state.data} 
            onDelete={this.deleteItem}
            />
            <EmployeesAddForm
            onAddItem={this.addItem}
            />
        </div>
    )
  }
};

export default App;