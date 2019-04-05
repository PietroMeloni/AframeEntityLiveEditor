
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    //number from string thenum = "foo3bar5".match(/\d+/)[0] // "3"
    //UserAction.modelDragStart(ev.target);

    ev.dataTransfer.setData("itemIndex", parseInt(ev.target.htmlFor.match(/\d+/)[0]));


}

function drop(ev) {

    //console.log(scena.camera)
    ev.preventDefault();
    var position = pickPointOnGroundPlane({
        x: ev.x,
        y: ev.y,
        canvas: AFRAME.scenes[0].canvas,
        camera: AFRAME.scenes[0].camera,

    })


    var newEntity = document.createElement('a-entity')


    newEntity.object3D.position.set(position.x, position.y, position.z - 3);

    var inSceneEntity = addToScene(itemList[ev.dataTransfer.getData("itemIndex")],newEntity.getAttribute("position"));

    inSceneEntity.addEventListener('model-loaded', function(){
        inSceneEntity.flushToDOM(true);
        // console.log("inSceneEntity.getAttribute(\"position\").x",inSceneEntity.getAttribute("position").x);
        // console.log("inSceneEntity.getAttribute(\"position\")",inSceneEntity.getAttribute("position"));
        updateEntireLateralBar(inSceneEntity);
        //inSceneEntity.setAttribute("autoscale", "");
        openNav();



    });
    //console.log(ev.clientX, ev.clientY)
    //var data = ev.dataTransfer.getData("text");
    //ev.target.appendChild(document.getElementById(data));
}

function emptyDropdownList()
{
    var myNode = document.getElementById("image-dropdown");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

function onRadioButtonClick(radioValue, radioID)
{
    // var name = "line-style";
    // var newEntity;
    // var inSceneEntity;
    // //console.log("itemList is: ",itemList);
    //
    // if($("#"+radioID).attr('previousValue') == 'true')
    // {
    //     $("#"+radioID).prop('checked', false)
    //     document.getElementById("radioLabel"+radioValue).style.opacity = "0.5";
    //     newEntity = document.createElement('a-entity')
    //
    //
    //     newEntity.object3D.position.set(1,-2, -2);
    //
    //     inSceneEntity = addToScene(itemList[radioValue],newEntity.getAttribute("position"));
    //
    //     inSceneEntity.addEventListener('model-loaded', function(){
    //         inSceneEntity.flushToDOM(true);
    //         // console.log("inSceneEntity.getAttribute(\"position\").x",inSceneEntity.getAttribute("position").x);
    //         // console.log("inSceneEntity.getAttribute(\"position\")",inSceneEntity.getAttribute("position"));
    //         updateEntireLateralBar(inSceneEntity);
    //         updatePositionsSpinnersPositionOnly(inSceneEntity.getAttribute("position"))
    //         openNav();
    //
    //
    //
    //     });
    //
    // }
    // else
    // {
    //     $('input[name=' + name + ']').attr('previousValue', false);
    //     document.getElementById("radioLabel"+radioValue).style.opacity = "1";
    //     //console.log("itemList is: ",itemList);
    // }
    //
    // $("#"+radioID).attr('previousValue', $("#"+radioID).prop('checked'));



}

function onTopBarSearchChange()
{
    var search = document.getElementById("topbar-search");
    searchPolyModels(search.value);
}



