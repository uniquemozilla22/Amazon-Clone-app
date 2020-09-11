import React, { Component } from 'react'
import Axios from 'axios'

export default class SearchBar extends Component {

    componentDidMount(){
        Axios.get("")
        .then(response=>{
            console.log(response.data)
        })

    }
    render() {
        return (
            <div className="row">
                <div className="col flex" style={{'margin':'10%','marginBottom':'0','paddingTop':'10%'}}>

                <input type="text" style={{'width':'80%','height':'100px',fontSize:'40px',color:'red'}}></input>
                <button type="submit"style={{'width':'10%','height':'100px',fontSize:'25px'}}>Submit</button>
                </div>
            </div>
            )
    }
}
