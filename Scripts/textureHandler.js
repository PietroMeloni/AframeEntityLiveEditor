function updateMaterialSide(material, side) {
    if (!material) {
        return;
    }

    if (material instanceof THREE.Material) {
        material.side = side;
        material.needsUpdate = true
    } else if (material instanceof THREE.MultiMaterial) {
        material.materials.forEach(function(childMaterial) {
            updateMaterialSide(childMaterial, side);
        });
    }
}

function fixTextures()
{
    var modelEl = document.getElementById("blabla");
    if (!window['AFRAME'] && !modelEl) {
        return;
    }
    console.log("modelEl =");

    modelEl.addEventListener('model-loaded', function(evt) {
        var model = evt.detail.model;
        console.log("modelEl =");
        traverse(model);
    });
}

function traverse(node) {
    node.children.forEach(function(child) {
        if (child.children) {
            traverse(child);
        }

        updateMaterialSide(child['material'], THREE.DoubleSide);
    });
}

