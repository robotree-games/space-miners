import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './Particles.css';

class ParticleBackground extends Component {
    render() {
        return (
            <div className="particle-background">
    
            <Particles
                params={{
                    "particles": {
                    "number": {
                    "value": 60
                    },
                    "size": {
                    "value": 1.5
                    },
                    "color": {
                        "value": "#fff"
                      },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "speed": .8
                    }
                }

                    
                }}/>
            </div>
            )
    }
}
export default ParticleBackground;