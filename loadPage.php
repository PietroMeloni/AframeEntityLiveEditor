<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>Choose from witch save you want to load...</title>


    <!-- Include our stylesheet -->
    <link href="SaveLoadBrowseStyle.css" rel="stylesheet"/>
    <link rel="stylesheet" href="http://meyerweb.com/eric/tools/css/reset/reset.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,300">
    <link rel="stylesheet" href="contextmenustyle.css">

</head>
<body>

<div class="filemanager">

    <div class="search">
        <input type="search" placeholder="Find a file.." />
    </div>

    <div class="breadcrumbs"></div>

    <ul class="data"></ul>

    <div class="nothingfound">
        <div class="nofiles"></div>
        <span>No files here.</span>
    </div>

</div>


<!-- Include our script files -->
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="Scripts/LoadFileGUI.js"></script>
<nav id="context-menu" class="context-menu">
    <ul class="context-menu__items">
        <li class="context-menu__item">
            <a href="#" class="context-menu__link" data-action="View"><i class="fa fa-eye"></i> Use This Save</a>
        </li>
        <li class="context-menu__item">
            <a href="#" class="context-menu__link" data-action="Edit"><i class="fa fa-edit"></i> Rename this save</a>
        </li>
        <li class="context-menu__item">
            <a href="#" class="context-menu__link" data-action="Delete"><i class="fa fa-times"></i> Delete Save</a>
        </li>
    </ul>
</nav>
<script src="Scripts/contextMenu.js"></script>

</body>
</html>