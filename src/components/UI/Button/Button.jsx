import { StyledButton } from "./ButtonStyle";

const Button = ({
  children,
  radius = "32",
  secondary,
  disabled = false,
  onClick = (e) => e.preventDefault(),
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      secondary={secondary}
      radius={radius}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;