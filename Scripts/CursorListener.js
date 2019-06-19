

AFRAME.registerComponent('my-cursor-listener', {

    update: function ()
    {
       var myelement = this.el;


        myelement.addEventListener('click', function (evt) {

            console.log("elemento cliccato");
            var selected2BeRemoved = document.getElementsByClassName("selected");
            var transformSelected = document.getElementById("selectTransform");
            console.log(transformSelected);

            if(selected2BeRemoved[0] != undefined)
            {
                selected2BeRemoved[0].classList.remove("selected");
            }
            myelement.classList.add("selected");

            IAMtargetObject.aframeEl = myelement;
            if(transformSelected[transformSelected.selectedIndex].value === "remove")
            {
                document.querySelector('#camera').removeChild(transform);
            }
            else {


            createTransformForMouseControlsIAM(transformSelected[transformSelected.selectedIndex].value, myelement);

            }
            updateEntireLateralBar(myelement);


            /*barDiv.innerHTML = "<a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a>\n" +
                "        <a href=\"#\">About</a>";
            for(var i = 0; i < myelement.attributes.length; i++)
            {
                var attrib = myelement.attributes[i];
                if (attrib.specified) {
                    barDiv.innerHTML+= "<h3>"+attrib.name + " = " + attrib.value+"</h3><\br>";
                }
            }
            var pos_X = myelement.getAttribute("position").x;
            var pos_Y = myelement.getAttribute("position").y;
            var pos_Z = myelement.getAttribute("position").z;
            console.log(pos_X);

            barDiv.innerHTML+= "<h3>Position &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            + " <input type=\"text\" name=\"pos_x\"  style='width:25px;' value="+pos_X+">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            + " <input type=\"text\" name=\"pos_y\"  style='width:25px;' value="+pos_Y+">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            + " <input type=\"text\" name=\"pos_z\"  style='width:25px;' value="+pos_Z+"><br></br>"
            + " <input class=\"jscolor\" value=\"ab2567\"></h3>";*/

            //barDiv.innerHTML+= "<h3>"+attrib.name + " = " + attrib.value+"</h3><\br>";
            openNav();
        });
    }
});

