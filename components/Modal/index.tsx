"use client";

import Button from "@/components/Button";
import Flex from "@/components/Flex";
import { BUTTON_BK, BUTTON_CL, CANCEL_BK, CANCEL_CL } from "@/constants/color";

import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  type?: "default" | "Button" | "twinButton";
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  content?: string;
  buttonContent?: string;
  cancelContent?: string;
  action?: () => void;
}

function Modal({
  type = "default",
  isShow,
  setIsShow,
  content,
  buttonContent = "확인",
  cancelContent = "취소",
  action,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  if (typeof window === "undefined") return;

  const handleAction = () => {
    if (action) action();
    setIsShow(!isShow);
  };

  const handleCancel = () => {
    setIsShow(!isShow);
  };

  const renderButtonType = (type: string) => {
    switch (type) {
      case "Button":
        return (
          <Button bgColor="green" color="#fff" bdr={25} action={handleAction}>
            {buttonContent}
          </Button>
        );
      case "twinButton":
        return (
          <>
            <Button
              bgColor={BUTTON_BK}
              color={BUTTON_CL}
              bdr={25}
              action={handleAction}
            >
              {buttonContent}
            </Button>
            <Button
              bgColor={CANCEL_BK}
              color={CANCEL_CL}
              bdr={25}
              action={handleCancel}
            >
              {cancelContent}
            </Button>
          </>
        );
      default:
        return <></>;
    }
  };

  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (
        isShow &&
        modalRef.current &&
        modalRef.current.contains(e.target as Node)
      ) {
        setIsShow(false);
      }
    };
    document.addEventListener("mousedown", closeModal);

    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, [isShow]);

  return createPortal(
    <>
      {isShow && (
        <>
          <Background ref={modalRef} />
          <Wrapper>
            <ButtonWrapper>
              <CloseButton onClick={() => setIsShow(false)} />
            </ButtonWrapper>
            <Title>{content}</Title>
            {type.includes("Button") && (
              <Flex justify="end" gap={8}>
                {renderButtonType(type)}
              </Flex>
            )}
          </Wrapper>
        </>
      )}
    </>,
    document.body
  );
}

export default Modal;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  max-width: 100%;
  max-height: 90%;
  overflow-y: auto;
  background-color: #fff;
  padding: 20px 20px;

  border: 1px solid #000;
  border-radius: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  all: unset;
  border: 5px solid rgba(255, 0, 0, 0.7);
  border-radius: 20px;
  cursor: pointer;
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;

  border: 1px solid #3f3f3f;
  border-radius: 10px;

  font-size: 15px;
  text-align: center;
`;
