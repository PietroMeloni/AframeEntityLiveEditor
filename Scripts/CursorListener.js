

AFRAME.registerComponent('my-cursor-listener', {

    update: function ()
    {
       var myelement = this.el;


        myelement.addEventListener('click', function (evt) {


            var selected2BeRemoved = document.getElementsByClassName("selected");
            if(selected2BeRemoved[0] != undefined)
            {
                selected2BeRemoved[0].classList.remove("selected");
            }
            myelement.classList.add("selected");



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