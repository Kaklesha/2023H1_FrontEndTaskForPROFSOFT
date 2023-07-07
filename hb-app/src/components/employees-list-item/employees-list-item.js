import "./employees-list-item.css";

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, isIncrease, isRise} = props;
    const incr = isIncrease ? " increase" : "";
    const rise = isRise ? " like" : "";

    return (
        <li className={"list-group-item d-flex justify-content-between" + incr + rise}>
            <span onClick={onToggleProp} className="list-group-item-label" data-toggle="isRise">{name}</span>
            <input type='text' className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className="d-flex justify-content-center align-item-center">
                <button onClick={onToggleProp} type="button"
                    className ="btn-cookie btn-sm"
                    data-toggle="isIncrease">
                    <i className='fas fa-cookie'></i>
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