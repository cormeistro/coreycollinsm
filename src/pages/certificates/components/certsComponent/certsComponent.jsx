import React, { Component } from 'react';
import './certsComponent.css';
import Certs from '../../../../data/certs';

class CertsComponent extends Component {
    state = { certs: Certs }

    isComplete(cert) {
        if (!cert) return "ongoing";
    }

    render() { 
        return (
            <div className="certs-comp">
                {this.state.certs.map( cert => {
                    return (
                        <div className="cert" key={cert.id}>
                            <div className={"cert-header " + this.isComplete(cert.complete)}>
                                <h1><span className="blue-text">{cert.title}</span> <span className="thin-text">from</span> {cert.company}</h1>
                                <h2>{cert.author}</h2>
                                <h3>{cert.date}</h3>
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