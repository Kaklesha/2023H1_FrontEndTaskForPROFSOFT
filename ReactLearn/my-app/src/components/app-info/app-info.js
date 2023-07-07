import './app-info.css';



const AppInfo = (props) =>{
    const {countEmployees} = props;


    return(
        <div className="app-info">
            <h1>Учёт сотрудников в компании Профсофт</h1>
            <h2>Общее число сотрудников:{countEmployees}</h2>
            <h2>Премию получат:</h2>
        </div>
    );
};
export default AppInfo;