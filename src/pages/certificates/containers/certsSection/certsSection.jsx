import './certsSection.css';
import { CertsComponent } from '../../components';

const Certs = () => {
    return (
        <div className="certs-section">
            <div className="certs-section-title">
                <h1>Certificates</h1>
            </div>
            <div className="certs-section-border" />
            <CertsComponent />
        </div>
    );
}
 
export default Certs;