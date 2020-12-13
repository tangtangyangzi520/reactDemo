import React ,{Component,Fragment} from 'react'
import axios from 'axios'
import './style.css'
import XiaojiejieItem from  './xiaojiejieItem' 
class Xiaojiejie extends Component{
    //在某一时刻，可以自动执行的函数
    constructor(props){
        super(props)
        this.state={
            inputValue:"",
            list:[]
        }
    }
    // 数据之前发起请求
    componentDidMount(){
        console.log('111',axios)
       axios.get('https://easy-mock.com/mock/5fd0e7b522db8b018689d986/reactDemo01/xiaojiejie')
       .then((res)=>{
           console.log('获取数据成功',res)
           this.setState({
               list:res.data.data
           })
       })
       .catch((err)=>{
        console.log('获取数据失败',err)
       })
    }
    render() {
        return (
            <Fragment>
              <div>
                  <label htmlFor='jspang'>正价服务</label>
                <input id="jspang" 
                className="input" 
                value={this.state.inputValue} 
                onChange={this.inputChange.bind(this)}
                ref={(input)=>{this.input=input}}
                />
                <button onClick={this.addList.bind(this)}>增加服务</button>
              </div>
              <ul ref={(ul)=>{this.ul=ul}}>
                {
                    this.state.list.map((item,index)=>{
                        return (
                        // <li 
                        // dangerouslySetInnerHTML={{__html:item}} 
                        // key={index+item} 
                        // onClick={this.deleteItem.bind(this,index)}>
                        // </li>

                            <XiaojiejieItem
                             key={index+item}
                             content={item}
                             index={index}
                             list={this.state.list}
                             deleteItem={this.deleteItem.bind(this)}
                              />
                        )
                    })

                    }
              </ul>
            </Fragment>
        )
    }
    inputChange(e){
        this.setState({
            inputValue:this.input.value
        })
    }

    addList(){
      this.setState({
          list:[...this.state.list,this.state.inputValue]
      })

    }
    deleteItem(index){
    let list=this.state.list
    list.splice(index,1)
    this.setState({
        list:list
    })
    }
}
export default Xiaojiejie;