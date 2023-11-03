export const viewPort = document.querySelector('#viewPort');
export const canvas = document.querySelector('#canvas');
export const massInput = document.querySelector('#massInput');
export const velocityInput = [0,0];

export const accelerationInput = [0, 9.81];

// UI changes
const massUI = document.querySelector('#massUI')
massInput.addEventListener('input',() => {
    massUI.innerHTML = massInput.value
});

const vxInput = document.querySelector('#vxInput');
const vyInput = document.querySelector('#vyInput');
vxInput.addEventListener('input', () => {
    velocityInput[0] = Number(vxInput.value);
});
vyInput.addEventListener('input', () => {
    velocityInput[1] = Number(vyInput.value);
});

const axInput = document.querySelector('#axInput');
const ayInput = document.querySelector('#ayInput');
axInput.addEventListener('input', () => {
    accelerationInput[0] = Number(axInput.value);
});
ayInput.addEventListener('input', () => {
    accelerationInput[1] = Number(ayInput.value);
});

