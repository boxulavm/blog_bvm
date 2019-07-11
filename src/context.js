import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        post_list: [],
        heading: 'Best Blog Ever!'
    }
    
    componentDidMount() {
        setTimeout(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const posts = res.data.slice(0,6);
                // console.log(posts);
                this.setState({post_list: posts});
            })
            .catch(err => console.log(err));
        }, 600);
    }

    render() {
        return (
            <Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;