
var itemList;
var objThatWillBeAddToScene;

/**
 * Since the google API doesn't allow calls that are over 10 OBJ, we need an offset if we want to search over the tenth
 * @param offset number that allows you to skip the first "offset" objects
 * @param value string that you want to search in the repository
 * @returns {Promise<any>}
 */
function callSearchApi (offset, value) {
    return fetch('https://gblock.3d.io/api/search?limit=10&offset=' + offset + '&query=' + value).then(function (response) {
        return response.json()
    })
}

/**
 *  Search for models with "value" as description in the poly.google repository
 *  See @callSearchApi.
 *  After searching, add all items in a radio list "drop-down look alike"
 * @param value
 */
function searchPolyModels (value)
{
    console.log("working with require should work")
    var items;

    Promise.all([
        // google has a limit fo max 10 result per call :/
        // so we do 3 api calls and merge the results into one
        callSearchApi(1, value),
        callSearchApi(11, value),
        callSearchApi(21, value)
    ]).then(function (results) {
        return results[0].items.concat(results[1].items).concat(results[2].items)
    }).then(function (results) {

        items = results.map(function (item_) {
            return {
                title: item_.title + ' by ' + item_.author,
                thumb: item_.image,
                url: item_.url,
                author: item_.author
            }
        })

        itemList = items;


        var dropdownImages = document.getElementById("image-dropdown");
        emptyDropdownList();


        items.forEach(function(_item, _index)
        {
            if(_index == 0)
            {
                dropdownImages.innerHTML +=
                    "<input type=\"radio\"  name=\"line-style\" id=\"line"+_index+"\" onclick=\"onRadioButtonClick(this.value, this.id)\"  value=\"" +_index+"\"  /><label id=\"radioLabel"+_index+"\"  for=\"line"+_index+"\"  style=\"background-image: url(' "+_item.thumb+" '); background-size: 150px;  \" src=\"img_logo.gif\" draggable=\"true\"\n" +
                    "ondragstart=\"drag(event)\"></label>"

            }
            else
            {

            dropdownImages.innerHTML +=
                "<input type=\"radio\" id=\"line"+_index+"\" name=\"line-style\" onclick=\"onRadioButtonClick(this.value, this.id)\" value=\"" +_index+"\"  /><label id=\"radioLabel"+_index+"\" for=\"line"+ _index+"\"  style=\"background-image: url(' "+_item.thumb+" '); background-size: 150px;  \" src=\"img_logo.gif\" draggable=\"true\"\n" +
                "ondragstart=\"drag(event)\"></label>"

            }
        })

        itemList = items;
    }).catch(function (error) {
        console.error(error)
        // io3d.utils.ui.message.error('Sorry, something went wrong:\n\n' + JSON.stringify(error, null, 2))
    })


}

function addToScene (item, position) {

    //var uiMessage = io3d.utils.ui.message('Loading glTF from<br><a class="io3d-inspector-plugins___truncate-message" href="' + item.url + '" target="_blank">' + item.url + '</a>', 0)

    // add new entity to scene
    var newEntity = document.createElement('a-entity')
    var boundingBoxCenter;
    var boxSize;
    newEntity.addEventListener('model-loaded', function (event) {

        // center model to picking position
        var bb = new THREE.Box3().setFromObject(event.detail.model) ;// bounding box
        var size = new THREE.Vector3(Math.abs(bb.max.x - bb.min.x), Math.abs(bb.max.y - bb.min.y), Math.abs(bb.max.z - bb.min.z));
        position.set(
            position.x - bb.min.x - size.x / 2,
            -bb.min.y,
            position.z - bb.min.z - size.z / 2
        )
        //calculating boundingBox middle point
        const offsetX = (bb.max.x + bb.min.x)/2
        const offsetY = (bb.max.y + bb.min.y)/2
        const offsetZ = (bb.max.z + bb.min.z)/2
        console.log("ciaaaooooo");
        // apply the offset
        boundingBoxCenter={x:-offsetX,y:-offsetY, z:-offsetZ};
        boxSize = bb.getSize();
        console.log("starting write of box size")
        console.log(boxSize);
        console.log("i've wrote box size")
        //console.log("OOOH")
        newEntity.setAttribute('position', position.x + ' ' + position.y + ' ' + position.z)
        newEntity.setAttribute('scale', 0.9 + ' ' + 0.9 + ' ' + 0.9)
        newEntity.setAttribute("box-size", boxSize.x +" "+boxSize.y+" "+boxSize.z);
        newEntity.setAttribute("box-center", offsetX +" "+offsetY+" "+offsetZ);

        //callback()

    }, {once: true})

    newEntity.addEventListener('model-error', function (event) {

        console.log("error on the model maybe");
        //uiMessage.close()
        //io3d.utils.ui.message.error('Sorry: ' + event.detail.message + '<br/><a class="io3d-inspector-plugins___truncate-message" href="' + item.url + '" target="_blank">' + item.url + '</a>')

    }, {once: true})
    //
    // ADD HERE YOUR POLYGOOGLE API KEY
    //
    newEntity.setAttribute('gblock', item.url+"?key=");
    //
    //
    //
    //this class is needed to open the side bar onclick on a object.
    newEntity.setAttribute("my-cursor-listener", "");
    //the raycaster need a class to know witch object are intersectable. "selectable" is this class.
    newEntity.setAttribute("selectable", "");
    //newEntity.setAttribute("holdSelector: [holdable-light]", "");
    //newEntity.setAttribute("autoscale", "");

    var selected2BeRemoved = document.getElementsByClassName("selected");
    if(selected2BeRemoved[0] != undefined)
    {
        selected2BeRemoved[0].classList.remove("selected");
    }
    newEntity.classList.add("selected");
    newEntity.classList.add("affectedByEvents");
    newEntity.classList.add("addedByUser");
    //newEntity.classList.add("justInserted");

    document.querySelector('a-scene').appendChild(newEntity);

    objThatWillBeAddToScene = newEntity;




    return newEntity;

}

