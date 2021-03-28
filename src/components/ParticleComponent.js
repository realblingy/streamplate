import React from 'react';
import Particles from 'react-particles-js';

function ParticleComponent({ children }) {
    return (
    <div
        style={{
        position: "absolute",
        zIndex: -100,
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        }}
    >
        <Particles
          params={{
            particles: {
              number: {
                  value: 100,
                  density: {
                      enable: true,
                      value_area: 3000
                  }
              },
              collisions: {
                  enable: false,
              },
              color: {
                  value: '#4eb5f1'
              },
              opacity: {
                  value: 0.5,
                  anim: {
                      enable: true
                  }
              },
              shape: {
                  type: "circle",
              },
              size: {
                  value: 10,
                  random: true,
                  anim: {
                      enable: true,
                      speed: 0.05
                  }
              },
          }
          }}
        />
    { children }
    </div>
    )
}

export default ParticleComponent
