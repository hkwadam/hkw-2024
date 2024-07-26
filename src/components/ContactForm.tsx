/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { useForm, SubmitHandler } from "react-hook-form"
// https://react-hook-form.com/get-started
import Container from '../styled_components/Container';
import Form from '../styled_components/Form';
import FormInputContainer from '../styled_components/FormInputContainer';
import Label from '../styled_components/Label';

const FormBody = styled(Container)`
  background-color: #1F1F1F;
  border-radius: 1rem;
  padding: 2.5rem;
  width: 100%;
  flex-direction: column;
`

const FormHeader = styled(Label)`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
`

const RadioContainer = styled(Container)`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    background-color: transparent;
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
        <FormBody>
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
                    <input {...register("name", { required: true })} />
                    {errors.name && <span>*Required</span>}
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>What organization do you work with?</FormHeader>
                    <input defaultValue="" {...register("organization")} />
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>Email</FormHeader>
                    <input defaultValue="" {...register("email")} />
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>Phone</FormHeader>
                    <input defaultValue="" {...register("phone")} />
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>Do you have a website?</FormHeader>
                    <input defaultValue="" {...register("website")} />
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>Tell us about your project</FormHeader>
                    <input defaultValue="" {...register("project")} />
                </FormInputContainer>
                <input type="submit" />
            </Form>
        </FormBody>
    )
}

export default ContactForm;