import { useParams } from 'react-router-dom';
import ServiceData from '../Components/fakeData/ServiceData.json';

const SpecificService = () => {
    const { serviceid } = useParams();
    const service = ServiceData.find(service => {
        return service.id === serviceid;
    });
    console.log("DoctorsData console", serviceid)
    return {service, serviceid};
};

export default SpecificService;