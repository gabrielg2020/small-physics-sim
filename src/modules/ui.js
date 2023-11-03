export let massInput = 10;
export const velocityInput = [0,0];
export const accelerationInput = [0, 9.81];
export let speedLimit = 300;

const massUIInput = document.querySelector('#massUIInput');
const massUI = document.querySelector('#massUI')
massUIInput.addEventListener('input',() => {
    massUI.innerHTML = massUIInput.value
    massInput = massUIInput.value
});

const vxInput = document.querySelector('#vxInput');
const vyInput = document.querySelector('#vyInput');
vxInput.addEventListener('input', () => {
    setVelocityWithinLimit(vxInput);
});
vyInput.addEventListener('input', () => {
    setVelocityWithinLimit(vyInput);
});

const axInput = document.querySelector('#axInput');
const ayInput = document.querySelector('#ayInput');
axInput.addEventListener('input', () => {
    accelerationInput[0] = Number(axInput.value);
});
ayInput.addEventListener('input', () => {
    accelerationInput[1] = Number(ayInput.value);
});

const speedLimitUIInput = document.querySelector('#speedLimitUIInput');
const speedLimitUI = document.querySelector('#speedLimitUI')
speedLimitUIInput.addEventListener('input',() => {
    speedLimitUI.innerHTML = speedLimitUIInput.value
    speedLimit = speedLimitUIInput.value

    setVelocityWithinLimit(vxInput);
    setVelocityWithinLimit(vyInput);
});

function setVelocityWithinLimit(velocityDOM) {
    const velocity = Number(velocityDOM.value)

    if (velocity <= speedLimit && velocity >= -speedLimit) {
        velocityInput[0] = velocity;
        return
    }
    if (velocity > speedLimit){
        velocityDOM.value = speedLimit;
        velocityInput[0] = speedLimit;
    } else {
        velocityDOM.value = -speedLimit;
        velocityInput[0] = -speedLimit;
    }
}