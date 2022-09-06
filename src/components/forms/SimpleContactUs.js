import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import * as Yup from "yup";
import { Formik } from "formik";

import MultipleSelectPlaceholder from "./SelectInput";
import { submitMaterials } from "api/user.api";
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const SelectInput = tw.select`pr-2 sm:flex-row relative py-1 ml-1 mt-3  rounded text-blue-600 `;
const TwoColumn = tw.div`flex flex-col pr-2 sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const SelectContainer = tw.div`relative py-3 mt-1`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input`p-4 w-20`;
// const InputCheckbox = tw.input` p-4 w-20`;

// const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;


const validateYup = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  contact_person: Yup.string()
    .min(5, "invalid name")
    .required("Contact Person is required"),
  location_of_material: Yup.string()
    .min(5, "invalid")
    .required("Location is required"),
  weight_of_material: Yup.string().min("2"),
});

export default () => {
  const resetFormRef = React.useRef(null)
  const [itemTypes, setItemTypes] = React.useState([]);

  const submitMaterial = async(data) => {
    console.log({ ...data, item_type: itemTypes.toString() });
    const result = await submitMaterials({ ...data, item_type: itemTypes.toString() });
    
    if (result) {
      alert('thank you for submitting material we will call you back');
      resetFormRef.current.click()
      return;
    }

    alert('oh gosh it failed try aggain')
    // resetFormRef.current.clicked()
  }

  return (
    <Formik
      initialValues={{
        email: "",
        contact_person: "",
        location_of_material: "",
        weight_of_material: "",
        submission_type: "dropoff",
        expected_time: "afternoon",
        item_type: '',
        pickup_date: "",
      }}
      validationSchema={validateYup}
      onSubmit={(formData) => submitMaterial(formData)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
        isSubmitting,
        /* and other goodies */
      }) => (
        <>
          <Container id="collectionForm">
            <Content>
              <FormContainer>
                <div tw="mx-auto max-w-4xl">
                  <h2>Contact / Schedule a Pickup</h2>
                  <form onSubmit={handleSubmit}>
                    <TwoColumn>
                      <Column>
                        <InputContainer>
                          <Label htmlFor="name-input">Contact Person</Label>
                          <Input
                            value={values.contact_person}
                            placeholder="E.g. Bappi McDonald"
                            type="text"
                            name="contact_person"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.contact_person &&
                            touched.contact_person &&
                            errors.contact_person}
                        </InputContainer>
                        <SelectContainer>
                          <Label htmlFor="">Select Item Type</Label>

                          <MultipleSelectPlaceholder
                            itemTypes={itemTypes}
                            setItemTypes={setItemTypes}
                          />
                        </SelectContainer>
                        <SelectContainer>
                          <label htmlFor="submissionType">
                            Submission Type:
                          </label>
                          <SelectInput
                            value={values.submission_type}
                            onChange={handleChange}
                            name="submission_type"
                          >
                            <option name="pickup" value="pickup">
                              Pick Up
                            </option>
                            <option name="dropoff" value="dropoff">
                              Drop Off
                            </option>
                          </SelectInput>
                        </SelectContainer>
                        <SelectContainer>
                          <label htmlFor="expected_time">Expected Time:</label>
                          <SelectInput
                            value={values.expected_time}
                            onChange={handleChange}
                            name="expected_time"
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                          >
                            <option name="morning" value="morning">
                              Morning
                            </option>
                            <option name="afternoon" value="afternoon">
                              Afternoon
                            </option>
                            <option name="evening" value="evening">
                              Evening
                            </option>
                          </SelectInput>
                        </SelectContainer>
                      </Column>
                      <Column>
                        <InputContainer>
                          <Label htmlFor="email-input">
                            Your Email Address
                          </Label>
                          <Input
                            value={values.email}
                            placeholder="E.g. bappi@mail.com"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // value={values.email}
                          />
                          {errors.email && touched.email && errors.email}
                          {/* <ErrorMessage name={errors.email} /> */}
                        </InputContainer>

                        {/* calennddar pickaer */}
                        <InputContainer>
                          <Label htmlFor="pickup_date">
                            Expected date for pickup/dropoff
                          </Label>
                          <Input
                            value={values.pickup_date}
                            onChange={handleChange}
                            id="pickup_date"
                            type="date"
                            min={new Date()}
                            name="pickup_date"
                          />
                          <InputContainer>
                            <Label htmlFor="weight_of_material">
                              How heavy is the material
                            </Label>
                            <Input
                              placeholder="e.g. 10 kg"
                              type="text"
                              name="weight_of_material"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.weight_of_material}
                            />
                            {errors.weight_of_material &&
                              touched.weight_of_material &&
                              errors.weight_of_material}
                          </InputContainer>
                          <InputContainer>
                          <Label htmlFor="location_of_material">
                            Location of Pick-up of Drop-off{" "}
                          </Label>
                          <Input
                            placeholder="e.g, Waterboard before Karu bridger"
                            type="text"
                            value={values.location_of_material}
                            name="location_of_material"
                            onChange={handleChange("location_of_material")}
                            onBlur={handleBlur}
                            // value={values.locationofmaterial}
                          />
                          {errors.location_of_material &&
                            touched.location_of_material &&
                            errors.location_of_material}
                        </InputContainer>
                        </InputContainer>
                      </Column>
                    </TwoColumn>
                   

                    <SubmitButton
                      disabled={isSubmitting}
                      type='submit'
                      name="submit"
                    >
                      Submit
                    </SubmitButton>
                    <button ref={resetFormRef} type="hidden" onClick={resetForm} />
                  </form>
                </div>
                <SvgDotPattern1 />
              </FormContainer>
            </Content>
          </Container>
        </>
      )}
    </Formik>
  );
};
