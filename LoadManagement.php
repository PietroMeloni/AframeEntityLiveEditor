<?php
/**
 * Created by PhpStorm.
 * User: PietroMeloni
 * Date: 18/10/2018
 * Time: 22:32
 */

    $filename = "Users/newfile.txt";
    $myfile = fopen($filename, "rb") or die("Unable to open file!");
    $elementsLoaded = fread($myfile, filesize($filename));
    $_POST['loadedElements']=$elementsLoaded;


    fclose($myfile);
    echo json_encode($elementsLoaded);

?>