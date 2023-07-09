import "./employees-list-item.css";

const EmployeesListItem = (props) => {

    const {key, name, salary, onDelete, onToggleProp, onChangeSalary, isIncrease, isRise} = props;
    const incr = isIncrease ? " increase" : "";
    const rise = isRise ? " like" : "";

    return (
        <li className={"list-group-item d-flex justify-content-between" + incr + rise}>
            <span onClick={onToggleProp} className="list-group-item-label" data-toggle="isRise">{name}</span>
            <input type='text' onBlur={onChangeSalary} className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className="d-flex justify-content-center align-item-center">
                <button onClick={onToggleProp} type="button"
                    className ="btn-up btn-sm"
                    data-toggle="isIncrease">
                    <i className='fas fa-arrow-up'></i>
                </button>

                <button onClick={onDelete} type="button"
                    className="btn-trash btn-sm">
                    <i className='fas fa-trash'></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;