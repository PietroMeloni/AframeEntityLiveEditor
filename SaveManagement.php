<?php
/**
 * Created by PhpStorm.
 * User: PietroMeloni
 * Date: 15/10/2018
 * Time: 16:28
 */
    if(isset($_POST['path']))
    {
        $myfile = fopen($_POST['path'], "w") or die("Unable to open file!");
    }
    else
    {
        $myfile = fopen("Users/newfile.txt", "w") or die("Unable to open file!");
    }


    if(isset($_POST['elesAddedByUser']))
    {
        $txt = $_POST['elesAddedByUser'];
        $_POST['elesAddedByUser']="";
        fwrite($myfile, $txt);
    }

    fclose($myfile);


?>