//creazione transform (popolamento valori da usare per creare il controllo)
function createTransformForMouseControlsIAM(transformType, object2btransformed) {

    let values = null;
    let transform = document.querySelector('#transform');
    if(transform === null || transform === undefined) {
        transform = document.createElement('a-entity');
        transform.setAttribute('id', 'transform');
        object2btransformed.appendChild(transform);
    }
    else
    {
        transform.parentNode.removeChild(transform);
        transform = document.createElement('a-entity');
        transform.setAttribute('id', 'transform');
        object2btransformed.appendChild(transform);
    }
    //console.log(object2btransformed.getAttribute("bbcenter"))
    transform.setAttribute('position', "2 -1 -5");

    transform.setAttribute('rotation', document.querySelector('[camera]').getAttribute('rotation'));
    if (transformType === 'translate') {
        IAMcurrentControl = 0;
        values = {
            x: {
                tag: 'a-entity',
                id: 'x',
                position: '0.3 0 0.3',
                material: 'color: #ff0000',
                scale: '0.15 0.15 0.15',
                rotation: '0 -45 -90',
                geometry: 'primitive: cone; radiusBottom: 0.25'
            },
            xLine: {
                tag: 'a-entity',
                id: 'xLine',
                lineAttribute: 'start: 0.3, 0, 0.3; end: 0 0 0; color: #ff0000'
            },
            y: {
                tag: 'a-entity',
                id: 'y',
                position: '0 0.3 0',
                material: 'color: #00ff00',
                scale: '0.15 0.15 0.15',
                rotation: '0 0 0',
                geometry: 'primitive: cone; radiusBottom: 0.25'
            },
            yLine: {
                tag: 'a-entity',
                id: 'yLine',
                lineAttribute: 'start: 0, 0.3, 0; end: 0 0 0; color: #00ff00'
            },
            z: {
                tag: 'a-entity',
                id: 'z',
                position: '-0.3 0 0.3',
                material: 'color: #0000ff',
                scale: '0.15 0.15 0.15',
                rotation: '0 45 90',
                geometry: 'primitive: cone; radiusBottom: 0.25'
            },
            zLine: {
                tag: 'a-entity',
                id: 'zLine',
                lineAttribute: 'start: -0.3, 0, 0.3; end: 0 0 0; color: #0000ff'
            },
            all: {
                tag: 'a-entity',
                id: 'all',
                position: '0 0 0',
                material: 'color: #ffffff',
                scale: '0.05 0.05 0.05',
                geometry: 'primitive: sphere'
            }
        }
    } else if (transformType === 'scale') {
        IAMcurrentControl = 1;
        values = {
            x: {
                tag: 'a-entity',
                id: 'x',
                position: '0.2 0 0.2',
                material: 'color: #ff0000',
                scale: '0.06 0.06 0.06',
                rotation: '0 45 0',
                geometry: 'primitive: box'
            },
            xLine: {
                tag: 'a-entity',
                id: 'xLine',
                lineAttribute: 'start: 0.2, 0, 0.2; end: 0 0 0; color: #ff0000'
            },
            y: {
                tag: 'a-entity',
                id: 'y',
                position: '0 0.2 0',
                material: 'color: #00ff00',
                scale: '0.06 0.06 0.06',
                rotation: '0 45 0',
                geometry: 'primitive: box'
            },
            yLine: {
                tag: 'a-entity',
                id: 'yLine',
                lineAttribute: 'start: 0, 0.2, 0; end: 0 0 0; color: #00ff00'
            },
            z: {
                tag: 'a-entity',
                id: 'z',
                position: '-0.2 0 0.2',
                material: 'color: #0000ff',
                scale: '0.06 0.06 0.06',
                rotation: '0 45 0',
                geometry: 'primitive: box'
            },
            zLine: {
                tag: 'a-entity',
                id: 'zLine',
                lineAttribute: 'start: -0.2, 0, 0.2; end: 0 0 0; color: #0000ff'
            },
            all: {
                tag: 'a-entity',
                id: 'all',
                position: '0 0 0',
                material: 'color: #ffffff',
                scale: '0.05 0.05 0.05',
                geometry: 'primitive: box'
            }
        }
    } else if (transformType === 'rotate') {
        IAMcurrentControl = 2;
        values = {
            x: {
                tag: 'a-entity',
                id: 'x',
                position: '0 0 0',
                material: 'color: #ff0000',
                scale: '0.075 0.075 0.075',
                rotation: '0 90 0',
                geometry: 'primitive: torus; radius: 5; radiusTubular: 0.1; segmentsRadial: 100; segmentsTubular: 100'
            },
            xLine: {
                tag: 'a-entity',
                id: 'xLine',
                lineAttribute: 'visible: false'
            },
            y: {
                tag: 'a-entity',
                id: 'y',
                position: '0 0 0',
                material: 'color: #00ff00',
                scale: '0.075 0.075 0.075',
                rotation: '90 0 0',
                geometry: 'primitive: torus; radius: 5; radiusTubular: 0.1; segmentsRadial: 100; segmentsTubular: 100'
            },
            yLine: {
                tag: 'a-entity',
                id: 'yLine',
                lineAttribute: 'visible: false'
            },
            z: {
                tag: 'a-entity',
                id: 'z',
                position: '0 0 0',
                material: 'color: #0000ff',
                scale: '0.075 0.075 0.075',
                rotation: '0 0 0',
                geometry: 'primitive: torus; radius: 5; radiusTubular: 0.1; segmentsRadial: 100; segmentsTubular: 100'
            },
            zLine: {
                tag: 'a-entity',
                id: 'zLine',
                lineAttribute: 'visible: false'
            },
            all: {
                tag: 'a-entity',
                id: 'all',
                position: '0 0 0',
                material: 'color: #ffffff',
                scale: '0.075 0.075 0.075',
                geometry: 'primitive: torus; radius: 6; radiusTubular: 0.1; segmentsRadial: 100; segmentsTubular: 100'
            }
        }
    }
    createControl(transform, values);
}
