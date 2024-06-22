import React from "react"

function ArtistCollectionCard(){
     return(              
          <div className="artist-collection-card">
               <img className="artist-collection-card-img" src="https://raw.githubusercontent.com/aldhairescobar/pictobook-images/main/willyprofile.jpg" alt=""/>
               <div className="artist-collection-card-info">
                    <p>Photographer</p>
                    <h3>Willy Serdan</h3>
               </div>
          </div>
     )
}

export default ArtistCollectionCard

/**
 * Fix: I need more pictures from another artists to get the names and reuse this component.(future)
 * Take name as a props (future)
 */