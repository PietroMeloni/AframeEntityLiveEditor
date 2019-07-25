$('#helpButton').click(function() {

    var data = new FormData();

    var newWindow = window.open("", "_blank");
    var xhr = new XMLHttpRequest();

    xhr.open( 'post', "SaveManagement.php", true );
    xhr.responseType = "document";
    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            switch (this.status) {
                case 200:
                    newWindow.location = "help.php";
                    break;
                default:
                    alert('aw snap');
                    break;
            }
        }
    };
    xhr.send(data);


});




$('#saveButton').click(function() {

    var elesAddedByUser = document.getElementsByClassName("addedByUser");
    var stringEles ="";
    for(var i = 0; i < elesAddedByUser.length; i++)
    {
        stringEles+=document.getHTML(elesAddedByUser[i],true)+"\n";
    }
    var data = new FormData();
    data.append("elesAddedByUser" , stringEles);
    var newWindow = window.open("", "_blank");
    var xhr = new XMLHttpRequest();

    xhr.open( 'post', "SaveManagement.php", true );
    xhr.responseType = "document";
    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            switch (this.status) {
                case 200:
                    newWindow.location = "savePage.php";
                    break;
                default:
                    alert('aw snap');
                    break;
            }
        }
    };
    xhr.send(data);


});

$('#loadButton').click(function() {
     removeElementsAddedByUser();

    var newWindow = window.open("", "_blank");
    // var xhr = new XMLHttpRequest();
    // var data = new FormData();
    // xhr.open( 'post', "LoadManagement.php", true );
    // xhr.responseType = "document";
    // xhr.onreadystatechange = function() {
    //     if (this.readyState == 4) {
    //         switch (this.status) {
    //             case 200:
    //                 newWindow.location = "loadPage.php";
    //                 break;
    //             default:
    //                 alert('aw snap');
    //                 break;
    //         }
    //     }
    // };
    // xhr.send(data);
    newWindow.location = "loadPage.php";


    // $.ajax({
    //     url: 'LoadManagement.php',
    //     type: 'POST',
    //     dataType: "json",
    //
    //     success: function(elementsLoaded){
    //
    //         var position = $(elementsLoaded).attr("position");
    //
    //         var rotation = $(elementsLoaded).attr("rotation");
    //         var scale = $(elementsLoaded).attr("scale");
    //         var itmUrl = $(elementsLoaded).first().attr("gblock");
    //         $(elementsLoaded).each(function() {
    //             $.each(this.attributes, function() {
    //                 // this.attributes is not a plain object, but an array
    //                 // of attribute nodes, which contain both the name and value
    //                 if(this.specified) {
    //
    //                     if(this.name =="position")
    //                         position = this.value;
    //
    //                     if(this.name == "rotation")
    //                         rotation = this.value;
    //                     if(this.name=="scale")
    //                         scale = this.value;
    //                     if(this.name=="gblock")
    //                         itmUrl = this.value;
    //                 }
    //             });
    //
    //             addNewEntityByPosScaleRotModel(position, scale, rotation, itmUrl);
    //
    //         });
            //addNewEntityByPosScaleRotModel(position, scale, rotation, itmUrl);



     //   }
    //});

});

/**
 *  This function is used to load prev user work from file, so it needs:
 * @param position
 * @param scale
 * @param rotation
 * @param modelURL : it should be saved in file as parameter
 */
function addNewEntityByPosScaleRotModel(position, scale, rotation, modelURL)
{
    console.log("position= ");
    console.log(position);
    var newEntity = document.createElement('a-entity')

    console.log(position.x);
    newEntity.addEventListener('model-loaded', function (event) {

        var pos = position.split(" ");
        var scl = scale.split(" ");
        var rot = rotation.split(" ");

        newEntity.setAttribute('position', pos[0] + ' ' + pos[1] + ' ' + pos[2]);
        newEntity.setAttribute('scale', scl[0] + ' ' + scl[1] + ' ' + scl[2]);
        newEntity.setAttribute('rotation', rot[0] + ' ' + rot[1] + ' ' + rot[2]);







    }, {once: true})

    newEntity.addEventListener('model-error', function (event) {

        console.log("error on the model maybe");

    }, {once: true})

    newEntity.setAttribute('gblock', modelURL);
    console.log(newEntity.getAttribute('gblock'),modelURL);
    newEntity.setAttribute('visible', 'true');
    newEntity.setAttribute('my-cursor-listener', '');
    newEntity.classList.add("affectedByEvents");
    newEntity.classList.add("addedByUser");


    document.querySelector('a-scene').appendChild(newEntity);

}

/**
 *  Removes all elements inserted by the user.
 *  Also used before loading a save file.
 * @returns {boolean}
 */
function removeElementsAddedByUser()
{
    var elesAddedByUser = document.getElementsByClassName("addedByUser");
    //close the lateral bar
    closeNav();
    for(var i = 0; (elesAddedByUser.length != 0); i++)
    {
        elesAddedByUser[i].parentNode.removeChild(elesAddedByUser[i]);
        i--;

    }

    return false;

}

/**
 * Save the work on a file choosen by the user.
 * @param path the path of the file in witch we will save.
 */
 window.saveOnFileChosenByChild = function(path) {

    console.log(path);
    var elesAddedByUser = document.getElementsByClassName("addedByUser");

    var stringEles ="";
    for(var i = 0; i < elesAddedByUser.length; i++)
    {
        stringEles+=document.getHTML(elesAddedByUser[i],true)+"\n";
    }

    var data = new FormData();
    data.append("elesAddedByUser" , stringEles);
    //set the path in witch the php file will save
    data.append("path", path);
    //var newWindow = window.open("", "_blank");
    //RICORDATI DI TOGLIERE QUESTE 3 RIGHE CHE SERVIVANO SOLO PER TESTARE IL SALVATAGGIO SU FILE NEL SERVER
     var xhr = new XMLHttpRequest();

    xhr.open( 'post', "SaveManagement.php", true );
    xhr.send(data);
}

window.loadFromFileChosenByChild = function(elementsLoaded) {

    var position = $(elementsLoaded).attr("position");

    var rotation = $(elementsLoaded).attr("rotation");
    var scale = $(elementsLoaded).attr("scale");
    var itmUrl = $(elementsLoaded).first().attr("gblock");
    $(elementsLoaded).each(function() {
        $.each(this.attributes, function() {
            // this.attributes is not a plain object, but an array
            // of attribute nodes, which contain both the name and value
            if(this.specified) {

                if(this.name =="position")
                    position = this.value;

                if(this.name == "rotation")
                    rotation = this.value;
                if(this.name=="scale")
                    scale = this.value;
                if(this.name=="gblock")
                    itmUrl = this.value;
            }
        });

        addNewEntityByPosScaleRotModel(position, scale, rotation, itmUrl);

    });
}
