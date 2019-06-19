var ALfirstHandPosition = null; //posizione della mano nel momento in cui viene chiamato l'evento leap-holdstart
var ALholdStart = false; //indica se l'evento sia stato emesso o meno
var ALtarget = null; //oggetto da trasformare
var ALhand = null; //mano che innesca l'evento
var ALtargetOriginalValue = null; //valore iniziale del target per somma (posizione, scala, rotazione)
var ALaxis = null; //asse scelto per la modifica
//var oldTransformPosition = null; //posizione precedente transform per spostamento
var ALhandTick = null; //posizione della mano al tick della scena (da cui viene sottratta la posizione iniziale del pollice)

//riprinstina il colore degli assi in hold stop
function oldColor() {
    if (ALaxis === 'distanceSpot')
        return '#ff0000';
    else if (ALaxis === 'angleSpot')
        return '#0000ff';
    else if (ALaxis === 'colorRing' || ALaxis === 'lightnessRing')
        return '#888';
}

//mano che innesca l'evento hold start da cui recuperare la posizione delle dita
function selectHand() {
    let hands = document.querySelectorAll('[leap-hand]');
    for (let j = 0; j < hands.length; j++) {
        if (hands[j].components['leap-hand'].getHand() !== undefined && hands[j].components['leap-hand'].getHand().type === hand.type) {
                ALhandTick = hands[j].components['leap-hand'].getHand().pointables[0].tipPosition;
        }
    }
}

AFRAME.registerComponent('holdable-light', {

    init: function () {
        this.el.addEventListener('leap-holdstart', this.onHoldStart.bind(this));
        this.el.addEventListener('leap-holdstop', this.onHoldStop.bind(this));
    },

    tick: function () {
        if (ALholdStart) {
            if (ALaxis !== null) {
                //selezione posizione mano in base all'asse
                selectHand();
                if (ALhandTick !== null && ALhandTick !== undefined) {
                    //modifica del parametro in base all'asse scelto, var i
                    //(differenza tra posizione pollice in holdstart e ad ogni tick)
                    switch (ALaxis) {
                        case 'distanceSpot':
                            if (controls[currentControl] === 'spot') {
                                newDistance = ALtargetOriginalValue.distance + ((ALhandTick[0] - ALfirstHandPosition[0]) * 100) ;
                                if (newDistance < 0)
                                    newDistance = 0.01;

                                //Modifica parametri luce
                                ALtarget.setAttribute('light', {distance: newDistance});

                                //Modifica corpo visibile della luce
                                targetObject.aframeEl.querySelector("#spotCone").object3D.position.z = -(newDistance / 2);
                                targetObject.aframeEl.querySelector("#spotCone").object3D.scale.set(newDistance, newDistance, newDistance);
                            }
                            break;
                        case 'angleSpot':
                            if (controls[currentControl] === 'spot') {
                                let newAngle = targetOriginalValue.angle + ((ALhandTick[0] - ALfirstHandPosition[0]) * 100);
                                if (newAngle > 89.9)
                                    newAngle = 89.9;
                                if (newAngle < 0)
                                    newAngle = 0.1;
                                //Modifica parametri luce
                                ALtarget.setAttribute('light', {angle: newAngle});
                                //Modifica corpo visibile della luce
                                targetObject.aframeEl.querySelector("#spotCone").setAttribute("geometry", {radiusBottom: Math.tan(newAngle * Math.PI / 180)});
                            }
                            break;
                        case 'colorRing':
                            if (controls[currentControl] === 'color') {
                                let newColor = (ALtargetOriginalValue.hue + ((ALhandTick[1] - ALfirstHandPosition[1]) * 360)) % 360;
                                if (newColor < 0)
                                    newColor = 360 + newColor;
                                newColor = parseInt(newColor);

                                //Modifica parametri luce
                                ALtarget.setAttribute('light', {color: "hsl(" + newColor + ", 100%, " + ALtargetOriginalValue.lightness + "%)"});
                                //Modifica corpo visibile della luce
                                document.querySelector("#colorRing").setAttribute("rotation", {z: newColor});
                            }
                            break;
                        case 'lightnessRing':
                            if (controls[currentControl] === 'color') {
                                let newLightness = (ALtargetOriginalValue.lightness + ((ALhandTick[1] - ALfirstHandPosition[1]) * 100)) % 100;
                                if (newLightness < 0)
                                    newLightness = 100 + newLightness;
                                newLightness = parseInt(newLightness);

                                //Modifica parametri luce
                                ALtarget.setAttribute('light', {color: "hsl(" + ALtargetOriginalValue.hue + ", 100%, " + newLightness + "%)"});
                                //Modifica corpo visibile della luce
                                document.querySelector("#lightnessRing").setAttribute("rotation", {z: (newLightness * 3.6)});
                            }
                            break;
                    }
                } else
                //emette l'evento stop perché la mano non è più visibile
                    this.el.emit('leap-holdstop');
            }
        } else
            ALaxis = ALtargetOriginalValue = hand = ALtarget = null;
    },

    onHoldStart: function (e) {

        ALtarget = targetObject.aframeEl;
        ALaxis = e.target.id;
        if (e.detail.hand !== null && e.detail !== undefined && e.detail.hand) {
            //assegnamento mano che innescato l'evento
            ALhand = e.detail.hand;
            ALfirstHandPosition = e.detail.hand.pointables[0].tipPosition;
            //assegnato target dallo script componente
            ALholdStart = true;
            //Cambio del colore se l'oggeto è selezionato
            if (ALaxis !== 'colorRing' && ALaxis !== 'lightnessRing'){
                document.querySelector('#' + ALaxis + 'Line').setAttribute('line', {color: '#ffff00'});
                document.querySelector('#' + ALaxis).setAttribute('material', {color: '#ffff00'});
            } else {
                    document.querySelector('#' + ALaxis).setAttribute('material', {color: '#FFF'});
            }
            console.log("non voglio cancellare la cache!");
            //Salvataggio parametri precedenti
            if (controls[currentControl] === 'spot') {
                ALtargetOriginalValue = {
                    scale: ALtarget.getAttribute('scale'),
                    distance: Altarget.getAttribute('light').distance,
                    angle: ALtarget.getAttribute('light').angle};
            } else if (controls[currentControl] === 'color') {
                //Per la luce uso lo standard: hsl(hue, saturation, lightness).
                let colorStr = ALtarget.getAttribute('light').color;
                ALtargetOriginalValue = {
                    hue: colorStr.match(/\d+\.\d+|\d+\b|\d+(?=\w)/g).map(function (v) {return +v;})[0],
                    saturation: colorStr.match(/\d+\.\d+|\d+\b|\d+(?=\w)/g).map(function (v) {return +v;})[1],
                    lightness: colorStr.match(/\d+\.\d+|\d+\b|\d+(?=\w)/g).map(function (v) {return +v;})[2]};
            }
        }
    },

    onHoldStop: function () {
        //l'evento emesso è stato "stoppato"
        ALholdStart = false;
        //assegnamento colore precedente
        document.querySelector('#' + ALaxis).setAttribute('material', {color: oldColor()});
        if (Alaxis !== "colorRing" && ALaxis !== 'lightnessRing')
            document.querySelector('#' + ALaxis + 'Line').setAttribute('line', {color: oldColor()});

    }
});
