import React, {useContext} from "react"
import ArtistCollectionCard from "../components/ArtistCollectionCard"
import {Context} from "../Context"
import Image from "../components/Image";
import { getClass } from "../utils/index";
import {useParams} from "react-router-dom"

function ArtistCollection(){
     const {allPhotos} = useContext(Context)
     const {artistName} = useParams()

     const photos = allPhotos.map((photo, i) => {
          if(photo.artist === artistName){
               return <Image key={photo.id} img={photo} className={getClass(i)} />
          }else{
               return null
          }
     });

     return(
          <div className="artist-collection container">
               <ArtistCollectionCard />
               <p className="artist-collection-title">Willy Serdan Collection</p>
               <main className="photos">{photos}</main>
          </div>
     )
}

export default ArtistCollection

/**
 * "ArtistCollectionCard" can take some props like "name - image url" (future)
 * In this component I'm getting the name with useParams and render the photos.
 * The paragraph element can take the name as "props" (future)
 * */