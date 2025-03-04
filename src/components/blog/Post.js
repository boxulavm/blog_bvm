import React from 'react'
import './post.css'
import { Link } from 'react-router-dom'
import {Spring, config} from 'react-spring/renderprops'


const Post = props => {
    const { post } = props;
    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{delay: 400}} 
            >
            {props =>
                 <div style={props} className='col-lg-4 col-md-6'>
                     <div className="card mb-4 shadow">
                        <div className="card-img-wrap">
                            <img className="card-img-top" src={`https://source.unsplash.com/random/350x35${post.id}` } alt="Card cap" />
                        </div>
                        <div className="card-body">
                            <h5 className='text-capitalize card-title'>{post.title}</h5>
                            <Link to={`fullPost/${post.id}`} className='btn btn-primary mt-3' >
                                Full Post <i className="fas fa-arrow-circle-right"></i>
                            </Link>
                        </div>
                    </div>
                 </div>}
        </Spring>
    )
}

export default Post