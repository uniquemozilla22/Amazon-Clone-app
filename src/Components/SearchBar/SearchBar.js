import React, { Component } from 'react'
import Axios from 'axios'
import './SearchBar.css'

export default class SearchBar extends Component {

    componentDidMount(){
        Axios.get("")
        .then(response=>{
            console.log(response.data)
        })

    }
    render() {
        return (
        <div>

            <div className="row pt-100">
                
                <div className="col flex">
                <input type="text" placeholder="Product Name"></input>
                <button type="submit">Submit</button>
                </div>
            </div>
            </div>
            )
    }
}
