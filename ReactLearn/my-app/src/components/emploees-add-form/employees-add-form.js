
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

    onClickAddItem=(e)=>{
        e.preventDefault();
        this.props.onAddItem( (this.state.name).toString(),Number(this.state.salary))}
    
    onSubmit=(e)=>{
        e.preventDefault();
        if(this.state.name.length<2||!this.state.salary)return;
        this.props.onAddItem(this.state.name,this.state.salary);
        this.setState({
            name:'',
            salary: ''
        })
    }

   render(){

    const{name,salary} = this.state
    return(
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                  <input type="text" 
                  className='form-control new-post-label'
                  placeholder="Как его зовут"  value={name} name="name"
                  onChange={this.onValueChange}/>
                  <input type="number" 
                        className="form-control new-post-label" 
                        placeholder="3\П в RUB" value={salary} name="salary" onChange={this.onValueChange}/>
                
                  <button type="submit"
                        className="btn btn-outline-light" onClick={this.onClickAddItem}>Добавить</button>
            </form>


        </div>
    )
   }
}

export default EmployeesAddForm;