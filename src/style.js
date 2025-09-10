const styles = {
  body: {
    fontFamily: "'Poppins', sans-serif",
    scrollBehavior: 'smooth',
  },
  heroGradient: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  btnHover: {
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
  },
  btnHoverHover: {
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  },
  featureCard: {
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
  },
  featureCardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
  },
  seat: {
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    width: '30px',
    height: '30px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  seatHover: {
    transform: 'scale(1.1)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    transitionDuration: '0.2s',
  },
  seatAvailable: {
    backgroundColor: '#a7f3d0',
    border: '2px solid #34d399',
  },
  seatBooked: {
    backgroundColor: '#fecaca',
    border: '2px solid #f87171',
  },
  seatSelected: {
    backgroundColor: '#bfdbfe',
    border: '2px solid #60a5fa',
  },
  busAnimation: {
    animation: 'float 6s ease-in-out infinite',
  },
  ripple: {
    position: 'relative',
    overflow: 'hidden',
  },
  rippleAfter: {
    content: '""',
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    pointerEvents: 'none',
    backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    transform: 'scale(10, 10)',
    opacity: '0',
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 1s ease',
    
  },
  rippleActiveAfter: {
    transform: 'scale(0, 0)',
    opacity: '.3',
    transition: '0s',
  },
};

export default styles;
