import React, { Component } from 'react';
import './certsComponent.css';
import Certs from '../../../../data/certs';

class CertsComponent extends Component {
    state = { certs: Certs } 

    render() { 
        return (
            <div className="certs-comp">
                {this.state.certs.map( cert => {
                    return (
                        <div className="cert" key={cert.id}>
                            <div className="cert-header">
                                <h1>{cert.title} <span>from</span> {cert.company}</h1>
                                <h2>{cert.date}</h2>
                            </div>
                            <ul>
                                {cert.bullets.map( bullet => {
                                    return (
                                        <li key={bullet}>{bullet}</li>
                                    );
                                })}
                            </ul>

                        </div>
                    );
                })}
            </div>
        );
    }
}
 
export default CertsComponent;