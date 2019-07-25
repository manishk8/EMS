import React from 'react';
import Chart from 'react-google-charts';

export default function CategoryChart() {
    return (
        <div className="row" style={{ border: "1px solid rgba(0,0,0,0.12)" }}>
            <div className="col-md12">
                <div className="row" style={{ borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
                    <div className="col-md-12" style={{ padding: "8px 16px" }}>
                        <p style={{ textAlign: "center" }}>Category Wise Split</p>
                    </div>
                </div>
                <div className="row" style={{ padding: "16px 24px" }}>
                    <div className="col-md-12" >
                        <Chart
                            // width={'420px'}
                            // height={'280px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Task', 'Hours per Day'],
                                ['Work', 11],
                                ['Eat', 2],
                                ['Commute', 2],
                                ['Watch TV', 2],
                                ['Sleep', 7],
                            ]}
                            options={{
                                title: 'My Daily Activities',
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}
