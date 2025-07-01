/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const DeleteModal = ({ onClose, onConfirm }) => {
    return (
        <div css={overlay}>
            <div css={modalBox}>
                <span css={closeIcon} onClick={onClose}>×</span>
                <p css={title}>이 기록을 삭제할까요?</p>
                <p css={desc}>설문 기록을 목록에서 삭제합니다.</p>
                <button css={button} onClick={onConfirm}>확인</button>
            </div>
        </div>
    );
};

export default DeleteModal;

const overlay = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

const modalBox = css`
    background-color: #FEFAE0;
    padding: 5.6rem 5.1rem;
    border-radius: 2rem;
    width: 28rem;
    text-align: center;
    position: relative;
`;

const closeIcon = css`
    position: absolute;
    top: 1.9rem;
    right: 1.5rem;
    font-size: 1.8rem;
    cursor: pointer;
`;

const title = css`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const desc = css`
    font-size: 1.3rem;
    color: #A4B465;
    margin-bottom: 2.5rem;
`;

const button = css`
    padding: 0.9rem 3.4rem;
    width: 9.6rem;
    background-color: #FFCF50;
    border: none;
    border-radius: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    cursor: pointer;

    &:hover {
        color: #FEFAE0;
    }
`;