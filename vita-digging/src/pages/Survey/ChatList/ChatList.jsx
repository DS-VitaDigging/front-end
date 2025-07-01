/** @jsxImportSource @emotion/react */
import * as styles from './ChatList.style';
import { mockChats } from '../../../constants/chatData';
import { useState } from 'react';

const ChatList = () => {
    const [chats, setChats] = useState(mockChats);

    const sortedChats = [...chats].sort((a, b) => {
        if (a.status === 'progress' && b.status !== 'progress') return -1;
        if (a.status !== 'progress' && b.status === 'progress') return 1;
        return 0;
    });

    const handleDelete = (id) => {
        setChats(chats.filter((c) => c.id !== id));
    };

    return (
        <div css={styles.wrapper}>
            <div css={styles.headerWrapper}>
                <div css={styles.headerTextContainer}>
                    <p css={styles.headerText}>설문 기록</p>
                    <span css={styles.countText}>{chats.length}/5</span>
                </div>
                <img
                    src="/icons/chat_add.svg"
                    alt="추가"
                    css={styles.addIcon}
                />
            </div>

            <div css={styles.listWrapper}>
                {sortedChats.map((chat) => (
                    <div
                        key={chat.id}
                        css={[
                            styles.chatItem,
                            chat.status === 'progress' ? styles.progressBg : styles.doneBg,
                        ]}
                    >
                        <div css={styles.titleRow}>
                            <span css={styles.titleText}>
                                {chat.status === 'progress' ? '진행 중인 채팅' : '완료된 채팅'}
                            </span>
                            <span css={styles.dateText}>{chat.date}</span>
                            <img
                                src="/icons/chat_delete.svg"
                                alt="삭제"
                                css={styles.deleteIcon}
                                onClick={() => handleDelete(chat.id)}
                            />
                        </div>
                        <div css={styles.contentText}>{chat.content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatList;
