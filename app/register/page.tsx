import React from 'react';
import RegisterLayout from '../../components/Layouts/RegisterLayout';
import RegistrationForm from '../../components/Components/RegistrationForm';
import HierarchyHero from '../../components/Components/HierarchyHero';

const Register = () => {
    return (
        <RegisterLayout>
            <HierarchyHero
                title="Registration"
                subtitle="Join the legacy of innovation"
                backgroundImage="/group3.jpg"
            />
            <RegistrationForm />
        </RegisterLayout>
    );
};

export default Register;
