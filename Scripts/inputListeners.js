/**
 *  When the color picker is used or the input text is modifies, the color
 *  of the associated entity is modified according to the selected color.
 *  (the situation of the invalid color must be handled).
 */
function onJSColorEdit()
{
    var elementsSelected = document.getElementsByClassName("selected");
    //console.log("Oggetti Selezionati = " + elementsSelected.length);



    //globalElementSelected = ""
    var inputJSColor = document.getElementById("jscolor");
    //console.log("colore = " + inputJSColor.value);
    //console.log("MyElementColor = " + globalElementSelected.getAttribute("color"))
    elementsSelected[0].setAttribute("color", "#"+inputJSColor.value);

}

/**
 *  Handling the spinner that edits the translation on the x-axis
 *  When the spinner associated to the x-axis is edited, the object moves on x-axis
 */

function onSpinnerPosXChange()
{

    var elementsSelected = document.getElementsByClassName("selected");

    var spinnerPosX = document.getElementById("spinner_pos_x");

    elementsSelected[0].object3D.position.x = parseFloat(spinnerPosX.value);

}

/**
 *  Handling the spinner that edits the translation on the y-axis
 *  When the spinner associated to the y-axis is edited, the object moves on y-axis
 */

function onSpinnerPosYChange()
{

    var elementsSelected = document.getElementsByClassName("selected");

    var spinnerPosY = document.getElementById("spinner_pos_y");

    elementsSelected[0].object3D.position.y = parseFloat(spinnerPosY.value);

}

/**
 *  Handling the spinner that edits the translation on the z-axis
 *  When the spinner associated to the z-axis is edited, the object moves on z-axis
 */

function onSpinnerPosZChange()
{

    var elementsSelected = document.getElementsByClassName("selected");

    var spinnerPosZ = document.getElementById("spinner_pos_z");

    console.log("spinnerZ =" + spinnerPosZ.value);

    elementsSelected[0].object3D.position.z = parseFloat(spinnerPosZ.value);

}

/**
 *  Handling the spinner that edits the rotation on the x-axis
 *  When the spinner associated to the x-axis is edited, the object rotate on x-axis
 */

function onSpinnerRotXChange()
{

    var elementsSelected = document.getElementsByClassName("selected");

    var spinnerRotX = document.getElementById("spinner_rotation_x");

    console.log("spinnerRotXValue = ",parseFloat(spinnerRotX.value));
    console.log("spinnerRotXValue = ",elementsSelected[0].object3D.rotation.x);

    elementsSelected[0].object3D.rotation.x = THREE.Math.degToRad(parseFloat(spinnerRotX.value));

    //console.log("Element rot x value = ",elementsSelected[0].object3D.rotation.x);
}

/**
 *  Handling the spinner that edits the rotation on the x-axis
 *  When the spinner associated to the x-axis is edited, the object moves on x-axis
 */

function onSpinnerRotYChange()
{

    var elementsSelected = document.getElementsByClassName("selected");

    var spinnerRotY = document.getElementById("spinner_rotation_y");

    elementsSelected[0].object3D.rotation.y = THREE.Math.degToRad(parseFloat(spinnerRotY.value));

}

/**
 *  Handling the spinner that edits the translation on the x-axis
 *  When the spinner associated to the x-axis is edited, the object moves on x-axis
 */

function onSpinnerRotZChange()
{

    var elementsSelected = document.getElementsByClassName("selected");

    var spinnerRotZ = document.getElementById("spinner_rotation_z");

    elementsSelected[0].object3D.rotation.z = THREE.Math.degToRad(parseFloat(spinnerRotZ.value));

}


/**
 *  Handling the spinner that edits the scale on the x-axis
 *  When the spinner associated to the x-axis is edited, the object scale on x-axis
 */

function onDimXChange()
{

    var elementsSelected = document.getElementsByClassName("selected");

    var DimX = document.getElementById("dim_x");

    elementsSelected[0].object3D.scale.x = DimX.value;

}

/**
 *  Handling the spinner that edits the scale on the y-axis
 *  When the spinner associated to the y-axis is edited, the object scales on y-axis
 */

function onDimYChange()
{

    var elementsSelected = document.getElementsByClassName("selected");

    var DimY = document.getElementById("dim_y");

    elementsSelected[0].object3D.scale.y = DimY.value;

}

/**
 *  Handling the spinner that edits the scale on the z-axis
 *  When the spinner associated to the z-axis is edited, the object scale on z-axis
 */

function onDimZChange()
{

    var elementsSelected = document.getElementsByClassName("selected");

    var DimZ = document.getElementById("dim_z");

    elementsSelected[0].object3D.scale.z = DimZ.value;

}

function onVisibilityChange()
{

    var elementsSelected = document.getElementsByClassName("selected");

    var entityVisible = document.getElementById("entity_visible");

    elementsSelected[0].object3D.visible = !elementsSelected[0].object3D.visible;

}