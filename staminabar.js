function makeStaminaBar() {
    const geometry = new THREE.PlaneGeometry(100, 10);
    const hmaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geometry, hmaterial);
    mesh.position.set(0, 0, 0);
    mesh.scale.set(4, 4);
    sceneHUD.add(mesh);
    heartArray.push(mesh);
    console.log("in");
    // while(1+1==2){
    //     console.log("in");
    //     mesh.scale(scale-1, 2);
    // }

    return mesh;

}
staminaBar = makeStaminaBar();


if (moving == true) {
    staminaBar.scale.x = scales - .05;
    scales = scales - .01;
    staminaBar.scale.y = 2;
    stamina -= fitness;
    //console.log("losing stamina ", stamina);
    scene.fog.density += .00003;

}
else if (stamina < maxStamina) {
    staminaBar.scale.x = scales - .01;
    staminaBar.scale.y = 2;
    stamina += fitness * 5;
    // console.log("recovering stamina ", stamina);
    scene.fog.density -= .00003 * 5;
}


function shrinkBar() {
    console.log('shrinkBar');
    for (let i = 0; i++; i < 10) {
        staminaBar.scale.x = scales - 1;
        staminaBar.scale.y = 2;
    }
}