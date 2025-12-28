'use client';

import React from 'react';
import RegisterLayout from '../../components/Layouts/RegisterLayout';
import RegistrationForm from '../../components/Components/RegistrationForm';
import Collage from '../../components/Components/Collage';
import ReusableBar from '../../components/ReusableComponents/ReusableBar';

const Register = () => {
    return (
        <>
            <RegisterLayout>
                <Collage />
                <ReusableBar text="Register Now" />
                <RegistrationForm />
            </RegisterLayout>
        </>
    );
};

export default Register;
