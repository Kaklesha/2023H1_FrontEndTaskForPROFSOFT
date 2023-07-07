import "./app-info.css";

const AppInfo = (props) => {

    const {empAmnt, empIncr} = props;
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании KEK</h1>
            <h2>Общее число сотрудников: {empAmnt}</h2>
            <h2>Премию получат: {empIncr}</h2>
        </div>
    )
}

export default AppInfo;