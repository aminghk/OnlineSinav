import React from 'react';
import PropTypes from 'prop-types';

import './TeacherMode.css';
import ButtonPrimary from '../../../buttons/ButtonPrimary';
import BWButton from '../../../buttons/BWButton';

function TeacherMode(props) {
    const { participants } = props;

    return (
        <div className="TeacherMode">
            <div className="do">
                <ButtonPrimary handleClick={() => {}}>Başla</ButtonPrimary>
                <BWButton handleClick={() => {}}>Düzenle</BWButton>
                <BWButton handleClick={() => {}}>İptal et</BWButton>
            </div>
            <div className="participants">{participants} katılımcılar</div>
        </div>
    );
}

TeacherMode.propTypes = {
    participants: PropTypes.number.isRequired
};

export default TeacherMode;
