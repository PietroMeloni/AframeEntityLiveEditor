function updateEntireLateralBar(selectedElement)
{


    var inputPosX = document.getElementById("spinner_pos_x");
    var inputPosY = document.getElementById("spinner_pos_y");
    var inputPosZ = document.getElementById("spinner_pos_z");

    var inputDimX = document.getElementById("dim_x");
    var inputDimY = document.getElementById("dim_y");
    var inputDimZ = document.getElementById("dim_z");

    var inputRotX = document.getElementById("spinner_rotation_x");
    var inputRotY = document.getElementById("spinner_rotation_y");
    var inputRotZ = document.getElementById("spinner_rotation_z");

    var inputJsColor = document.getElementById("jscolor");
    var inputJsColorRow = document.getElementById("jscolorRow");
    //var inputProva = document.getElementById("prova");

    var checkboxVisible = document.getElementById("entity_visible");

    inputPosX.value = (selectedElement.getAttribute("position").x).toString();
    inputPosZ.value = (selectedElement.getAttribute("position").z).toString();
    inputPosY.value = (selectedElement.getAttribute("position").y).toString();

    inputDimX.value = (selectedElement.getAttribute("scale").x).toString();
    inputDimY.value = (selectedElement.getAttribute("scale").y).toString();
    inputDimZ.value = (selectedElement.getAttribute("scale").z).toString();

    inputRotX.value = (selectedElement.getAttribute("rotation").x).toString();
    inputRotY.value = (selectedElement.getAttribute("rotation").y).toString();
    inputRotZ.value = (selectedElement.getAttribute("rotation").z).toString();

    //console.log("Rotation values after: x ",inputRotX.value, " Rotation values before: y ",inputRotY.value, " Rotation values before: z ",inputRotZ.value);

    if(selectedElement.getAttribute("color") != null)
    {
        inputJsColor.jscolor.fromString(selectedElement.getAttribute("color").toString());
    }
    else
    {
        inputJsColorRow.style.display = "none";
    }

    //inputJsColor.jscolor.value

    if(selectedElement.getAttribute("visible"))
    {
        checkboxVisible.checked = true;
    }
    else
    {
        checkboxVisible.checked = false;
    }
}

function updatePositionsSpinners(selectedElement)
{
    var inputPosX = document.getElementById("spinner_pos_x");
    var inputPosY = document.getElementById("spinner_pos_y");
    var inputPosZ = document.getElementById("spinner_pos_z");

    inputPosX.value = (selectedElement.getAttribute("position").x).toString();
    inputPosZ.value = (selectedElement.getAttribute("position").z).toString();
    inputPosY.value = (selectedElement.getAttribute("position").y).toString();
}

function updatePositionsSpinnersPositionOnly(position)
{
    console.log("position ",position);
    console.log("position.x ",position.x);
    var inputPosX = document.getElementById("spinner_pos_x");
    var inputPosY = document.getElementById("spinner_pos_y");
    var inputPosZ = document.getElementById("spinner_pos_z");

    inputPosX.value = (position.x).toString();
    inputPosZ.value = (position.z).toString();
    inputPosY.value = (position.y).toString();
}

function updateRotationSpinners(selectedElement)
{
    var inputPosX = document.getElementById("spinner_rotation_x");
    var inputPosY = document.getElementById("spinner_rotation_y");
    var inputPosZ = document.getElementById("spinner_rotation_z");

    inputPosX.value = (selectedElement.getAttribute("position").x).toString();
    inputPosZ.value = (selectedElement.getAttribute("position").z).toString();
    inputPosY.value = (selectedElement.getAttribute("position").y).toString();
}


function updateScalesSpinners(selectedElement)
{
    var inputDimX = document.getElementById("dim_x");
    var inputDimY = document.getElementById("dim_y");
    var inputDimZ = document.getElementById("dim_z");

    inputDimX.value = (selectedElement.getAttribute("scale").x).toString();
    inputDimY.value = (selectedElement.getAttribute("scale").y).toString();
    inputDimZ.value = (selectedElement.getAttribute("scale").z).toString();
}

function updateColorPicker(selectedElement)
{
    var inputJsColor = document.getElementById("jscolor");
    var inputJsColorRow = document.getElementById("jscolorRow");
    if(selectedElement.getAttribute("color") != null)
    {
        inputJsColor.jscolor.fromString(selectedElement.getAttribute("color").toString());
    }
    else
    {
        inputJsColorRow.style.display = "none";
    }
}

function updateVisibilityCheckBox(selectedElement)
{
    var checkboxVisible = document.getElementById("entity_visible");
    if(selectedElement.getAttribute("visible"))
    {
        checkboxVisible.checked = true;
    }
    else
    {
        checkboxVisible.checked = false;
    }

}

/**
 *  Select an element. This element will be the one that will be show in the lateral bar.
 * @param element2BSelected is the element that will be show in the bar
 */
function selectAnElement(element2BSelected)
{

    if(!element2BSelected.classList.contains("selected"))
    {
        myelement.classList.add("selected");
    }
    else
    {
        console.log("Element was already selected;");
    }

}
/**
 *  Deselect an element. The element properties will no longer be shown in the bar-
 *  WARNING: Be sure to close the lateral bar after using this
 * @param element2BSelected is the element that is show in the bar.
 */
function deselectAnElement(elementSelected)
{
    if(elementSelected.classList.contains("selected"))
    {
        elementSelected.classList.remove("selected");
    }
    else
    {
        console.log("error: element wasn't selected");
    }
}
