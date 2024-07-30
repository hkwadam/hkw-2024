/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Container from '../styled_components/Container';
import Form from '../styled_components/Form';
import FormInputContainer from '../styled_components/FormInputContainer';
import Label from '../styled_components/Label';
import TextInput from '../styled_components/TextInput';
import Button from '../styled_components/Button';
import ErrorMessage from '../styled_components/ErrorMessage';
import { MultiSelectContainer, MultiSelectButton } from '../styled_components/MultiSelect';

const FormHeader = styled(Label)`
  color: #9E9E9E;
  font-size: 1.25rem;
  font-weight: 450;
`;

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
`;

type Inputs = {
  productType: { label: string; value: string }[];
  name: string;
  organization: string;
  email: string;
  phone: string;
  website: string;
  project: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const productTypeOptions = [
    { value: 'strategy', label: 'Strategy' },
    { value: 'branding', label: 'Branding' },
    { value: 'writing', label: 'Writing' },
    { value: 'design', label: 'Design' },
    { value: 'web', label: 'Web' },
    { value: 'apps', label: 'Apps' },
    { value: 'products', label: 'Products' },
    { value: 'print', label: 'Print' },
    { value: 'campaigns', label: 'Campaigns' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'seo', label: 'SEO' },
    { value: 'analytics', label: 'Analytics' }
  ];

  const selectedProductTypes = watch("productType") || [];

  const toggleProductType = (option: { label: string; value: string }) => {
    if (selectedProductTypes.some((pt: { label: string; value: string }) => pt.value === option.value)) {
      setValue("productType", selectedProductTypes.filter((pt: { label: string; value: string }) => pt.value !== option.value));
    } else {
      setValue("productType", [...selectedProductTypes, option]);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      product_type: data.productType.map(pt => pt.label).join(', '),
      organization: data.organization,
      phone: data.phone,
      website: data.website,
      project: data.project
    };

    emailjs
      .send('HKW_contact_form', 'contact_form', templateParams, { publicKey: 'SU5SXRijMIg8MP5Kx', })
      .then(() => {
        console.log('email sent');
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>Project Type</FormHeader>
          <MultiSelectContainer>
            {productTypeOptions.map((option) => (
              <MultiSelectButton
                key={option.value}
                selected={selectedProductTypes.some((pt: { label: string; value: string }) => pt.value === option.value)}
                onClick={() => toggleProductType(option)}
                type="button"
              >
                {option.label}
              </MultiSelectButton>
            ))}
          </MultiSelectContainer>
          {errors.productType && <ErrorMessage>This is required</ErrorMessage>}
        <FormInputContainer>
          <FormHeader>What's your name?</FormHeader>
          <TextInput defaultValue="" error={!!errors.name} {...register("name", { required: true })} />
          {errors.name && <ErrorMessage>This is required</ErrorMessage>}
        </FormInputContainer>
        <FormInputContainer>
          <FormHeader>What organization do you work with?</FormHeader>
          <TextInput defaultValue="" error={!!errors.organization} {...register("organization")} />
        </FormInputContainer>
        <FormInputContainer>
          <FormHeader>Email</FormHeader>
          <TextInput defaultValue=""
            error={!!errors.email}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format"
              }
            })}
            aria-invalid={errors.email ? "true" : "false"} />
          {errors.email && <ErrorMessage>Entered value does not match email format</ErrorMessage>}
        </FormInputContainer>
        <FormInputContainer>
          <FormHeader>Phone</FormHeader>
          <TextInput defaultValue="" error={!!errors.phone} {...register("phone")} />
        </FormInputContainer>
        <FormInputContainer>
          <FormHeader>Do you have a website?</FormHeader>
          <TextInput defaultValue="" error={!!errors.website} {...register("website")} />
        </FormInputContainer>
        <FormInputContainer>
          <FormHeader>Tell us about your project</FormHeader>
          <TextInput defaultValue="" error={!!errors.project} {...register("project", { required: true })} />
          {errors.project && <ErrorMessage>This is required</ErrorMessage>}
        </FormInputContainer>
        <SubmitButton type="submit">Send your message</SubmitButton>
      </Form>
    </>
  );
}

export default ContactForm;
