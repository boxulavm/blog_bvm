import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'

export default class FullPost extends Component {
    state = {
        full_post: []
    }

    componentDidMount() {
        setTimeout(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(res => {
                this.setState({full_post: res.data});
                // console.log(this.state);
            })
            .catch(err => console.log(err));
        }, 300);
    }

    render(){
        const {full_post} = this.state;
        if(full_post === undefined || full_post.length === 0){
            return <Spinner />
        } else {
            return(
                <>
                <div className="card text-capitalize">
                    <h2 className='card-header text-dark'>{full_post.title}</h2>
                    <div className="card-body">
                        <p>{full_post.body}</p>
                        <p className='mt-3'><i className="fas fa-user"></i> by User: {full_post.userId}</p>
                    </div>
                </div>
                <Link to='/' className='btn btn-primary mt-4 mb-5'><i className='fas fa-arrow-circle-left'></i> Go Back</Link>
                </>
            )
        }
    }
}
