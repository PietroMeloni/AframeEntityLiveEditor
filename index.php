<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Top Bar Prova</title>
    <meta name="description" content="Aframe-Material">
    <meta http-equiv="Content-Type"  content="application/javascript" />

    <link href="sidebarstyle.css" rel="stylesheet" type="text/css">
    <link type="text/css" rel="stylesheet" href="wheelcolorpicker.css">
    <link type="text/css" rel="stylesheet" href="TopBar.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">





    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- Optional Bootstrap theme -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://aframe.io/releases/0.8.0/aframe.min.js"></script>


    <script src="https://unpkg.com/aframe-text-geometry-component@^0.5.0/dist/aframe-text-geometry-component.min.js"></script>
    <script src="https://cdn.rawgit.com/archilogic-com/aframe-gblock/6498b71d/dist/gblock.js"></script>

    //without data main 'cause I want to do inline requires
    <script src="Scripts/requireScriptJS.js"></script>
    <script>
        // Using RequireJS instead of using typical script src tag
        require(['Scripts/main'], function() {
            // Configuration loaded now, safe to do other require calls
            // that depend on that config.
            require(['Scripts/InputHTMLInjection'], function(InputHTMLInjection)
            {
                insertPositionInputInTable("lateralTable");
                insertRotationInputInTable("lateralTable");
                insertScaleInputInTable("lateralTable");
                insertColorPickerInTable("lateralTable");
                insertVisibilityCheckboxInTable("lateralTable");
            });

            require(['Scripts/polyModelsAPI'], function(PolyModelsAPI)
            {
                searchPolyModels("house");
            });
            require(['Scripts/sidebar'])
            require(['Scripts/lateralBarAPI'])
            require(['Scripts/CursorListener'])
            require(['Scripts/inputListeners'])
            require(['Scripts/textureHandler'])
            require(['Scripts/topBarAPI'])
            require(['Scripts/cursorTo3DPosition'])
            require(['Scripts/AframeAutoscale'])
            require(['Scripts/HTMLImporter'])
            require(['Scripts/SaveLoadAjax'])
            require(['Scripts/HTMLtoString'])

            // require(['Scripts/FluxDispatcher'])
            // require(['Scripts/FluxStore'])
        });
    </script>

    <!--<script type="text/javascript" src="Scripts/polyModelsAPI.js"></script>-->

    <!--<script type="text/javascript" src="Scripts/sidebar.js"></script>-->
    <!--<script type="text/javascript" src="bootstrapJavascript.js"></script>-->
    <!--<script type="text/javascript" src="Scripts/CursorListener.js"></script>-->
    <!--<script type="text/javascript" src="Scripts/inputListeners.js"></script>-->
    <!--<script type="text/javascript" src="Scripts/lateralBarAPI.js"></script>-->
    <!--<script type="text/javascript" src="Scripts/textureHandler.js"></script>-->
    <!--<script type="text/javascript" src="Scripts/topBarAPI.js"></script>-->
    <!--<script type="text/javascript" src="Scripts/cursorTo3DPosition.js"></script>-->
    <!--<script type="text/javascript" src="Scripts/AframeAutoscale.js"></script>-->
    <!--<script type="text/javascript" src="Scripts/HTMLImporter.js"></script>-->
    <!--<script type="text/javascript" src="Scripts/InputHTMLInjection.js"></script>-->
    <!--<script type="text/javascript" src="Scripts/FluxDispatcher.js"></script>-->

    <!--<script type="text/javascript" src="Scripts/FluxStore.js"></script>-->








</head>
<body>



<div id="mySidenav" class="sidenav">
    <h3>
        <table class="lateralTable">
            <tr>
                <th></th>
                <th></th>
            </tr>
        </table>
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times; </a>

    </h3>

</div>

<!-- Use any element to open the sidenav -->
<span onclick="openNav()">open</span>

<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
<div id="main" >

    <a-scene ondrop="drop(event)" ondragover="allowDrop(event)">

        <!-- <obj-model my-cursor-listener class="affectedByEvents" src="#linnet-obj" mtl="#linnet-mtl" position="0 0 -5" scale="0.01 0.01 0.01"></obj-model>-->
        <a-sky color="#ABABAB"></a-sky>




        <a-entity camera look-controls wasd-controls mouse-cursor>
            <a-entity cursor="rayOrigin: mouse"></a-entity>

        </a-entity>

    </a-scene>
    <ul>

        <table>
            <tr>
                <td><input id="topbar-search" type="text" placeholder="Search.." onchange="onTopBarSearchChange()" ></td>
                <td><button id="saveButton">Save</button></td>
                <td><button id="loadButton" >Load</button></td>

            </tr>
            <tr>
                <td>
                    <li class="dropdown">
                        <div id="image-dropdown" >

                        </div>
                    </li>
                </td>
            </tr>
        </table>



    </ul>

    </div>

    <script>
        // insertPositionInputInTable("lateralTable");
        // insertRotationInputInTable("lateralTable");
        // insertScaleInputInTable("lateralTable");
        // insertColorPickerInTable("lateralTable");
        // insertVisibilityCheckboxInTable("lateralTable");
        /*the only js is to continuously checking the value of the dropdown. for posterity*/
        //var i = setInterval(function(){$("#trace").val($("input[name=line-style]:checked").val());},100);
        //fixTextures();
        //addRandomHouse();
        // searchPolyModels("house");




    </script>


</body>
</html>
