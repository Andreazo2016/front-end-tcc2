import React, {Component} from 'react';
import {OBJModel} from 'react-3d-viewer';
import {Tick,MTLModel} from 'react-3d-viewer'
import './Show3dModel.css'


export default class  Show3dModel extends Component {


    
    render(){
            return(
                <div className="container-3dModel">
                     <div>
                        <MTLModel 
                            enableZoom = {false}
                            texPath=""
                            mtl={this.props.mtl}
                            src={this.props.obj}
                        />
                    </div>
                </div>              
            )
    }
    
}
