import React,{ useState,useEffect,  } from 'react';
import  './Style.css';
import Pagination from './Pagination'
import axios from 'axios';

function Header() {
   const [initialData,currentData] = useState('');
   const [query, setQuery] = useState('');
   const [showperpage, setShowPerPage] = useState(8);
   const [pagination, setPagination] = useState({
	   start:0,
	   end: showperpage,
   });

   const onPaginationChange = (start,end) => {
	setPagination({start:start, end:end });
   };
   
  
   
   const setSearchQuery = async()=>{
	   var url = `https://rickandmortyapi.com/api/episode/?name=${query}`;
	   const result = await axios(url);
	  currentData(result.data);
   }
   
   //First Time data load

	useEffect(async () => {
	var url3 = 'https://rickandmortyapi.com/api/episode';
	const initialResult = await axios(url3);
	currentData(initialResult.data);	
	}, []);

   return(
	<>   
    <header>
		<div className="top-head ">
			<div className="container">
				<div className="row">
						<h1>The Rick and Morty</h1>
				</div>
			</div>
		</div>
	</header>
	<section className="top-nav">
			<nav className="navbar navbar-expand-lg py-0">
				<div className="container">
		            <div className="collapse navbar-collapse" id="exCollapsingNavbar2">
							<form className="ml-auto">
							<div className="search">
								<input type="text" value={query} onChange={event => setQuery(event.target.value)} className="form-control" maxLength="64" placeholder="Search" />
								<button type="button" onClick={() =>setSearchQuery()} className="btn btn-search"><i className="fa fa-search"></i></button>
							</div>
						</form>
					</div>
				</div>
			</nav>
		</section>
		
		<section className="banner-sec"/>
			<div className="container">
			<div className="row  pt-3">
					{initialData && initialData.results.slice(pagination.start, pagination.end).map(val=>
						<div className="col-md-3" >
						<div className="card"  style={{marginTop:'40px'}}> 
							<div className="card-body">
									<div className="news-title">
									<h2 className=" title-small"><a href="#">Name: <b><i>{val.name}</i></b></a></h2>
									</div>
									<p>Episode: <b><i>{val.episode}</i></b></p>
					                <p className="card-text"><small className="text-time"><em>Date: {val.air_date}</em></small></p>
							</div>
										 
							</div>
						</div>	
					)}
				</div>
				<Pagination  showperpage={showperpage}
				 onPaginationChange={onPaginationChange}
				 total={initialData.length}
				 />
			</div>
		<section />

	</>	
   );
}
export default Header;