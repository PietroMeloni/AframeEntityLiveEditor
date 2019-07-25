<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>D3P2</title>
    <meta name="description" content="Aframe-Material">
    <meta http-equiv="Content-Type"  content="application/javascript" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- Optional Bootstrap theme -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://aframe.io/releases/0.8.0/aframe.min.js"></script>

    <link href="sidebarstyle.css" rel="stylesheet" type="text/css">
    <link type="text/css" rel="stylesheet" href="wheelcolorpicker.css">
    <link type="text/css" rel="stylesheet" href="TopBar.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
    <link type="text/css" rel="stylesheet" href="rightbar.css">









    <script src="https://cdn.rawgit.com/archilogic-com/aframe-gblock/6498b71d/dist/gblock.js"></script>
    <script src="//unpkg.com/aframe-leap-hands/dist/aframe-leap-hands.umd.js"></script>
    <script src="https://rawgit.com/andreasplesch/aframe-meshline-component/master/dist/aframe-meshline-component.min.js"></script>
    <script src="https://rawgit.com/protyze/aframe-curve-component/master/dist/aframe-curve-component.min.js"></script>
    <script src="https://rawgit.com/protyze/aframe-alongpath-component/master/dist/aframe-alongpath-component.min.js"></script>
    <script src="https://unpkg.com/aframe-animation-component@^4.1.2/dist/aframe-animation-component.min.js"></script>
    <script src="https://unpkg.com/aframe-text-geometry-component/dist/aframe-text-geometry-component.min.js"></script>
    <script src="https://unpkg.com/aframe-look-at-component@0.5.1/dist/aframe-look-at-component.min.js"></script>
    <script src="Scripts/intersect-and-manipulate.js"></script>
    <script src="Scripts/holdable.js"></script>
    <script src="Scripts/mouseControl.js"></script>
    <script src="Scripts/gestioneAnimazioni.js"></script>
    <script src="Scripts/intersect-light.js"></script>
    <script src="Scripts/holdable-light.js"></script>
    <script src="Scripts/mouseControl-light.js"></script>


    <script src="Scripts/bodies-and-editors.js"></script>

    <!--    <script src="Scripts/IAMScript.js"></script>-->
<!--    //without data main 'cause I want to do inline requires-->
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
            //require(['Scripts/IAMScript'])

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



<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
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

<div id="myrightBar" class="rightBar">
    <table>
        <tr>
            <td><input id="topbar-search" type="text" placeholder="Search.." onchange="onTopBarSearchChange()" ></td>


        </tr>
        <tr>
            <td>
                <li class="dropdown">
                    <div id="image-dropdown" >

                    </div>
                </li>
            </td>

            <td>
                <br>
            </td>
            <td>
            </td>


        </tr>
    </table>
</div>


<!--Use any element to open the sidenav-->
<span onclick="openNav()">open</span>
<div id="main" >

    <a-scene cursor="rayOrigin: mouse"  ondrop="drop(event)" ondragover="allowDrop(event)" >

        <!-- <obj-model my-cursor-listener class="affectedByEvents" src="#linnet-obj" mtl="#linnet-mtl" position="0 0 -5" scale="0.01 0.01 0.01"></obj-model>-->
        <a-sky color="#ABABAB"></a-sky>

        <a-asset>
            <img id="colorWheel" src="assets/ColorsWheel.jpg">
            <img id="lightnessWheel" src="assets/LightnessWheel.jpg">
        </a-asset>



        <a-circle class="selectable" trigger-light-bodies rotation="0 0 0" position="0 -0.5 -1" radius="0.5" color="#633" shader="flat">
            <a-text value='Lights\n OnOff' align='center'></a-text>
        </a-circle>

        <a-light id="spotLight" type="spot" light='distance: 5' position="-10 1.5 0" rotation='0 90 0'></a-light>
        <a-light id="pointLight" type="point" light='distance: 10' position="0 0 10"></a-light>
        <a-light id="directionalLight" type="directional" position="0 3 -10" rotation="0 0 0" target="#directionaltarget">
            <a-entity id="directionaltarget" position="0 -1 0"></a-entity>
        </a-light>
        <a-light  id="ambientLight" type="ambient" intensity="0.1" position="10 3 0" color="hsl(0, 100%, 100%)"></a-light>


        <!-- Set hands and control as children of camera !-->
        <a-entity id= "camera" camera="near: 0.01" camera look-controls mouse-cursor wasd-controls position="0 1.5 7">

            <a-entity leap-hand="hand: left; holdDistance: 0.5; holdSelector: [holdable-light]" position="0 -0.25 -0.5"></a-entity>
            <a-entity leap-hand="hand: right; holdDistance: 0.5; holdSelector: [holdable-light]" position="0 -0.25 -0.5"></a-entity>
            <a-entity intersect-and-manipulate></a-entity>
            <a-entity animate></a-entity>
            <a-entity intersect-light></a-entity>

        </a-entity>


    </a-scene>
    <header class="header">
     <ul id="ulTopBar">

        <table>
            <tr>
<!--                <td><input id="topbar-search" type="text" placeholder="Search.." onchange="onTopBarSearchChange()" ></td>-->
                <td><button id="saveButton">Save</button></td>
                <th>
                    <div class="help-tipT">
                     <p>Pressing the button you can save your work in a save file. Just press "create" new save file or overwrite an old one.</p>
                    </div>
                </th>
                <td><button id="loadButton" >Load</button></td>
                <th>
                    <div class="help-tipT">
                        <p>Pressing the button you can load your work from a save file. Just double click the one you want to load!</p>
                    </div>
                </th>
                <td>
                    <div class="switch-field">
                        <input type="radio" id="radio-trsl" name="switch-transform" value="translate" checked/>
                        <label for="radio-trsl">Move</label>
                        <input type="radio" id="radio-rot" name="switch-transform" value="rotate" />
                        <label for="radio-rot">Rotate</label>
                        <input type="radio" id="radio-scale" name="switch-transform" value="scale" />
                        <label for="radio-scale">Resize</label>
                        <input type="radio" id="radio-rmvtrnsfrm" name="switch-transform" value="remove" />
                        <label for="radio-rmvtrnsfrm">Remove Editor</label>
                    </div>

                </td>
                <th>
                    <div class="help-tip">
                        <p>Choose in witch way you want to edit an object in the scene.<br>
                           Select it by clicking one of the buttons then click the object you want to edit.<br>
                           Remember that the green one is the selected editor. <br>
                           If you want to remove the editor just click remove editor plus click the object<br>
                           If you want to move your position instead of the object one just use wasd or arrows
                        </p>



                    </div>
                </th>

                <td><button id="helpButton" >Help</button></td>

            </tr>


        </table>



    </ul>

    </header>
</div>

<script>
    //console.log(AFRAME.scenes[0].querySelector('[raycaster]'));
</script>






</body>
</html>
