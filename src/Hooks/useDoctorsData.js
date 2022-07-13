import { useContext } from 'react';
import { DoctorsContext } from '../Context/DoctorsData'

export default function useAuth () {
    return useContext(DoctorsContext);
};