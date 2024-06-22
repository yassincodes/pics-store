import React from "react"

function ArtistCard(){
     return(              
          <div className="artist-card">
               <img className="artist-img" src="https://raw.githubusercontent.com/aldhairescobar/pictobook-images/main/willyprofile.jpg" alt=""/>
               <div className="artist-info">
                    <p>Photographer</p>
                    <h3>Willy Serdan</h3>
               </div>
          </div>
     )
}

export default ArtistCard

/**
 * Fix: I need more pictures from another artists to get the names and reuse this component.
 * Get profile image (props)
 * Get name (props)
 * 
 */