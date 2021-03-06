import React, { Component } from 'react';
import singleMovie from '../../services/singleMovie';
import { Link } from 'react-router-dom';

import './Movie.css';


class Movie extends Component{

    state={
        id:this.props.match.params.id,
        movie:""
    }

    componentDidMount(){
        singleMovie(this.state.id).then((movie)=>{
            console.log(movie)
            this.setState({
                movie:movie.data.data.singleMovies
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    loadMovie(){
        const {_id,
            name,
            image,
            synopsis,
            director,
            duration,
            language,
            genre,
            rating,
            year,
            url} = this.state.movie

            if(!this.state.movie){
                return(
                    <div><h1>Loading...</h1></div>
                )
            }else{
                return(
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={image} alt={name}/>
                            </div>
                            <div className="col movie-info">
                                <h1><strong>{name}</strong>({language}) | {year}</h1>
                                <span><small>Runtime: {duration}</small></span>
                                <h2>Plot:</h2>
                                <h3>{synopsis}</h3>

                            </div>
                            <div className="row justify-content-md-center">
                                <Link className='btn btn-success boton-ver' to={`/ver/${_id}`}>
                                    Watch
                                </Link >
                                <Link className="btn btn-info boton-volver" to='/movies'>
                                    Back
                                </Link>
                            </div>
                            <Link className="btn btn-danger boton-volver" to={`/movie/delete/${_id}`}>
                                    DELETE MOVIE
                                </Link>
                        </div>
                    </div>
                )
            }
    }

    

    render(){
        console.log(this.state);
        return(
            <div>
                {this.loadMovie()}
            </div>
        )
    }
}


export default Movie;