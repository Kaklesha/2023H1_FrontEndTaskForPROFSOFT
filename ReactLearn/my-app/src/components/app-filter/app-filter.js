import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component{
    constructor(props){
        super(props);
        this.state={
            rise: false,
            cost: false
        }
    }

    

    onRise=(e)=>{
        const rise = e.target.value;

            console.log(`gg ${rise}`);
            this.props.onfilterRise(rise);

            this.setState(({rise})=>{
                return {
                    rise: false
                }
             })
             console.log(`gg ${rise}`);

    }   
    onCost=(e)=>{
        const cost = e.target.value;

            console.log(`cc ${cost}`);
            this.props.onfilterCost(cost);

            this.setState(({cost})=>{
                return {
                    cost: false
                }
             })
             console.log(`cc ${cost}`);

    } 

   render(){
    return(
        <div className="btn-group">
            <button
            className='btn btn-light'
            type='button'>
            Все сотрудники
            </button>

            <button
            className='btn btn-outline-light'
            type='button'
          //  value={this.setState({rise: true})}
          value={true}
            onClick={this.onRise}>
            На повышение
            
            </button>

            <button
            className='btn btn-outline-light'
            type='button'  value={true}
            onClick={this.onCost}>
            З\П более 50000 руб
            </button>
        </div>

    )
   }
}
export default AppFilter;