import React, { Component } from 'react'
import { Consumer } from  '../../context'
import Spinner from '../layout/Spinner'
import Post from './Post'

export default class Posts extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { post_list, heading } = value;
                    if(post_list === undefined || post_list.length === 0) {
                        return <Spinner />
                    } else {
                        return (
                            <>
                            <h1 className='text-center mb-5 text-light'>{heading}</h1>
                            <div className="row">
                                {post_list.map(item => (
                                    <Post key={item.id} post={item} />
                                ))}
                            </div>
                            </>
                        )
                    }
                }}
            </Consumer>
        )
    }
}
