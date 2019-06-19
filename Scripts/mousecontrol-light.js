let ALstartMovement = null;
let ALstop = null;
let ALmouseDistance = null;
let ALflagMouse = false;
let ALflagEnter = false;
let ALmouseAxis = null;
let ALcontrolElement = null;
let ALtargetElement = null;
let ALtargetElementOriginalValue = null;
//let oldElementTransformPosition = null;
let ALready = false;
var ALnewDistance;
//Variabili per il salvataggio dei parametri della luce
let oldDistance = null;
let oldAngle = null;
let oldLightColor = null;


function oldColorMouse() {
    if (ALmouseAxis === 'distanceSpot')
        return '#ff0000';
    else if (ALmouseAxis === 'angleSpot')
        return '#0000ff';
    else if (ALmouseAxis === 'colorRing' || ALmouseAxis === 'lightnessRing')
        return '#888';
}

AFRAME.registerComponent('trigger-light-bodies', {
    init: function () {
        console.log("hai clickato la luce");
        this.el.addEventListener('click', function (evt) {
            if(!lightBodyVisible){
                appendLightBody();
                lightBodyVisible = true;
            } else {
                removeLightBody();
                lightBodyVisible = false;
            }
        });
    }
});

AFRAME.registerComponent('trigger-light-editor', {
    init: function () {
        console.log("hai clickato la luce");
        this.el.addEventListener('click', function (evt) {
            let targetLightBody = evt.target;
            while (targetLightBody.getAttribute("light") === null) {
                    targetLightBody = targetLightBody.parentEl;
                }
            if (targetObject.aframeEl === null || targetObject.aframeEl !== targetLightBody) {
                targetObject.aframeEl = targetLightBody;
                if(lightBody !== null){
                    if (lightBody !== evt.target){
                        lightBody.setAttribute('scale', '1 1 1');
                        lightBody.setAttribute('class', 'selectable');
                        lightBody = evt.target;
                        lightBody.removeAttribute('class');
                    }
                }else {
                    lightBody = evt.target;
                    lightBody.removeAttribute('class');
                }
                
                createTransform(ALcontrols[0]);
            }
        });
    }
});

