import bullsAye from '../assets/bulls-eye.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import meh from '../assets/meh.webp'
import { Image, imageProps } from '@chakra-ui/react';

interface Props{
    rating: number;
}

function Emoji({rating}: Props){
    if(rating<3) return null;

    const emojiMap:{[key:number]: imageProps} = {
        3:{src:meh , alt:'meh', boxSize:'25px'},
        4:{src:thumbsUp , alt:'recommended', boxSize:'25px'},
        5:{src:bullsAye , alt:'exceptional', boxSize:'35px'},
    }

    return (
        <Image {...emojiMap[rating]} marginTop ={1}/>
    )
}
export default Emoji