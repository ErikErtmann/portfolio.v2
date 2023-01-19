import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function Particle() {
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": -1 //-1 et taustapildiks panna
        },
        "detectRetina": false,
        "fpsLimit": 120,
        "interactivity": {
            "events": {
                "onClick": {
                    "enable": true,
                    "mode": "repulse",

                },
                "onDiv": {
                    "elementId": "repulse-div",
                    "enable": false,
                    "mode": "repulse"
                },
                "onHover": {
                    "enable": true,
                    "mode": "attract",
                    "parallax": {
                        "enable": false,
                        "force": 0.05,
                        "smooth": 20,
                        
                    }
                },
                "resize": true
            },
            "modes": {
                "bubble": {
                    "distance": 40,
                    "duration": 200,
                    "opacity": .05,
                    "size": 6,
                    "speed": 3
                },
                "connect": {
                    "distance": 80,
                    "lineLinked": {
                        "opacity": 0.05
                    },
                    "radius": 60
                },
                "grab": {
                    "distance": 400,
                    "lineLinked": {
                        "opacity": .04
                    }
                },
                "push": {
                    "quantity": 4
                },
                "remove": {
                    "quantity": 2
                },
                "repulse": {
                    "distance": 280,
                    "duration": .02,

                },
                "slow": {
                    "active": false,
                    "radius": 0,
                    "factor": 1
                },
                "pause": {
                    "duration": 0.1,
                },
                "attract": {
                    "distance": 115,
                    "duration": 5,
                    "opacity": 0.05
                },
            }
        },
        "particles": {
            "color": {
                "value": "#ffffff"
            },
            "lineLinked": {
                "blink": true,
                "color": "#00e9ff",
                // "color": "#00e9ff",
                // "color": "#ffffff",
                "consent": false,
                "distance": 150,
                "enable": true,
                "opacity": 0.02,
                "width": 6
            },
            "move": {
                "attract": {
                    "enable": false,
                    "rotate": {
                        "x": 600,
                        "y": 1200
                    }
                },
                "bounce": false,
                "direction": "none",
                "enable": true,
                "outMode": "bounce",
                "random": false,
                "speed": 0.5,
                "straight": false
            },
            "number": {
                "density": {
                    "enable": false,
                    "area": 200
                },
                "limit": 0,
                "value": 400
            },
            "opacity": {
                "animation": {
                    "enable": true,
                    "minimumValue": 0.05,
                    "speed": 0.1,
                    "sync": false
                },
                "random": false,
                "value": 0.02
            },
            "shape": {
                "type": "circle"
            },
            "size": {
                "animation": {
                    "enable": false,
                    "minimumValue": 0.1,
                    "speed": 40,
                    "sync": false
                },
                "random": true,
                "value": 1
            },
            
        },
        "polygon": {
            "draw": {
                "enable": true,
                "lineColor": "rgba(255,255,255,0.2)",
                "lineWidth": 0.5
            },
            "enable": true,
            "move": {
                "radius": 15
            },
            "inline": {
                "arrangement": "equidistant"
            },
            "scale": 2,
            "type": "inline",
        },
        "background": {
            "color": "#000000",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        }
    }
    }

    />
    );
}

export default Particle