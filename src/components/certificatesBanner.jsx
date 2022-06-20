import React, { Component } from 'react';

import certs from '../data/certs';

import all from "../images/all.svg";
import angular from "../images/angular.svg";
import html from "../images/html.svg";
import java from "../images/java.svg";
import javascript from "../images/javascript.svg";
import node from "../images/node.svg";
import python from "../images/python.svg";
import react from "../images/react.svg";
import sql from "../images/sql.svg";
import typescript from "../images/typescript.svg";

class CertificatesBanner extends Component {
    state = {
        certs
    } 

    render() {
        return (
            <div className="certs-banner" id="certs-banner">
                <h2>Certifications</h2>
                <div className="certs">
                    {this.state.certs
                    .sort( function (a, b) { return b.phase - a.phase })
                    .map( cert => {
                        return (

                            <div 
                            className="cert bg-brightened" 
                            id={"cert-" + cert.id} 
                            key={cert.id} 
                            style={{ backgroundImage: `url(${this.getURL(cert.language)})` }}
                            >

                                {this.getProgress(cert.phase)}
                                <div className="cert-details">
                                    <h5>{cert.certName}</h5>
                                    <h6>{cert.certVendor}</h6>
                                </div>

                            </div>

                        );
                    })}
                </div>
            </div>
        );
    }

    getProgress(num) {

        const inProgress = "-dot";
        const complete = "-check";
    
        return (
            <div className="cert-progress-bar">
                <i className={this.getStyle(num, 1)}></i>
                <div className="bg-dark cert-progress-line"></div>
                <i className={this.getStyle(num, 2)}></i>
                <div className="bg-dark cert-progress-line"></div>
                <i className={this.getStyle(num, 3)}></i>
            </div>
        );
    }

    getStyle(num, ball) {
        const base = "fa-solid fa-circle";
    
        if (ball === 1) {
            if (num === 0) return base + " notStarted";
            else if (num === 1) return base + "-dot inProgress";
            else return base + "-check complete";
        }
        if (ball === 2) {
            if (num < 3) return base + " notStarted";
            else if (num === 3) return base + "-dot inProgress";
            else return base + "-check complete";
        }
        if (ball === 3) {
            if (num < 5) return base + " notStarted";
            else if (num === 5) return base + "-dot inProgress";
            else return base + "-check complete";
        }
    }

    getURL(language) {
        if (language === 'all') return all;
        else if (language === 'angular') return angular;
        else if (language === "html") return html;
        else if (language === "java") return java;
        else if (language === "javascript") return javascript;
        else if (language === "node") return node;
        else if (language === "python") return python;
        else if (language === "react") return react;
        else if (language === "sql") return sql;
        else if (language === "typescript") return typescript;
    }
}
 
export default CertificatesBanner;