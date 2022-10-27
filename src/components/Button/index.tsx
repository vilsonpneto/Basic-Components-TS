import React, { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./styles";
import { VscLoading } from "react-icons/vsc";
import { motion } from "framer-motion";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  children,
  isLoading = false,
  ...rest
}: IButtonProps) => {
  return (
    <>
      <ButtonStyled {...rest}>
        {isLoading ? (
          <motion.div
            transition={{ duration: 2, repeat: Infinity }}
            animate={{ rotate: [0, 180, 360] }}
          >
            <VscLoading />
          </motion.div>
        ) : (
          children
        )}
      </ButtonStyled>
    </>
  );
};
