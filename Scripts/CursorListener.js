

AFRAME.registerComponent('my-cursor-listener', {

    update: function ()
    {
       var myelement = this.el;


        myelement.addEventListener('click', function (evt) {

            console.log("elemento cliccato");
            var selected2BeRemoved = document.getElementsByClassName("selected");
            var transformSelected = document.querySelector('input[name="switch-transform"]:checked').value;
            console.log(transformSelected);

            if(selected2BeRemoved[0] != undefined)
            {
                selected2BeRemoved[0].classList.remove("selected");
            }
            myelement.classList.add("selected");

            IAMtargetObject.aframeEl = myelement;
            if(transformSelected === "remove")
            {
                //console.log(document.querySelector("[camera]"));
                myelement.removeChild(transform);
            }
            else {


            createTransformForMouseControlsIAM(transformSelected, myelement);

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
    let center;
    let transform = document.querySelector('#transform');
    //this is the standard size that we will use for upgrading the transform axis size.
    const standardBoxSize = 3.5;
    let boundingBoxSizes;
    let muxConst;

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
    center=(object2btransformed.getAttribute("box-center")).split(" ");
    boundingBoxSizes=(object2btransformed.getAttribute("box-size")).split(" ");

    muxConst = getMoltiplicationConstantForTransformScale(boundingBoxSizes, standardBoxSize);

    console.log(muxConst);

    transform.setAttribute('position', center[0]+" "+center[1]+"  "+center[2]);

    transform.setAttribute('rotation', document.querySelector('[camera]').getAttribute('rotation'));


    if (transformType === 'translate') {
        IAMcurrentControl = 0;
        values = {
            x: {
                tag: 'a-entity',
                id: 'x',
                position: 0.3*muxConst+" "+0*muxConst+" "+0.3*muxConst,
                material: 'color: #ff0000',
                scale: 0.15*muxConst+" "+0.15*muxConst+" "+0.15*muxConst,
                rotation: '0 -45 -90',
                geometry: 'primitive: cone; radiusBottom: 0.25'
            },
            xLine: {
                tag: 'a-entity',
                id: 'xLine',
                lineAttribute: "start: "+0.3*muxConst+"+, 0, "+0.3*muxConst+"; end: 0 0 0; color: #ff0000"
            },
            y: {
                tag: 'a-entity',
                id: 'y',
                position: 0*muxConst+" "+0.3*muxConst+" "+0*muxConst,
                material: 'color: #00ff00',
                scale: 0.15*muxConst+" "+0.15*muxConst+" "+0.15*muxConst,
                rotation: '0 0 0',
                geometry: 'primitive: cone; radiusBottom: 0.25'
            },
            yLine: {
                tag: 'a-entity',
                id: 'yLine',
                lineAttribute: "start: 0, "+0.3*muxConst+", 0; end: 0 0 0; color: #00ff00"
            },
            z: {
                tag: 'a-entity',
                id: 'z',
                position: -0.3*muxConst+" "+0*muxConst+" "+0.3*muxConst,
                material: 'color: #0000ff',
                scale: 0.15*muxConst+" "+0.15*muxConst+" "+0.15*muxConst,
                rotation: '0 45 90',
                geometry: 'primitive: cone; radiusBottom: 0.25'
            },
            zLine: {
                tag: 'a-entity',
                id: 'zLine',
                lineAttribute: "start: "+(-0.3*muxConst)+" "+0*muxConst+" "+0.3*muxConst+"; end: 0 0 0; color: #0000ff"
            },
            all: {
                tag: 'a-entity',
                id: 'all',
                position: '0 0 0',
                material: 'color: #ffffff',
                scale: 0.05*muxConst+" "+0.05*muxConst+" "+0.05*muxConst,
                geometry: 'primitive: sphere'
            }
        }
    } else if (transformType === 'scale') {
        IAMcurrentControl = 1;
        values = {
            x: {
                tag: 'a-entity',
                id: 'x',
                position: 0.2*muxConst+" 0 "+0.2*muxConst,
                material: 'color: #ff0000',
                scale: 0.06*muxConst+" "+0.06*muxConst+" "+0.06*muxConst,
                rotation: '0 45 0',
                geometry: 'primitive: box'
            },
            xLine: {
                tag: 'a-entity',
                id: 'xLine',
                lineAttribute: "start: "+0.2*muxConst+", 0, "+0.2*muxConst+"; end: 0 0 0; color: #ff0000"
            },
            y: {
                tag: 'a-entity',
                id: 'y',
                position: "0 "+0.2*muxConst+" 0",
                material: 'color: #00ff00',
                scale: 0.06*muxConst+" "+0.06*muxConst+" "+0.06*muxConst,
                rotation: '0 45 0',
                geometry: 'primitive: box'
            },
            yLine: {
                tag: 'a-entity',
                id: 'yLine',
                lineAttribute: "start: 0, "+0.2*muxConst+", 0; end: 0 0 0; color: #00ff00"
            },
            z: {
                tag: 'a-entity',
                id: 'z',
                position: -0.2*muxConst+" 0 "+0.2*muxConst,
                material: 'color: #0000ff',
                scale: 0.06*muxConst+" "+0.06*muxConst+" "+0.06*muxConst,
                rotation: '0 45 0',
                geometry: 'primitive: box'
            },
            zLine: {
                tag: 'a-entity',
                id: 'zLine',
                lineAttribute: "start: "+(-0.2*muxConst)+", 0, "+0.2*muxConst+"; end: 0 0 0; color: #0000ff"
            },
            all: {
                tag: 'a-entity',
                id: 'all',
                position: '0 0 0',
                material: 'color: #ffffff',
                scale: 0.05*muxConst+" "+0.05*muxConst+" "+0.05*muxConst,
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
                scale: 0.075*muxConst+" "+0.075*muxConst+" "+0.075*muxConst,
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
                scale: 0.075*muxConst+" "+0.075*muxConst+" "+0.075*muxConst,
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
                scale: 0.075*muxConst+" "+0.075*muxConst+" "+0.075*muxConst,
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
                scale: 0.075*muxConst+" "+0.075*muxConst+" "+0.075*muxConst,
                geometry: 'primitive: torus; radius: 6; radiusTubular: 0.1; segmentsRadial: 100; segmentsTubular: 100'
            }
        }
    }
    createControl(transform, values);
}

/**
 * Calculate constant that is big if the boundingBoxSize is big and small otherwise.
 * It's a simple linear proportion between parameters.
 * @param boundingBoxSizes sizes of the bounding box (x, y, z lengths)
 * @param standardCompareSize if standardCompareSize and max bouningBoxSize are equal, this function return 1.
 */
function getMoltiplicationConstantForTransformScale(boundingBoxSizes, standardCompareSize)
{
    let muxScaleConstant = 1;
    let maxBBSize = Math.max(boundingBoxSizes[0], boundingBoxSizes[1], boundingBoxSizes[2]);
    muxScaleConstant = (24*maxBBSize+58)/85;

    return muxScaleConstant;
}