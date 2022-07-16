import { useContext } from 'react';
import { DoctorsContext } from '../Context/DoctorsData'

export default function useDoctorsData () {
    return useContext(DoctorsContext);
};