import React from 'react'

class Content extends React.Component{
    constructor(){
        super()
        this.state = {
            name: 'ilman teguh prasetya',
            count: 0
        }
        this.tambahCount = this.tambahCount.bind(this)
    }
    tambahCount(){
        this.setState(
            {
                count : this.state.count + 1
            },
        )
    }
    render(){
        return(
            <div>
                <p>Selamat Datang di websitenya <b>{this.state.name}</b>, berikut adalah beberapa fitur pada website ini</p>
                <table>
                    <tr>
                        <td>Count : {this.state.count}</td>
                        <td><button onClick={this.tambahCount}>Tambah</button></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Content