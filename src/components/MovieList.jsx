import MovieCard from './MovieCard';
/**
* @author traj3ctory
* @function ListComponent
**/

const Home = ({ header, movies }) => {
  return (
    <div className="card card-body border-0">
      <h5 className='title'>{ header }</h5>
      <div className="movie_list">
        {
          movies?.map((item, i) => {
            return <MovieCard key={i} data={item} />
          })}
      </div>
    </div>
  );
}

export default Home;
