import React  from 'react';
import Img from 'react-image';

const showImagens = ( props ) =>{
    return(
        <div>
            <Img src={props.url} alt={props.alt} width={150} height={150} />
        </div>
    );
}
export default showImagens;