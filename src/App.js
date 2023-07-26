import React from 'react';
import './App.css';
import All from './component/userlist';
const users = [1,2,3,4] 
function App()
{


    return(
      <All users={users}/>
    )
}
export default App;