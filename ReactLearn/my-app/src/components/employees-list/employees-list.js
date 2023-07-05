import EmployeesListItem from "../employeers-list-item/employees-list-item";

import './employees-list.css';


const EmployeesList =({data})=>{

    
   const elements = data.map(item=>{
    return(
        //<EmployeesListItem name={item.name} salary={item.salary}/>
        <EmployeesListItem {...item}/>
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