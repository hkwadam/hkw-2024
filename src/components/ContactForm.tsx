/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { useForm, SubmitHandler } from "react-hook-form"
// https://react-hook-form.com/get-started
import Container from '../styled_components/Container';
import Form from '../styled_components/Form';
import FormInputContainer from '../styled_components/FormInputContainer';
import Label from '../styled_components/Label';
import TextInput from '../styled_components/TextInput';
import Button from '../styled_components/Button';

const FormHeader = styled(Label)`
  color: #9E9E9E;
  font-size: 1.25rem;
  font-weight: 450;
`
const RadioContainer = styled(Container)`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    background-color: transparent;
`
const SubmitButton = styled(Button)`
    background-color: transparent;
    color: #fff;
    border: 1px solid #FDF4E2;
    padding: 1.5rem;
    border-radius: 2rem;
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

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormHeader>Project Type</FormHeader>
                <RadioContainer>
                    {productTypeRadios.map((type) => (
                        <label key={type}>
                            <input
                                type="radio"
                                value={type.toLowerCase()}
                                {...register("productType")}
                            />
                            {type}
                        </label>
                    ))}
                </RadioContainer>
                <FormInputContainer>
                    <FormHeader>What's your name?</FormHeader>
                    <TextInput {...register("name", { required: true })} />
                    {errors.name && <span>*Required</span>}
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>What organization do you work with?</FormHeader>
                    <TextInput defaultValue="" {...register("organization")} />
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>Email</FormHeader>
                    <TextInput defaultValue="" {...register("email")} />
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
                    <TextInput defaultValue="" {...register("project")} />
                </FormInputContainer>
                <SubmitButton type="submit">Send your message</SubmitButton>
            </Form>
        </>
    )
}

export default ContactForm;