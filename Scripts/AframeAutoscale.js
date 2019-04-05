AFRAME.registerComponent('autoscale', {schema: {type: 'number', default: 1},
    init: function () {
        this.scale();this.el.addEventListener('object3dset', () => this.scale());},scale: function () {
        const el = this.el;
        const span = this.data;
        const mesh = el.getObject3D('mesh');
        if (!mesh) return;
        const bbox = new THREE.Box3().setFromObject(mesh);
        const scale = span / bbox.getSize().length();
        var sx = this.el.getAttribute('scale').x;
        var sy = this.el.getAttribute('scale').y;
        var sz = this.el.getAttribute('scale').z;

        var rx = this.el.getAttribute('rotation').x * (Math.PI / 180);
        var ry = this.el.getAttribute('rotation').y * (Math.PI / 180);
        var rz = this.el.getAttribute('rotation').z * (Math.PI / 180);
        mesh.rotation.set(rx,ry,rz);
        mesh.scale.set(scale*sx, scale*sy, scale*sz);

        var a = new THREE.Box3().setFromObject(this.el.object3D);
        var cx = (a.min.x + a.max.x)/2;
        var cy = (a.min.y + a.max.y)/2;
        var cz = (a.min.z + a.max.z)/2;
        var posx = this.el.object3D.position.x;
        var posy = this.el.object3D.position.y;
        var posz = this.el.object3D.position.z;
        console.log("boundingBox xyz: x: "+cx+", y: "+cy+" z: "+cz);
        console.log("box position xyz: x: "+posx+", y: "+posy+" z: "+posz);
        var translateX = posx - cx;
        var translateY = posy - cy;
        var translateZ = posz - cz;
        this.el.object3DMap.mesh.translateX(translateX/sx);
        this.el.object3DMap.mesh.translateY(translateY/sy);
        this.el.object3DMap.mesh.translateZ(translateZ/sz);
    }
});