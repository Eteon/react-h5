import React from 'react';
import './layout.less';

export default function Shipment() {
    return (
        <React.Fragment>
            <aside className="shipment-nav">
                静态地图区域
            </aside>
            <aside className="shipment-list">
                信息展示区域
            </aside>
        </React.Fragment>
    )
}
