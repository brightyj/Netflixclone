
import React,{useState,useEffect} from 'react'
import './Rowpost.css'
import axios from '../../components/constants/axios.js';
import YouTube from 'react-youtube';
import {imageUrl} from '../../components/constants/Url.js';
import { api_key } from '../../components/constants/Api.js';

const Rowpost=(props) =>{
    const[rowPost,setrowPost]=useState([])
    const[urlId,seturlId]=useState()
    const[hide,setHide]=useState(false)
    useEffect(()=>{
                axios.get(props.url).then(response=>{
            console.table(response.data)
            setrowPost(response.data.results)
        } ).catch(err=>{
            
        })
          
    },[props.url]);
      
    let opts = {
        height: '290', 
        width:"100%",
        playerVars: {
        autoplay: 1,
        },
    }
   const handleClick=(id)=>
{    
        console.table("xxxxxxxx",id)
        axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then(response=>{
          if( response.data.results.length!==0){
            seturlId(response.data.results[0])}
            else
            {
                console.log("no videos")
            }
         })
                .catch(err=>{
})
      }            
       return (
         <div className='row'style={{ background: 'black' }}>
            
            <h1 >{props.title}</h1> 
            <div className='poster'>
            {
                rowPost.map((obj)=>
               <img  className={props.isSmall?'smallposter':'POST'} src={`${imageUrl+obj.backdrop_path}`}alt="ndnfdjn"onClick={()=>handleClick(obj.id)}/>
                )
                               }
</div>    
     {urlId && <YouTube  videoId={urlId.key}  opts={opts}/>   }   </div>
    )
          }

export default Rowpost
