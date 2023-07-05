import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesListItem from '../employeers-list-item/employees-list-item';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../emploees-add-form/employees-add-form';
function App(){

    const data = [
        {name: 'Иван' , salary: '8000' ,increase:true },
        {name: 'Вася' , salary: '11900',increase:false },
        {name: 'Коля' , salary: '21000',increase:true }
    ];

    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                
            </div>
            <EmployeesList data={data} />
            <EmployeesAddForm/>
        </div>
    )
};

export default App;