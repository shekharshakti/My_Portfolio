import { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ParticlesCanvasProps {
  color?: string;
  count?: number;
}

const ParticlesCanvas = ({ color = '#6366f1', count = 1000 }: ParticlesCanvasProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip if no canvas
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvasRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = count;
    
    const positionArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      positionArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positionArray, 3)
    );
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    
    // Mesh
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      particles.rotation.x += 0.0001;
      particles.rotation.y += 0.0001;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [color, count]);
  
  return <div ref={canvasRef} className="absolute inset-0 -z-10" />;
};

export default ParticlesCanvas;