/**
* @author traj3ctory
* @function CardComponent
**/

const Home = ({data}) => {

    console.log(data, 'hello');
    return (
        <div className="movie_card border-0">
            <div className="img_container">
                <img src={data.Poster} alt={data.Title} className="img-fluid" />
                <h4>{data.Title}</h4>
            </div>
        </div>
    );
}

export default Home;
