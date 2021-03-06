let startMovement = null;
let stop = null;
let mouseDistance = null;
let flagMouse = false;
let flagEnter = false;
let mouseAxis = null;
let controlElement = null;
let targetElement = null;
let targetElementOriginalValue = null;
let oldElementTransformPosition = null;
let ready = false;
function oldColorMouse () {
    if (mouseAxis === 'x')
        return '#ff0000';
    else if (mouseAxis === 'y')
        return '#00ff00';
    else if (mouseAxis === 'z')
        return '#0000ff';
    else if (mouseAxis === 'all')
        return '#ffffff';
}
AFRAME.registerComponent('mousecontrol', {
    init: function () {
        let self = this;
        this.el.addEventListener('mouseenter', function (event) {
            if(!flagMouse) {
                flagEnter = true;
                controlElement = event.srcElement;
                controlElement.setAttribute('material', 'color: #ffff00');
                mouseAxis = controlElement.id;
                if (mouseAxis !== 'all')
                    document.querySelector('#' + mouseAxis + 'Line').setAttribute('line', {
                        color: '#ffff00'
                    });
            }
        });
        this.el.addEventListener('mouseleave', function (event) {
            if(!flagMouse && flagEnter) {
                flagEnter = false;
                controlElement.setAttribute('material', 'color: ' + oldColorMouse());
                if (mouseAxis !== 'all')
                    document.querySelector('#' + mouseAxis + 'Line').setAttribute('line', {
                        color: oldColorMouse()
                    });
                mouseAxis = null;
            }
        });
        this.el.addEventListener('mousedown', function (event) {
            document.querySelector('[camera]').removeAttribute('look-controls');
			//inizio click
			flagMouse = true;
			controlElement = event.srcElement;
            controlElement.setAttribute('material', 'color: #ffff00');
			mouseAxis = controlElement.id;
            targetElement = IAMtargetObject.aframeEl;
			if(mouseAxis !== 'all')
                document.querySelector('#' + mouseAxis + 'Line').setAttribute('line', {
                    color: '#ffff00'
                });
			ready = true;
            //salvataggio posizione precedente
            if (IAMcontrols[IAMcurrentControl] === 'translate') {
                targetElementOriginalValue = targetElement.getAttribute('position');
                oldElementTransformPosition = document.querySelector('#transform').getAttribute('position');
            } else if (IAMcontrols[IAMcurrentControl] === 'scale')
                targetElementOriginalValue = targetElement.getAttribute('scale');
            else if (IAMcontrols[IAMcurrentControl] === 'rotate')
                targetElementOriginalValue = targetElement.getAttribute('rotation');
        });
		document.addEventListener('mousemove', function (event) {
			if(flagMouse) {
                if(ready) {
                    ready = false;
                    switch(mouseAxis) {
                        case 'x':
                        case 'z':
                            startMovement = (event.clientX / window.innerWidth) * 2 - 1;
                            break;
                        case 'y':
                            startMovement = - (event.clientY / window.innerHeight) * 2 + 1;
                            break;
                        case 'all':
                            startMovement = {
                                x: (event.clientX / window.innerWidth) * 2 - 1,
                                y: - (event.clientY / window.innerHeight) * 2 + 1
                            };
                            break;
                    }
                }
                switch(mouseAxis) {
                    case 'x':
                    case 'z':
                        stop = (event.clientX / window.innerWidth) * 2 - 1;
                        mouseDistance = - startMovement + stop;
                        break;
                    case 'y':
                        stop = - (event.clientY / window.innerHeight) * 2 + 1;
                        mouseDistance = - startMovement + stop;
                        break;
                    case 'all':
                        stop = {
                            x: (event.clientX / window.innerWidth) * 2 - 1,
                            y: - (event.clientY / window.innerHeight) * 2 + 1
                        };
                        //calcolo della distanza per ogni frame
                        let a = new THREE.Vector2(startMovement.x, startMovement.y);
                        let b = new THREE.Vector2(stop.x, stop.y);
                        mouseDistance = a.distanceTo(b);
                        if(startMovement.y > stop.y)
                            mouseDistance *= -1;
                        break;
                }
			} else
				mouseDistance = null;
		});
		document.addEventListener('mouseup', function (event) {
			//fine click
			if(flagMouse) {
			    document.querySelector('[camera]').setAttribute('look-controls', '');
                controlElement.setAttribute('material', 'color: ' + oldColorMouse());
                if (mouseAxis !== 'all')
                    document.querySelector('#' + mouseAxis + 'Line').setAttribute('line', {
                        color: oldColorMouse()
                    });
                flagMouse = false;
                mouseDistance = null;
                targetElementOriginalValue = null;
            }
        });
    },
    tick: function () {

        //used to reduce the movement of the object while using mouse
        const positionSensResistence = 20;
        const rotationSensResistance = 20;
        const scaleSensResistance = 20;

        document.getElementsByTagName('body')[0].onkeyup = function (event) {

            if (IAMtargetObject.aframeEl !== null) {
                switch (event.which) {
                    case 90: //z: switch control
                        IAMcreateTransform(IAMcontrols[(IAMcurrentControl + 1) % IAMcontrols.length]);
                        break;
                }
            }
        };
        let center;
		if(flagMouse) {
			switch (mouseAxis) {
                case 'x':
                    if (IAMcontrols[IAMcurrentControl] === 'translate') {
                        targetElement.setAttribute('position', (targetElementOriginalValue.x + mouseDistance/positionSensResistence) + ' ' + targetElementOriginalValue.y + ' ' + targetElementOriginalValue.z);
                        //spostamento assi assieme all'oggetto target
                        center=(targetElement.getAttribute("box-center")).split(" ");
                        document.querySelector('#transform').setAttribute('position', center[0]+" "+center[1]+"  "+center[2]);
                    } else if (IAMcontrols[IAMcurrentControl] === 'scale') {
                        targetElement.setAttribute('scale', (targetElementOriginalValue.x + mouseDistance/scaleSensResistance) + ' ' + targetElementOriginalValue.y + ' ' + targetElementOriginalValue.z);
                    } else if (IAMcontrols[IAMcurrentControl] === 'rotate') {
                        targetElement.setAttribute('rotation', (targetElementOriginalValue.x + (mouseDistance * 360)/rotationSensResistance) + ' ' + targetElementOriginalValue.y + ' ' + targetElementOriginalValue.z);
                    }
                    break;
                case 'y':
                    if (IAMcontrols[IAMcurrentControl] === 'translate') {
                        targetElement.setAttribute('position', targetElementOriginalValue.x + ' ' + (targetElementOriginalValue.y + mouseDistance/positionSensResistence) + ' ' + targetElementOriginalValue.z);
                        center=(targetElement.getAttribute("box-center")).split(" ");
                        document.querySelector('#transform').setAttribute('position', center[0]+" "+center[1]+"  "+center[2]);
                    } else if (IAMcontrols[IAMcurrentControl] === 'scale') {
                        targetElement.setAttribute('scale', targetElementOriginalValue.x + ' ' + (targetElementOriginalValue.y + mouseDistance/scaleSensResistance) + ' ' + targetElementOriginalValue.z);
                    } else if (IAMcontrols[IAMcurrentControl] === 'rotate') {
                        targetElement.setAttribute('rotation', targetElementOriginalValue.x + ' ' + (targetElementOriginalValue.y + (mouseDistance * 360)/rotationSensResistance) + ' ' + targetElementOriginalValue.z);
                    }
                    break;
                case 'z':
                    if (IAMcontrols[IAMcurrentControl] === 'translate') {
                        targetElement.setAttribute('position', targetElementOriginalValue.x + ' ' + targetElementOriginalValue.y + ' ' + (targetElementOriginalValue.z + mouseDistance/positionSensResistence));
                        center=(targetElement.getAttribute("box-center")).split(" ");
                        document.querySelector('#transform').setAttribute('position', center[0]+" "+center[1]+"  "+center[2]);
                    } else if (IAMcontrols[IAMcurrentControl] === 'scale') {
                        targetElement.setAttribute('scale', targetElementOriginalValue.x + ' ' + targetElementOriginalValue.y + ' ' + (targetElementOriginalValue.z + mouseDistance/scaleSensResistance));
                    } else if (IAMcontrols[IAMcurrentControl] === 'rotate') {
                        targetElement.setAttribute('rotation', targetElementOriginalValue.x + ' ' + targetElementOriginalValue.y + ' ' + (targetElementOriginalValue.z + (mouseDistance * 360)/rotationSensResistance));
                    }
                    break;
                case 'all':
                    if (IAMcontrols[IAMcurrentControl] === 'translate') {
                        targetElement.setAttribute('position', (targetElementOriginalValue.x + mouseDistance/positionSensResistence) + ' ' + (targetElementOriginalValue.y + mouseDistance/positionSensResistence) + ' ' + (targetElementOriginalValue.z + mouseDistance/positionSensResistence));
                        center=(targetElement.getAttribute("box-center")).split(" ");
                        document.querySelector('#transform').setAttribute('position', center[0]+" "+center[1]+"  "+center[2]);
                    } else if (IAMcontrols[IAMcurrentControl] === 'scale') {
                        targetElement.setAttribute('scale', (targetElementOriginalValue.x + mouseDistance/scaleSensResistance) + ' ' + (targetElementOriginalValue.y + mouseDistance/scaleSensResistance) + ' ' + (targetElementOriginalValue.z + mouseDistance/scaleSensResistance));
                    } else if (IAMcontrols[IAMcurrentControl] === 'rotate') {
                        targetElement.setAttribute('rotation', (targetElementOriginalValue.x + (mouseDistance * 360)/rotationSensResistance) + ' ' + (targetElementOriginalValue.y + (mouseDistance * 360)/rotationSensResistance) + ' ' + (targetElementOriginalValue.z + (mouseDistance * 360)/rotationSensResistance));
                    }
                    break;
            }
            updateEntireLateralBar(targetElement);
		}
    }


});
