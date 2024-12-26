class CustomControl {
    constructor() {
    }

    onAdd(map) {
        this.map = map;
        this.container = document.createElement('div');
        this.container.className = 'maplibregl-ctrl maplibregl-ctrl-group';
        this.container.innerHTML = `<button id="customControlButton">🔥</button>`;
        this.container.querySelector('#customControlButton').addEventListener('click', () => {
            alert('Button clicked!');
        });

        return this.container;
    }

    onRemove() {
        this.container = null;
        this.map = null;
    }
}

export default CustomControl;
