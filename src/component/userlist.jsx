import React,{Component} from "react";
import Select from "./userselect";
import Info from "./user";

export default class All extends Component
{
   constructor(props)
   {
    super(props);
    this.state ={
        selectedindex:0
    }
    this.changeindex = this.changeindex.bind(this)
   }

   changeindex(index)
   {
    this.setState(
        {
            selectedindex :index
        }
    )
   }


    render()
    {
        const { users } = this.props;
        return(
            <>
           <div className='flexc'>
            <Select users= {users} changeindex={this.changeindex} selectedindex={this.state.selectedindex}/>
            <Info userid={users[this.state.selectedindex]}/>
            </div>
            </>
        )
    }
}