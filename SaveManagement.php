<?php
/**
 * Created by PhpStorm.
 * User: PietroMeloni
 * Date: 15/10/2018
 * Time: 16:28
 */
    if(isset($_POST['path'])) {
        if ($_POST['path'] == "NewFile") {
            $name_base = "Users/save";
            $number =1;
            $ext = ".save";
            while(file_exists($name_base . $number . $ext))
            {
                $number++;
            }
            $myfile = fopen($name_base . $number . $ext, "w") or die("Unable to open file!");

        } else {
            $myfile = fopen($_POST['path'], "w") or die("Unable to open file!");

        }
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

