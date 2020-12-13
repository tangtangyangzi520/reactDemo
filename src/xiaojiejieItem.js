import React, { Component } from 'react';
import propTypes from 'prop-types'
class XiaojiejieItem extends Component {
    constructor(props){
      super(props)
      this.handleClick=this.handleClick.bind(this)
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('asfas',nextProps.content)
        if(nextProps.content!==this.props.content){
            return true
        }else{
            return false
        }
        

    }
    state = {  }
    render() { 
        return ( 
        <li  onClick={this.handleClick}>{this.props.avname}为你服务{this.props.content}</li>
         );
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}
XiaojiejieItem.propTypes={
    avname:propTypes.string.isRequired,
    content:propTypes.string,
    index:propTypes.number,
    deleteItem:propTypes.func
}
XiaojiejieItem.defaultProps={
    avname:'小红'  
}
export default XiaojiejieItem;