import React,{Component} from "react";

export default class Info extends Component
{
  constructor(props)
  {
    super(props)
    this.state =
    {
        user :null
    }
  }

  async getuser(userid)
  {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
    return await response.json()
  }
  componentDidMount()
  {
    this.getuser(this.props.userid).then(user => this.setState({
        user
    }))
}
 componentDidUpdate(prevProps, prevState) {
         if (prevProps.userid !== this.props.userid) {
       this.getuser(this.props.userid).then(user => this.setState({
             user
           }))
         }
    }





    render()
    {
        const { user } = this.state;
        return(
            <>
        {user &&
            <div className="box">
              <div className="infobox">
                <p>id:</p>
                <p>{user.id}</p>
              </div>
              <div className="infobox">
                <p>name:</p>
                <p>{user.name}</p>
              </div>
              <div className="infobox">
                <p>username:</p>
                <p>{user.username}</p>
              </div>
              <div className="infobox">
                <p>email:</p>
                <p>{user.email}</p>
              </div>
              <div className="infobox">
                <p>phone:</p>
                <p>{user.phone}</p>
              </div>
            </div>
    }
            </>
        )
    }
}
