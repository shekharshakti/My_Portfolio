import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

interface SkillsSphereProps {
  skills: string[];
}

const SkillsSphere = ({ skills }: SkillsSphereProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    canvasRef.current.appendChild(renderer.domElement);
    
    // Create a sphere for positioning
    const radius = 2;
    const sphereGeometry = new THREE.SphereGeometry(radius, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Create a group for all skill objects
    const skillsGroup = new THREE.Group();
    scene.add(skillsGroup);
    
    // Create simplified skill visualization (spheres)
    const skillObjects: THREE.Mesh[] = [];
    skills.forEach((skill, index) => {
      // Position on sphere using fibonacci distribution for even spacing
      const phi = Math.acos(-1 + (2 * index) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      
      // Create skill representation
      const skillGeometry = new THREE.SphereGeometry(0.1, 16, 16);
      const skillMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(`hsl(${(index / skills.length) * 360}, 70%, 60%)`),
      });
      
      const skillMesh = new THREE.Mesh(skillGeometry, skillMaterial);
      skillMesh.position.set(x, y, z);
      skillsGroup.add(skillMesh);
      skillObjects.push(skillMesh);
      
      // Add label (placeholder - actual text would require TextGeometry or HTML/CSS overlay)
      const labelDiv = document.createElement('div');
      labelDiv.className = 'absolute pointer-events-none text-xs font-bold';
      labelDiv.textContent = skill;
      labelDiv.style.color = `hsl(${(index / skills.length) * 360}, 70%, 60%)`;
      canvasRef.current?.appendChild(labelDiv);
      
      // Update label position in animation loop
      const updateLabelPosition = () => {
        if (!canvasRef.current) return;
        
        const vector = new THREE.Vector3(x, y, z);
        vector.project(camera);
        
        const widthHalf = canvasRef.current.clientWidth / 2;
        const heightHalf = canvasRef.current.clientHeight / 2;
        
        labelDiv.style.left = `${(vector.x * widthHalf) + widthHalf}px`;
        labelDiv.style.top = `${-(vector.y * heightHalf) + heightHalf}px`;
      };
      
      updateLabelPosition();
    });
    
    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the skills group
      skillsGroup.rotation.y += 0.002;
      skillsGroup.rotation.x += 0.001;
      
      // Update label positions if needed
      // (simplified for this example)
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      
      camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (canvasRef.current) {
        // Remove all label divs
        const labels = canvasRef.current.querySelectorAll('div');
        labels.forEach(label => label.remove());
        
        canvasRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [skills]);
  
  return (
    <div 
      ref={canvasRef} 
      className="w-full h-[400px] md:h-[500px] relative"
    />
  );
};

export default SkillsSphere;