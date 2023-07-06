import "./employees-list-item.css";
import { Component } from 'react';

class EmployeesListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            increase: false,
            isLike: false
        }
    }

    incrSalary = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    setLike = () => {
        this.setState(({isLiked}) => ({
            isLiked: !isLiked
        }))
    }

    render() {
        const {name, salary} = this.props;
        const {increase, isLiked} = this.state;
        const incr = increase ? " increase" : "";
        const like = isLiked ? " like" : "";
    
        return (
            <li className={"list-group-item d-flex justify-content-between" + incr + like}>
                <span onClick={this.setLike} className="list-group-item-label">{name}</span>
                <input type='text' className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className="d-flex justify-content-center align-item-center">
                    <button onClick={this.incrSalary} type="button"
                        className ="btn-cookie btn-sm">
                        <i className='fas fa-cookie'></i>
                    </button>
    
                    <button type="button"
                        className="btn-trash btn-sm">
                        <i className='fas fa-trash'></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;