import React, { useEffect, useRef } from "react";

const NeuralNetwork = () => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const nodesRef = useRef([]);
  const animationIdRef = useRef(null);
  const attractPointRef = useRef(null);
  const isAttractingRef = useRef(false);
  const clickPointRef = useRef(null);
  const clickTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeNodes();
    };

    const initializeNodes = () => {
      const nodeCount = Math.floor((canvas.width * canvas.height) / 5000);
      nodesRef.current = [];

      for (let i = 0; i < nodeCount; i++) {
        // Random position anywhere on canvas
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        // Random velocity
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.5 + 0.3;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;

        nodesRef.current.push({
          x: x,
          y: y,
          vx: vx,
          vy: vy,
          radius: Math.random() * 0.5 + 0.1, // Reduced radius to make neurons thinner
          angle: angle,
          speed: speed,
        });
      }
    };

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const drawNode = (node) => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(37, 99, 235, 0.8)";
      ctx.fill();
      ctx.strokeStyle = "rgba(37, 99, 235, 0.5)";
      ctx.lineWidth = 0.2; // Reduced line width to make neurons thinner
      ctx.stroke();
    };

    const drawBeep = (x, y, opacity) => {
      ctx.fillStyle = `rgba(37, 99, 235, ${opacity})`;
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, Math.PI * 2); // Reduced radius to make beeps smaller
      ctx.fill();
    };

    const drawConnection = (node1, node2, distance, maxDistance) => {
      const opacity = (1 - distance / maxDistance) * 0.6;
      ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
      ctx.lineWidth = 0.2; // Reduced line width to make connections thinner
      ctx.beginPath();
      ctx.moveTo(node1.x, node1.y);
      ctx.lineTo(node2.x, node2.y);
      ctx.stroke();

      if (distance < maxDistance * 0.2) {
        const midX = (node1.x + node2.x) / 2;
        const midY = (node1.y + node2.y) / 2;
        const beepOpacity = (1 - distance / (maxDistance * 0.2)) * 0.8;
        drawBeep(midX, midY, beepOpacity);
      }
    };

    const updateNode = (node) => {
      if (isAttractingRef.current && attractPointRef.current) {
        const dx = attractPointRef.current.x - node.x;
        const dy = attractPointRef.current.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const attractForce = 0.08;
        node.vx = (dx / distance) * attractForce * 3;
        node.vy = (dy / distance) * attractForce * 3;
      } else {
        node.angle += (Math.random() - 0.5) * 0.3;
        const burstChance = Math.random();
        let speedMultiplier = 1;
        if (burstChance > 0.95) speedMultiplier = 3;
        else if (burstChance > 0.85) speedMultiplier = 0.3;
        node.vx = Math.cos(node.angle) * node.speed * speedMultiplier;
        node.vy = Math.sin(node.angle) * node.speed * speedMultiplier;
      }

      const dx = mousePos.current.x - node.x;
      const dy = mousePos.current.y - node.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const repelRadius = 150;

      if (distance < repelRadius && !isAttractingRef.current) {
        const repelAngle = Math.atan2(dy, dx);
        const force = (repelRadius - distance) / repelRadius;
        node.vx -= Math.cos(repelAngle) * force * 5;
        node.vy -= Math.sin(repelAngle) * force * 5;
      }

      if (clickPointRef.current) {
        const timeSinceClick = Date.now() - clickTimeRef.current;
        if (timeSinceClick < 500) {
          const cdx = clickPointRef.current.x - node.x;
          const cdy = clickPointRef.current.y - node.y;
          const clickDistance = Math.sqrt(cdx * cdx + cdy * cdy);
          const clickRadius = 300;

          if (clickDistance < clickRadius) {
            const clickAngle = Math.atan2(cdy, cdx);
            const clickForce = (clickRadius - clickDistance) / clickRadius;
            node.vx -= Math.cos(clickAngle) * clickForce * 8;
            node.vy -= Math.sin(clickAngle) * clickForce * 8;
          }
        } else {
          clickPointRef.current = null;
        }
      }

      node.vx *= 0.92;
      node.vy *= 0.92;

      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0) {
        node.x = canvas.width;
        node.vx *= -0.5;
      }
      if (node.x > canvas.width) {
        node.x = 0;
        node.vx *= -0.5;
      }
      if (node.y < 0) {
        node.y = canvas.height;
        node.vy *= -0.5;
      }
      if (node.y > canvas.height) {
        node.y = 0;
        node.vy *= -0.5;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodesRef.current.forEach((node) => {
        updateNode(node);
        drawNode(node);
      });

      const maxDistance = 200;
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const node1 = nodesRef.current[i];
          const node2 = nodesRef.current[j];
          const dx = node1.x - node2.x;
          const dy = node1.y - node2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            drawConnection(node1, node2, distance, maxDistance);
          }
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    const handleCanvasClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      clickPointRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      clickTimeRef.current = Date.now();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleCanvasClick);

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleCanvasClick);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="neural-network-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default NeuralNetwork;
