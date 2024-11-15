import { Link } from "react-router-dom";


import React from "react"; 


function NoPage(){

return(
  <>
  <div id="emnotfound">
    <div class="emnotfound">
        <div class="emnotfound-404">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <Link to="/movies">
            <a href=""> Back To Homepage</a>
        </Link>
      </div>
  </div>
  </>
    )
  };

export default NoPage;
