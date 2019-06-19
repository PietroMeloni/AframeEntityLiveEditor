<?php
/**
 * Created by PhpStorm.
 * User: PietroMeloni
 * Date: 18/10/2018
 * Time: 22:32
 */

    if(isset($_POST['path']))
    {
        $filename = $_POST['path'];
        $myfile = fopen($filename, "rb") or die("Unable to open file!");
        $elementsLoaded = fread($myfile, filesize($filename));
        $loadedFromFile["result"] = $elementsLoaded;
        $_POST['loadedElements'] = $elementsLoaded;
        //echo json_last_error($elementsLoaded);

        fclose($myfile);


    }
    else
    {
        $loadedFromFile["error"] = 'error path not set';
    }

    echo json_encode($loadedFromFile);
?>