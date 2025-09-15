import React from 'react'
import './products.css'

export default class Products extends React.Component {
    data = [
        ['React', Math.floor(Math.random() * 1000) + 1],
        ['React Native', Math.floor(Math.random() * 1000) + 1],
        ['Node.js', Math.floor(Math.random() * 1000) + 1],
        ['MongoDB', Math.floor(Math.random() * 1000) + 1],
        ['Express.js', Math.floor(Math.random() * 1000) + 1],
        ['IHaveCPU', Math.floor(Math.random() * 1000) + 1]
    ]
    render(){
        return (
            <table border="1" >
                <tr><th>ชื่อ</th><th>ราคา</th></tr>
                {
                    this.data.map(d => {
                        return <tr><td>{d[0]}</td><td>{d[1]}</td></tr>
                    })
                }
            </table >
        )
    }
}