export const viewPort = document.querySelector('#viewPort');
export const canvas = document.querySelector('#canvas');
export const massInput = document.querySelector('#massInput');
export const velocityInput = [0,0];

export const a = [0, 9.81];

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

