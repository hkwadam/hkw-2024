/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from '@emailjs/browser';
// https://react-hook-form.com/get-started
import Container from '../styled_components/Container';
import Form from '../styled_components/Form';
import FormInputContainer from '../styled_components/FormInputContainer';
import Label from '../styled_components/Label';
import TextInput from '../styled_components/TextInput';
import Button from '../styled_components/Button';
import RadioButton from '../styled_components/RadioButton';

const FormHeader = styled(Label)`
  color: #9E9E9E;
  font-size: 1.25rem;
  font-weight: 450;
`
const RadioContainer = styled(Container)`
    display: flex;
    gap: 1rem 0;
    flex-wrap: wrap;
    background-color: transparent;
    @media (max-width: 1080px) {
        margin-bottom: 2.5rem;
        margin-top: 01rem;
    }
    @media (max-width: 600px) {
        margin-bottom: 3.33rem;
        margin-top: 1.25rem;
    }
`

const SubmitButton = styled(Button)`
    background-color: transparent;
    background: linear-gradient(transparent 50%, #FDF4E2 50%);
    background-repeat: repeat;
    background-size: 100% 200%;
    transition: all 0.3s linear;
    color: #FDF4E2;
    border: 1px solid #FDF4E2;
    padding: 1.5rem;
    border-radius: 3rem;
    font-size: 1.25rem;
    &:hover {
        color: #1F1F1F;
        background-position: 0 100%;
    }
`
type Inputs = {
    productType: string
    name: string
    organization: string
    email: string
    phone: string
    website: string
    project: string
}

const ContactForm: React.FC = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const productTypeRadios = [
        'Strategy', 'Branding', 'Writing', 'Design', 'Web', 'Apps', 
        'Products', 'Print', 'Campaigns', 'Marketing', 'SEO', 'Analytics'
    ];

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            product_type: data.productType,
            organizatoin: data.organization,
            phone: data.phone,
            website: data.website,
            project: data.project
        };

        emailjs 
            .send('HKW_contact_form', 'contact_form', templateParams, {publicKey: 'SU5SXRijMIg8MP5Kx',})
            .then(() => {
                console.log('email sent');
            })
            .catch((error) => {
                console.error("error", error)
            })
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormHeader>Project Type</FormHeader>
                <RadioContainer>
                    {productTypeRadios.map((type) => (
                        <RadioButton key={type}>
                            <input
                                type="radio"
                                value={type.toLowerCase()}
                                {...register("productType")}
                            />
                            <label>{type}</label>
                        </RadioButton>
                    ))}
                </RadioContainer>
                <FormInputContainer>
                    <FormHeader>What's your name?</FormHeader>
                    <TextInput defaultValue="" {...register("name", { required: true })} />
                    {errors.name && <span>Required</span>}
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>What organization do you work with?</FormHeader>
                    <TextInput defaultValue="" {...register("organization")} />
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>Email</FormHeader>
                    <TextInput defaultValue=""                         
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }
                    })}
                    aria-invalid={errors.email ? "true" : "false"} />
                    {errors.email && <span>Entered value does not match email format</span>}
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>Phone</FormHeader>
                    <TextInput defaultValue="" {...register("phone")} />
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>Do you have a website?</FormHeader>
                    <TextInput defaultValue="" {...register("website")} />
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>Tell us about your project</FormHeader>
                    <TextInput defaultValue="" {...register("project", { required: true })} />
                    {errors.project && <span>Required</span>}
                </FormInputContainer>
                <SubmitButton type="submit">Send your message</SubmitButton>
            </Form>
        </>
    )
}

export default ContactForm;