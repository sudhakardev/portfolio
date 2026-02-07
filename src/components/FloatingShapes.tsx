const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Cube */}
      <div className="absolute top-[15%] left-[10%] animate-float" style={{ perspective: "600px" }}>
        <div
          className="w-16 h-16 border-2 border-neon-cyan/30 rounded-sm"
          style={{
            transform: "rotateX(45deg) rotateZ(45deg)",
            boxShadow: "0 0 20px hsla(185,100%,50%,0.1)",
          }}
        />
      </div>

      {/* Sphere */}
      <div className="absolute top-[30%] right-[15%] animate-float-reverse">
        <div
          className="w-12 h-12 rounded-full border border-neon-purple/40"
          style={{
            background: "radial-gradient(circle at 30% 30%, hsla(270,80%,60%,0.15), transparent)",
            boxShadow: "0 0 30px hsla(270,80%,60%,0.1)",
          }}
        />
      </div>

      {/* Torus / Ring */}
      <div className="absolute bottom-[25%] left-[20%] animate-spin-slow">
        <div
          className="w-20 h-20 rounded-full border-2 border-neon-green/20"
          style={{
            transform: "rotateX(70deg)",
            boxShadow: "0 0 20px hsla(150,100%,50%,0.08)",
          }}
        />
      </div>

      {/* Small cube */}
      <div className="absolute top-[60%] right-[10%] animate-float" style={{ animationDelay: "2s" }}>
        <div
          className="w-8 h-8 border border-neon-pink/30 rounded-sm"
          style={{ transform: "rotateX(30deg) rotateZ(60deg)" }}
        />
      </div>

      {/* Triangle */}
      <div className="absolute bottom-[15%] right-[30%] animate-float-reverse" style={{ animationDelay: "1s" }}>
        <div
          className="w-0 h-0"
          style={{
            borderLeft: "15px solid transparent",
            borderRight: "15px solid transparent",
            borderBottom: "26px solid hsla(185,100%,50%,0.15)",
            filter: "drop-shadow(0 0 10px hsla(185,100%,50%,0.1))",
          }}
        />
      </div>

      {/* Large blurred orb */}
      <div
        className="absolute top-[10%] right-[40%] w-64 h-64 rounded-full animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, hsla(270,80%,60%,0.04), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[10%] left-[40%] w-80 h-80 rounded-full animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, hsla(185,100%,50%,0.03), transparent 70%)",
          animationDelay: "1.5s",
        }}
      />
    </div>
  );
};

export default FloatingShapes;
