import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa';  
import {createArray} from '../services/createArray'
import Star from './star';

const StarRating = ({totalNumberOfStars = 1}) => {
const [selectedStars, setSelectedStars] = useState(0)

    return ( <div>

        {createArray(totalNumberOfStars).map((el,i)=> <Star key={i} 
        selected = {i < selectedStars}
        onSelect= {()=>setSelectedStars(i++)}

        
        />)}

       
    </div> 
    );
}
 
export default StarRating;