AFRAME.registerComponent('mousecontrol-light', {
    init: function () {
        let self = this;
        this.el.addEventListener('mouseenter', function (event) {
            if (!ALflagMouse) {
                ALflagEnter = true;
                ALcontrolElement = event.target;
                ALmouseAxis = ALcontrolElement.id;
                if (ALmouseAxis !== "colorRing" && ALmouseAxis !== 'lightnessRing'){
                    document.querySelector('#' + ALmouseAxis + 'Line').setAttribute('line', {color: '#ffff00'});
                    ALcontrolElement.setAttribute('material', 'color: #ffff00');
                } else {
                    //document.querySelector('#' + ALmouseAxis).object3D.scale.set(1.05 , 1.05 , 1.05);
                    ALcontrolElement.setAttribute('material', {color: '#FFF'});
                }
            }
        });
        this.el.addEventListener('mouseleave', function (event) {
            if (!ALflagMouse && ALflagEnter) {
                ALflagEnter = false;
                ALcontrolElement.setAttribute('material', 'color: ' + oldColorMouse());
                if (ALmouseAxis !== "colorRing" && ALmouseAxis !== 'lightnessRing')
                    document.querySelector('#' + ALmouseAxis + 'Line').setAttribute('line', {color: oldColorMouse()});
                else {
                    ALcontrolElement.setAttribute('material', {color: oldColorMouse()});
                }
                ALmouseAxis = null;
            }
        });
        this.el.addEventListener('mousedown', function (event) {
            document.querySelector('[camera]').removeAttribute('look-controls');
            //inizio click
            ALflagMouse = true;
            ALcontrolElement = event.target;
            ALmouseAxis = ALcontrolElement.id;
            ALtargetElement = targetObject.aframeEl;
            
            if (ALmouseAxis !== 'colorRing' && ALmouseAxis !== 'lightnessRing'){
                document.querySelector('#' + ALmouseAxis + 'Line').setAttribute('line', {color: '#ffff00'});
                ALcontrolElement.setAttribute('material', 'color: #ffff00');
            } else {
                    //controlElement.object3D.scale.set(1.05 , 1.05 , 1.05);
                    ALcontrolElement.setAttribute('material', {color: '#FFF'});
                }
            ALready = true;
            //salvataggio posizione precedente
            if (ALcontrols[currentControl] === 'spot') {
                ALtargetElementOriginalValue = {
                    scale: ALtargetElement.getAttribute('scale'),
                    distance: ALtargetElement.getAttribute('light').distance,
                    angle: ALtargetElement.getAttribute('light').angle};
            } else if (ALcontrols[currentControl] === 'color') {
                //Per la luce uso lo standard: hsl(hue, saturation, lightness).
                let colorStr = ALtargetElement.getAttribute('light').color;
                ALtargetElementOriginalValue = {
                    hue: colorStr.match(/\d+\.\d+|\d+\b|\d+(?=\w)/g).map(function (v) {return +v;})[0],
                    saturation: colorStr.match(/\d+\.\d+|\d+\b|\d+(?=\w)/g).map(function (v) {return +v;})[1],
                    lightness: colorStr.match(/\d+\.\d+|\d+\b|\d+(?=\w)/g).map(function (v) {return +v;})[2]};
            }
        });
        document.addEventListener('mousemove', function (event) {
            if (ALflagMouse) {
                if (ALready) {
                    ALready = false;
                    switch (ALmouseAxis) {
                        case 'distanceSpot':
                        case 'angleSpot':
                            ALstartMovement = (event.clientX / window.innerWidth) * 2 - 1;
                            break;
                        case 'colorRing':
                        case 'lightnessRing':
                            ALstartMovement = -(event.clientY / window.innerHeight) * 2 + 1;
                            break;
                        
                    }
                }
                switch (ALmouseAxis) {
                    case 'distanceSpot':
                    case 'angleSpot':
                        ALstop = (event.clientX / window.innerWidth) * 2 - 1;
                        ALmouseDistance = -ALstartMovement + ALstop;
                        break;
                    case 'colorRing':
                    case 'lightnessRing':
                        ALstop = -(event.clientY / window.innerHeight) * 2 + 1;
                        ALmouseDistance = -ALstartMovement + ALstop;
                        break;
                }
            } else
                ALmouseDistance = null;
        });
        document.addEventListener('mouseup', function (event) {
            //fine click
            if (ALflagMouse) {
                document.querySelector('[camera]').setAttribute('look-controls', {reverseMouseDrag: true});
                ALcontrolElement.setAttribute('material', 'color: ' + oldColorMouse());
                if (ALmouseAxis !== 'colorRing' && ALmouseAxis !== 'lightnessRing')
                    document.querySelector('#' + ALmouseAxis + 'Line').setAttribute('line', {color: oldColorMouse()});
                else {
                    document.querySelector('#' + ALmouseAxis).object3D.scale.set(1 , 1 , 1);
                    ALcontrolElement.setAttribute('material', {color: oldColorMouse()});
                }    
                ALflagMouse = false;
                ALmouseDistance = null;
                ALtargetElementOriginalValue = null;
            }
        });
    },
    tick: function () {
        document.getElementsByTagName('body')[0].onkeyup = function (event) {
            if (targetObject.aframeEl !== null) {
                switch (event.which) {
                    case 90: //z: switch control
                        if(targetObject.aframeEl.getAttribute("light").type === "spot")
                            createTransform(ALcontrols[(currentControl + 1) % ALcontrols.length]);
                        else 
                            createTransform(ALcontrols[(currentControl + 1) % (ALcontrols.length - 1)]);
                        break;
                }
            }
        };
        if (ALflagMouse) {
            switch (ALmouseAxis) {
                case 'distanceSpot':
                    if (ALcontrols[currentControl] === 'spot') {
                        ALnewDistance = ALtargetElementOriginalValue.distance + (ALmouseDistance * 100);
                        if (ALnewDistance < 0)
                            ALnewDistance = 0.01;

                        //Modifica parametri luce
                        ALtargetElement.setAttribute('light', {distance: ALnewDistance});
                        
                        targetObject.aframeEl.querySelector("#spotCone").object3D.position.z = -(ALnewDistance / 2);
                        targetObject.aframeEl.querySelector("#spotCone").object3D.scale.set(ALnewDistance, ALnewDistance, ALnewDistance);
                    }
                    break;
                case 'angleSpot':
                    if (ALcontrols[currentControl] === 'spot') {
                        let newAngle = ALtargetElementOriginalValue.angle + (ALmouseDistance * 100);
                        if (newAngle > 89.9) 
                            newAngle = 89.9;
                        if (newAngle < 0) 
                            newAngle = 0.1;
                        //Modifica parametri luce
                        ALtargetElement.setAttribute('light', {angle: newAngle});
                        //Modifica corpo visibile della luce
                        targetObject.aframeEl.querySelector("#spotCone").setAttribute("geometry", {radiusBottom: Math.tan(newAngle * Math.PI / 180)});
                    }
                    break;
                case 'colorRing':
                    if (ALcontrols[currentControl] === 'color') {
                        let newColor = (ALtargetElementOriginalValue.hue + (ALmouseDistance * 100)) % 360;
                        if (newColor < 0)
                            newColor = 360 + newColor;
                        newColor = parseInt(newColor);

                        //Modifica parametri luce
                        ALtargetElement.setAttribute('light', {color: "hsl(" + newColor + ", 100%, " + ALtargetElementOriginalValue.lightness + "%)"});
                        //Modifica corpo visibile della luce
                        document.querySelector("#colorRing").setAttribute("rotation", {z: newColor});
                    }   
                    break;
                case 'lightnessRing':
                    if (ALcontrols[currentControl] === 'color') {
                        let newLightness = (ALtargetElementOriginalValue.lightness + (ALmouseDistance * 100)) % 100;
                        if (newLightness < 0)
                            newLightness = 100 + newLightness;
                        newLightness = parseInt(newLightness);
                        
                        //Modifica parametri luce
                        ALtargetElement.setAttribute('light', {color: "hsl(" + ALtargetElementOriginalValue.hue + ", 100%, " + newLightness + "%)"});
                        //Modifica corpo visibile della luce
                        document.querySelector("#lightnessRing").setAttribute("rotation", {z: (newLightness * 3.6)});
                    }
                    break;
            }
        }
    }


});

