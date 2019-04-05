
function pickPointOnGroundPlane (args) {

    // API
    var x = args.x
    var y = args.y

    var canvas = args.canvas
    var camera = args.camera

    var rect = canvas.getBoundingClientRect()

    let mouse = new THREE.Vector2();
    mouse.x = ( (x - rect.left) / rect.width ) * 2 - 1
    mouse.y = - ( (y - rect.top) / rect.height ) * 2 + 1
    let vector = new THREE.Vector3( mouse.x, mouse.y, -1 ).unproject( camera )
    console.log(vector)
     return vector;

}