import React from 'react';
import { Link } from 'react-router-dom';

import './GoToBoard.css';

import ButtonPrimary from '../buttons/ButtonPrimary';

export default function GoToBoard() {
    return (
        <div className="GoToBoard">
            <div className="bottom-wrap">
                <div className="gtb student">
                    <div className="title">Öğrenci</div>
                    <p>Lorem Ipsum is simply dummy text of the printing
and`typesetting industry.</p>
                    <Link to="/dashboard/student">
                        <ButtonPrimary handleClick={() => {}}>Sınavlar</ButtonPrimary>
                    </Link>
                </div>
                <div className="gtb teacher">
                    <div className="title">Hoca</div>
                    <p>Lorem Ipsum is simply dummy text of the printing
and`typesetting industry.</p>
                    <Link to="/dashboard/teacher">
                        <ButtonPrimary handleClick={() => {}}>Sınav yarat</ButtonPrimary>
                    </Link>
                </div>
            </div>
        </div>
    );
}
