import EmployeesListItem from "../employeers-list-item/employees-list-item";

import './employees-list.css';


const EmployeesList =({data, onDelete, onToggleProp})=>{

    
   const elements = data.map(item=>{
    const {id, ...itemProps}=item;
    return(
        //<EmployeesListItem name={item.name} salary={item.salary}/>
        // <EmployeesListItem {...item}/>
          <EmployeesListItem 
          key={id} 
          {...itemProps}
          onDelete={()=>onDelete(id)}
          onToggleProp={(e)=>onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
        
          />
        )
   })


    return(
        <ul className="app-list list-group">
            {/* <EmployeesListItem name="Иван" salary={800}   />
            <EmployeesListItem name="Василий" salary={8000}  />
            <EmployeesListItem name="Саша" salary={7900}  /> */}
            {elements}
        </ul>
    )
}
export default EmployeesList;