import Particle from "../classes/particle.js";
import createParticleSVG from "./createSVG.js";

const viewPort = document.querySelector('#view')

const svg = createParticleSVG(10);

viewPort.appendChild(svg);

