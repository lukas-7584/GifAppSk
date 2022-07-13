import React, { useState, useRef } from 'react'
import { Modal, ModalContent } from "./Modal";
import {PropTypes }from "prop-types"

export const GifItem = ({title, url}) => {

    const [isOpen, setIsopen] = useState(false);
    const showModal = () => setIsopen((prev) => !prev);

    return (
        <>

        <Modal onOpen={showModal}>
            <div className="card">
                <img src={url} alt="gif"/>
                <p data-testid="test-title">{title}</p>
            </div>
        </Modal>
        { isOpen && 
            (
                <ModalContent onClose={() => setIsopen(false)}>
                    <img src={url} alt="gif" />
                </ModalContent>
            )
        }

        </>
    )
}
GifItem.propTypes ={
    title:  PropTypes.string.isRequired,  
    url:    PropTypes.string.isRequired,
}
