let statesElement = document.getElementById('states')
const infoElement = document.querySelector('#info')

function setUSStates(states) {
    states.forEach((state) => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', state.name);
        optionElement.textContent = state.name;
        statesElement.append(optionElement)

        optionElement.addEventListener('click', () => {
            console.log('working')
            infoElement.innerHTML = `<pre>${JSON.stringify(state, null)}</pre>`
        });
    });
}

async function getUSStates() {
    const response = await fetch('/api/states');
    const states = await response.json();
    setUSStates(states)
}


getUSStates();