import "./employees-add-form.css";
import {Component} from 'react';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            salary: ""
        }
    }

    preventMethod = (e) => {
        e.preventDefault();
        const {name, salary} = this.state;
        if (name.length > 3 && salary.length > 0 && salary >= 0){
            this.props.onAdd(this.state.name, this.state.salary);
        }
        this.setState({
            name: "",
            salary: ""
        })
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {onAdd} = this.props;
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form 
                    className="add-form d-flex">
    
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
                    <button onClick={this.preventMethod} type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;