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
            term: '',
            rise: false,
            cost: false
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
    onToggleProp = (id,prop)=>{

            this.setState(({data})=>({
                data: data.map(item=>{
                    if(item.id===id){
                        return{...item,[prop]: !item[prop]}
                    }
                    return item;
                })
            }))
    }

    searchEmp=(items,term)=>{

        if(term.length===0)return items;

        return items.filter(item=>{
            return item.name.indexOf(term)>-1
        })

    }
 
    onUpdateSearch=(term)=>{
        this.setState({term});
    }
    onfilterRise=(rise)=>{
        this.setState({rise});
    }

    filterRise=(items,rise)=>{

        if(rise===false)return items;
        
       // this.setState({rise});

        return items.filter(item=>{
            if(item.like){ return item}
        })}
       

    onfilterCost=(cost)=>{
        this.setState({cost});
    }

    filterCost=(items,cost)=>{

        if(cost===false)return items;
        
        // this.setState({rise});

        return items.filter(item=>{
            return item.salary.slice(-3,0)>20000
            
        })}
        

  render(){

    const{data,term,rise}=this.state;

    const employees = this.state.data.length;
    const increased = this.state.data.filter(item=>item.increase).length;

    let visibleData=this.searchEmp(data,term);

   visibleData=this.filterRise(visibleData,rise);

   visibleData=this.filterCost(visibleData,cost);



    return(
        <div className="app">
            <AppInfo
        
           employees={employees}
           increased={increased}
            />

            <div className="search-panel">
                <SearchPanel
                onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter
                 onfilterRise={this.onfilterRise}
                 onfilterCost={this.onfilterCost}
                />
                
            </div>
            <EmployeesList 
            data={visibleData} 
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp }
            
            />
            <EmployeesAddForm
            onAddItem={this.addItem} 
            />
        </div>
    )
  }
};

export default App;