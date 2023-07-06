import EmployeesListItem from "../employeers-list-item/employees-list-item";

import './employees-list.css';


const EmployeesList =({data, onDelete})=>{

    
   const elements = data.map(item=>{
    const {id, ...itemProps}=item;
    return(
        //<EmployeesListItem name={item.name} salary={item.salary}/>
        // <EmployeesListItem {...item}/>
          <EmployeesListItem 
          key={id} 
          {...itemProps}
          onDelete={()=>onDelete(id)}
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