import { forwardRef, InputHTMLAttributes, useId } from 'react';
import styled, { css } from 'styled-components';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
};

type StylesProps = {
  errorDetected: boolean;
};

const Container = styled.div<StylesProps>`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2px;

    span {
      align-self: center;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.primary.dark};
    font-size: 1.5rem;
    ${({ errorDetected, theme }) =>
      errorDetected &&
      css`
        color: ${theme.colors.actions.danger};
      `}
  }

  /* > span {
    display: flex;
    justify-content: center;
  } */
`;

const SInput = styled.input<StylesProps>`
  /* height: 50px; */
  padding: 10px;
  color: ${({ theme }) => theme.colors.primary.dark};
  ${({ errorDetected, theme }) =>
    errorDetected &&
    css`
      color: ${theme.colors.actions.danger};
      border-color: ${theme.colors.actions.danger};
    `};
  &::placeholder {
    color: ${({ theme }) => theme.colors.primary.default};
    ${({ errorDetected, theme }) =>
      errorDetected &&
      css`
        color: ${theme.colors.actions.danger};
      `};
  }
`;

const SLabel = styled.label`
  color: ${({ theme }) => theme.colors.primary.dark};
`;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, type = 'text', helperText = '', label = '', ...rest }, ref) => {
    const inputId = useId();
    const hasError = helperText.length > 0;
    return (
      <Container errorDetected={hasError}>
        <SLabel htmlFor={inputId}>
          <span>{label}</span>
        </SLabel>
        <div>
          <SInput
            errorDetected={hasError}
            id={inputId}
            type={type}
            name={name}
            ref={ref}
            {...rest}
          />
          {hasError && <span>{helperText}</span>}
        </div>
      </Container>
    );
  }
);

Input.displayName = 'Input';
