import "./Button.css"; 
function Button({ variant = "primary", children, onClick, size = "medium" }) { 
  const btnClass = `btn-common btn-${variant} 
                    ${size === 'small' ? 'btn-small' : ''} 
                    ${size === 'medium' ? 'btn-medium' : ''} 
                    ${size === 'large' ? 'btn-large' : ''}`;

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
