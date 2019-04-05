function insertPositionInputInTable(tableClassName)
{
    var tables = document.getElementsByClassName(tableClassName);
    for(var i=0; i < tables.length; i++)
    {

        tables.item(i).innerHTML += "<tr class=\"firstOfType\">\n" +
            "                <th class=\"firstOfType\"></th>\n" +
            "                <th class=\"firstOfType\">Horizontal</th>\n" +
            "                <th class=\"firstOfType\"><input type=\"number\" id=\"spinner_pos_x\" onchange=\"onSpinnerPosXChange()\" onspin=\"onSpinnerPosXChange()\" step=\"0.1\"></th>\n" +
            "\n" +
            "                <th><div class=\"help-tip\" style=\"top: 10px;\">\n" +
            "                    <p>With this panel, you can move an object horizontally writing directly or using the arrows.</p>\n" +
            "                </div></th>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <th>Position: </th>\n" +
            "                <th>Vertical</th>\n" +
            "                <th><input type=\"number\" id=\"spinner_pos_y\" onchange=\"onSpinnerPosYChange()\" onspin=\"onSpinnerPosYChange()\" step=\"0.1\"></th>\n" +
            "\n" +
            "                <th><div class=\"help-tip\">\n" +
            "                    <p>With this panel, you can move an object vertically writing directly or using the arrows.</p>\n" +
            "                </div></th>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <th></th>\n" +
            "                <th>In Depth</th>\n" +
            "                <th><input type=\"number\" id=\"spinner_pos_z\" onchange=\"onSpinnerPosZChange()\" onspin=\"onSpinnerPosZChange()\" step=\"0.1\"></th>\n" +
            "\n" +
            "                <th><div class=\"help-tip\">\n" +
            "                    <p>With this panel, you can move an object in depth writing directly or using the arrows.</p>\n" +
            "                </div></th>\n" +
            "            </tr>"

    }
}

function insertRotationInputInTable(tableClassName)
{
    var tables = document.getElementsByClassName(tableClassName);
    for(var i=0; i < tables.length; i++)
    {

        tables.item(i).innerHTML += "<tr class=\"firstOfType\">\n" +
            "                <th class=\"firstOfType\"></th>\n" +
            "                <th class=\"firstOfType\">Horizontal</th>\n" +
            "                <th class=\"firstOfType\"><input type=\"number\" id=\"spinner_rotation_y\" onchange=\"onSpinnerRotYChange()\" onspin=\"onSpinnerRotYChange()\" step=\"1\"></th>\n" +
            "\n" +
            "                <th><div class=\"help-tip\" style=\"top: 10px;\">\n" +
            "                    <p>With this panel, you can rotate an object horizontally writing directly or using the arrows.</p>\n" +
            "                </div></th>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <th>Rotation: </th>\n" +
            "                <th>Vertical</th>\n" +
            "                <th><input type=\"number\" id=\"spinner_rotation_x\" onchange=\"onSpinnerRotXChange()\" onspin=\"onSpinnerRotXChange()\" step=\"1\"></th>\n" +
            "\n" +
            "                <th><div class=\"help-tip\">\n" +
            "                    <p>With this panel, you can rotate an object vertically writing directly or using the arrows.</p>\n" +
            "                </div></th>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <th></th>\n" +
            "                <th>In Depth</th>\n" +
            "                <th><input type=\"number\" id=\"spinner_rotation_z\" onchange=\"onSpinnerRotZChange()\" onspin=\"onSpinnerRotZChange()\" step=\"1\"></th>\n" +
            "\n" +
            "                <th><div class=\"help-tip\">\n" +
            "                    <p>With this panel, you can rotate an object in depth writing directly or using the arrows.</p>\n" +
            "                </div></th>\n" +
            "            </tr>"

    }
}

function insertScaleInputInTable(tableClassName)
{
    var tables = document.getElementsByClassName(tableClassName);
    for(var i=0; i < tables.length; i++)
    {

        tables.item(i).innerHTML += "<tr class=\"firstOfType\">\n" +
            "                <th class=\"firstOfType\"></th>\n" +
            "                <th class=\"firstOfType\">Height</th>\n" +
            "                <th class=\"firstOfType\"><input type=\"number\" id=\"dim_x\" onchange=\"onDimXChange()\" onspin=\"onDimXChange()\" step=\"0.1\"></th>\n" +
            "\n" +
            "                <th><div class=\"help-tip\" style=\"top: 10px;\">\n" +
            "                    <p>With this panel, you can stretch an object horizontally writing directly or using the arrows.</p>\n" +
            "                </div></th>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <th>Dimension: </th>\n" +
            "                <th>Width</th>\n" +
            "                <th><input type=\"number\" id=\"dim_y\" onchange=\"onDimYChange()\" onspin=\"onDimYChange()\" step=\"0.1\"></th>\n" +
            "\n" +
            "                <th><div class=\"help-tip\">\n" +
            "                    <p>With this panel, you can stretch an object vertically writing directly or using the arrows.</p>\n" +
            "                </div></th>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <th></th>\n" +
            "                <th>Depth</th>\n" +
            "                <th><input type=\"number\" id=\"dim_z\" onchange=\"onDimZChange()\" onspin=\"onDimZChange()\" step=\"0.1\"></th>\n" +
            "\n" +
            "                <th><div class=\"help-tip\">\n" +
            "                    <p>With this panel, you can stretch an object's depth writing directly or using the arrows.</p>\n" +
            "                </div></th>\n" +
            "            </tr>"

    }
}

function insertColorPickerInTable(tableClassName)
{
    var tables = document.getElementsByClassName(tableClassName);
    for(var i=0; i < tables.length; i++)
    {

        tables.item(i).innerHTML += "<tr class=\"firstOfType\" id=\"jscolorRow\">\n" +
            "                <td class=\"firstOfType\">Color:</td>\n" +
            "                <td class=\"firstOfType\"></td>\n" +
            "                <td class=\"firstOfType\"><input class=\"jscolor\" id=\"jscolor\" onchange=\"onJSColorEdit()\"></td>\n" +
            "\n" +
            "                <td class=\"firstOfType\"><div class=\"help-tip\" style=\"top: 10px;\">\n" +
            "                    <p>Choose a color in the rectangle for editing the entity's one. You can also write it yourself (for expert users only).</p>\n" +
            "                </div></td>\n" +
            "            </tr>"

    }
}

function insertVisibilityCheckboxInTable(tableClassName)
{
    var tables = document.getElementsByClassName(tableClassName);
    for(var i=0; i < tables.length; i++)
    {

        tables.item(i).innerHTML += "<tr class=\"firstOfType\">\n" +
            "\n" +
            "                <th class=\"firstOfType\">Visible:</th>\n" +
            "                <th></th>\n" +
            "                <th class=\"firstOfType\"><input type=\"checkbox\" id=\"entity_visible\" onchange=\"onVisibilityChange()\"></th>\n" +
            "\n" +
            "                <td><div class=\"help-tip\" style=\"top: 10px;\">\n" +
            "                    <p>If the checkbox is set object is visible, else the object is not visible</p>\n" +
            "                </div></td>\n" +
            "            </tr>"

    }
}