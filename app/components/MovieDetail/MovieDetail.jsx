import './_MovieDetail.scss';
import React from 'react';
import _ from 'lodash';
import MovieStore from '../../stores/MovieStore';

const findMovieFromAll = (props) => {
  const title = _.get(props.context, 'params.title', '');
  return MovieStore.getByTitle(title);
};

const MovieTile = (props) => {
  const movie = findMovieFromAll(props) || {};
  return (
    <div className="movie-detail-container">
      <div className="movie-detail-content">
        <div className="pull-left">
          <img height="300px" src={`img/${movie.cover}`} width="200px" />
        </div>
        <div className="pull-right">
          <h2 className="title">{movie.title}</h2>

          <h3 className="year">{movie.year}</h3>

          <p className="description">{movie.description}</p>

          <p>
            <a href="/">
              <i className="fa fa-backward" />
              <span>  Back</span>
            </a>
          </p>
        </div>
      </div>
    </div>);
};

MovieTile.defaultProps = {
  context: {}
};

MovieTile.propTypes = {
  context: React.PropTypes.object
};

export default MovieTile;
