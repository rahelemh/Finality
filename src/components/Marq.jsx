 export const Marquee = ({ 
    text = "Visit our shop ", // Default text added here
    speed = 15, 
    direction = 'left',
    bgColor = '#000000',
    textColor = '#FFFFFF',
    fontSize = '1rem',
    padding = '0.75rem 0',
    gap = '3rem',
    className = '',
    showEmoji = true // New prop for emoji toggle
  }) => {
    // Style definitions
    const styles = {
      container: {
        width: '100%',
        overflow: 'hidden',
        backgroundColor: bgColor,
        padding: padding,
      },
      content: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: gap,
        whiteSpace: 'nowrap',
        animation: `${direction === 'left' ? 'marqueeLeft' : 'marqueeRight'} ${speed}s linear infinite`,
        fontSize: fontSize,
        color: textColor,
        fontWeight: 500,
      },
      keyframes: `
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - ${gap}/2)); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(calc(-50% - ${gap}/2)); }
          100% { transform: translateX(0); }
        }
      `
    };
  
    // Add emoji if enabled
    const displayText = showEmoji ? `✨ ${text} ✨` : text;
  
    return (
      <div style={styles.container} className={className}>
        <div style={styles.content}>
          {[...Array(10)].map((_, i) => (
            <span key={i}>{displayText}</span>
          ))}
        </div>
        <style>{styles.keyframes}</style>
      </div>
    );
  };