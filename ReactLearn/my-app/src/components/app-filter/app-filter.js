import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component{
    constructor(props){
        super(props);
        this.state={
            rise: false
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
        //  this.setState(({rise})=>{
        //     return {
        //         rise: true
        //     }
        //  })
        //  console.log(`gg ${this.state.rise}`);
        // //this.setState({rise});
        // 
        // console.log(`ggh ${this.state.rise}`);
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
            type='button'>
            З\П более 50000 руб
            </button>
        </div>

    )
   }
}
export default AppFilter;