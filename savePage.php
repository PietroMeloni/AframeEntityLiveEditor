<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>Choose a File...</title>


    <!-- Include our stylesheet -->
    <link href="SaveLoadBrowseStyle.css" rel="stylesheet"/>

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
<script src="Scripts/SaveFileGUI.js"></script>

</body>
</html>