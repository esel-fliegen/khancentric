import React from "react";
import { ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, Color3 } from "@babylonjs/core";
import SceneComponent from "./SceneComponent"; 
import { StandardMaterial, Mesh } from "@babylonjs/core";
import "./Br.css";


let box;

const onSceneReady = (scene) => {

  const camera = new ArcRotateCamera("Camera", 0, 0, 10, new Vector3(0, 0, 0), scene);
  scene.clearColor = new Color3(0, 0, 0);

  camera.setTarget(Vector3.Zero());

  const canvas = scene.getEngine().getRenderingCanvas();


  camera.attachControl(canvas, true);


  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);


  light.intensity = 0.7;
  var mat = new StandardMaterial("matstd", scene);
  mat.ambientColor = new Color3(1, 1, 1);
  mat.alpha = 1;
  const num = 10;
  for (let i = 1; i <= num; i++){
    var sphere = MeshBuilder.CreateSphere("sphere", {diameter: i*2, segments: 32, arc: 0.5, sideOrientation: Mesh.DOUBLESIDE}, scene);
    sphere.material = mat;
    sphere.position.y = 1;
    mat.alpha = mat.alpha - 0.05;
  }
  // const sphere = MeshBuilder.CreateSphere("sphere", {diameter: 5, segments: 32, arc: 0.5, sideOrientation: Mesh.DOUBLESIDE}, scene);
  // sphere.material = mat;
  // sphere.position.y = 1;
  // const sphere2 = MeshBuilder.CreateSphere("sphere", {diameter: 6, segments: 32, arc: 0.5, sideOrientation: Mesh.DOUBLESIDE}, scene);
  // sphere2.material = mat;
  // sphere2.position.y = 1;
  // const sphere3 = MeshBuilder.CreateSphere("sphere", {diameter: 7, segments: 32, arc: 0.5, sideOrientation: Mesh.DOUBLESIDE}, scene);
  // sphere3.material = mat;
  // sphere3.position.y = 1;
  // const sphere4 = MeshBuilder.CreateSphere("sphere", {diameter: 8, segments: 32, arc: 0.5, sideOrientation: Mesh.DOUBLESIDE}, scene);
  // sphere4.material = mat;
  // sphere4.position.y = 1;
};

const onRender = (scene) => {
  if (box !== undefined) {
    const deltaTimeInMillis = scene.getEngine().getDeltaTime();

    const rpm = 10;
    box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  }
};

export default () => (
  <div>
    <SceneComponent antialias onSceneReady={onSceneReady}  id="my-canvas" />
  </div>
);