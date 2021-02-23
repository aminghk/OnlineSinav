import React from 'react';
import PropTypes from 'prop-types';

import './ControlTab.css';

class ControlTab extends React.Component {
    render() {
        const { changeTab } = this.props;

        return (
            <div className="ControlTab">
                <div className="control">
                    <div onClick={() => changeTab('register')} className="tab register active" data-tab-number="0">Kayıt</div>
                    <div onClick={() => changeTab('information')} className="tab information" data-tab-number="1">Bilgiler</div>
                    <div onClick={() => changeTab('verify')} className="tab verify" data-tab-number="2">Onayla</div>
                </div>
            </div>
        );
    }
}

ControlTab.propTypes = {
    changeTab: PropTypes.func.isRequired
}

export default ControlTab;
