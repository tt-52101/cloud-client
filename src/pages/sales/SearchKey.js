import React from 'react';
import { Row, Col } from 'reactstrap';

import PageTitle from '../../components/PageTitle';
import SearchKey from '../../components/sales/SearchKey';

export default (history) => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Sales', path: '/sales' , active: true},
                            { label: 'Info By Chassis No', path: '#', active: true },
                        ]}
                        title={'Info By Chassis No'}
                    />
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <SearchKey  history= {history}/>
                </Col>
            </Row>
            
        </React.Fragment>
    );
};