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
          // data: [ {  id:1, name: 'Иван' , salary: '8000' ,increase:false,  like:true},],
          //  data: 
            data: [],
            // [
            //    
            //     {  id:2, name: 'Егор' , salary: '17000' ,increase:false,  like:false},
            //     {  id:3, name: 'Вася' , salary: '25900',increase:false,  like:false},
            //     {  id:4, name: 'Коля' , salary: '21000',increase:true,   like:false}
            // ],



            term: '', filter: 'all', isDown:false,  lastId: 0,
           
        }
      
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
        id: this.state.lastId++
    }
    this.setState(({data})=>{
        const newArr = [...data,newItem];
        return {
            data: newArr
        }
    });
    }


    downloadItemFetch =()=>{
   
        fetch('http://localhost:9000/api/employees',
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
            },
        })

        .then(response=>response.json())

        .then( response=> {this.setState(({data})=> {

                 // let  maxId = 
                    
                 //console.log(`dddd ${maxId}`);

                    const newArr = [...data,...response];
                    console.log(newArr);
                    
                   // console.log(`dddd ${newArr[newArr.length-1]['id']}`);
                        return{
                            data: newArr,
                            isDown: true,
                            lastId: newArr[newArr.length-1]['id']+1
                        }
                    }
                   )}
            )

        //console.log(response)
        .catch(e=>console.log(e));
}


    // addItemFetch = (data,response) =>{
   
    //         fetch('http://localhost:9000/api/employees',
    //         {
    //             method: "GET",
    //             headers: {
    //                 'Accept': 'application/json',
    //             },
    //         })

    //         .then(response=>response.json())

    //         .then(response=>
    //         {
 
    //             this.setState(({data},response)=>
    //             {
    //                 const newArr = [...data,response];
    //                 console.log(newArr);
    //                 return 
    //                 {
    //                     data: newArr
                        
    //                 }
                    
    //             });
    //         })

    //         //console.log(response)
    //         .catch(e=>console.log(e));
    // }

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
 
    filterPost=(items,filter)=>{
            switch(filter)
            {
                case 'rise':
                    return items.filter(item=>item.like);
                case 'moreThen20000':
                    return items.filter(item=> item.salary>20000)
                default:
                    return items
                
            }

    }
    onFilterSelect=(filter)=>{
        this.setState({filter});
    }

  render(){

    const{data,term,filter,isDown}=this.state;


    


if(!isDown)this.downloadItemFetch();

   // const datafetch= 


    //{"id":2,"name":"Title","salary":18000,"increase":true,"like":false}



  //addItemFetch(data,response);

    const employees = this.state.data.length;
    const increased = this.state.data.filter(item=>item.increase).length;

    let visibleData=this.filterPost(this.searchEmp(data,term), filter);
 

    
    
    //http://localhost:9000/api/employees


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
                onFilterSelect={this.onFilterSelect}
                filter={filter}
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