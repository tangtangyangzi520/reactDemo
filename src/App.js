
import React, {Component} from 'react'

class App extends Component{
    render(){
        return (
            <ul className='my-list'>
                <li>
                    {true?'jspang':'技术胖'}
                </li>
                <li>
                    iloveyou 
                </li>
            </ul>
        
        )
        var child1=React.createElement('li',null,'Jspang.com')
        var child2=React.createElement('li',null,'Jspang.com')
        var root=React.createElement('li',{className:'my-list'},'Jspang.com')

    }
}
export default App;