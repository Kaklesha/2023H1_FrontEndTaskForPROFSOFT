
import './employees-add-form.css';

import {Component} from "react";

class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            salary: 0
        }
    }


    onValueChange=(e)=>{
        this.setState(
            {
                //prop: e.target.value
                [e.target.name]: e.target.value
            }
        )
    }


   render(){

    const{name,salary} = this.state
    return(
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex">
                  <input type="text" 
                  className='form-control new-post-label'
                  placeholder="Как его зовут"  value={name} name="name"
                  onChange={this.onValueChange}/>
                  <input type="number" 
                        className="form-control new-post-label" 
                        placeholder="3\П в RUB" value={salary} name="salary" onChange={this.onValueChange}/>
                
                  <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>


        </div>
    )
   }
}

export default EmployeesAddForm;