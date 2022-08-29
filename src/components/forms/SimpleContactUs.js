import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import * as Yup from "yup";
import { Formik } from "formik";
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
// const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

export default () => {
  // let myRef = this.props
  //  const  myRef = useRef(null)
  // const formik = () => { }
  const validateYup = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    contactperson: Yup.string()
      .min(5, "invalid name")
      .required("Contact Person is required"),
    locationofmaterial: Yup.string()
      .min(5, "innvalid")
      .required("Location is required"),
    weightofmaterial: Yup.string().min("2"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        contactperson: "",
        locationofmaterial: "",
        weightofmaterial: "",
        itemType: "others",
        submissionType: "",
        expectedTime: "",
        pickupdate: "",
      }}
      validationSchema={validateYup}
      onSubmit={(values, { setSubmitting }) => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
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
                            value={values.contactperson}
                            placeholder="E.g. Bappi McDonald"
                            type="text"
                            name="contactperson"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.contactperson &&
                            touched.contactperson &&
                            errors.contactperson}
                        </InputContainer>

                        {/* Submission Type */}
                        {/* <select > */}
                        <SelectContainer>
                          <label htmlFor="itemType">Select Item Type:</label>
                          <SelectInput
                            value={values.itemType}
                            onChange={handleChange}
                            name="itemType"
                            id="itemType"
                          >
                            <option name="plastic" value="plastic">
                              Plastic
                            </option>
                            <option name="metal" value="metal">
                              Metal
                            </option>
                            <option value="rubber">Rubber</option>
                            <option name="cartons" value="cartons">
                              Cartons
                            </option>
                            <option name="foodpeels" value="foodpeels">
                              Food Peels
                            </option>
                            <option name="leftovers" value="leftovers">
                              Leftovers
                            </option>
                            <option name="electronics" value="electronics">
                              Electronics/Gadgets
                            </option>
                            <option value="medical">Medical</option>
                            <option value="others">Others</option>
                            {/* </select> */}
                          </SelectInput>
                        </SelectContainer>
                        {/* Select Item Type */}
                        <SelectContainer>
                          <label htmlFor="submissionType">
                            Submission Type:
                          </label>
                          <SelectInput
                            value={values.submissionType}
                            onChange={handleChange}
                            name="submissionType"
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
                          <label htmlFor="expectedTime">Expected Time:</label>
                          <SelectInput
                            value={values.expectedTime}
                            onChange={handleChange}
                            name="expectedTime"
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
                          <Label htmlFor="pickupdate">
                            Expected date for pickup/dropoff
                          </Label>
                          <Input
                            value={values.pickupdate}
                            onChange={handleChange}
                            id="pickupdate"
                            type="text"
                            name="pickupdate"
                            placeholder="e.g. 10 kg"
                          />
                        </InputContainer>
                      </Column>
                    </TwoColumn>
                    <TwoColumn>
                      <Column>
                        <InputContainer>
                          <Label htmlFor="weightofmaterial">
                            How heavy is the material
                          </Label>
                          <Input
                            placeholder="e.g. 10 kg"
                            type="text"
                            name="weightofmaterial"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.weightofmaterial}
                          />
                          {errors.weightofmaterial &&
                            touched.weightofmaterial &&
                            errors.weightofmaterial}
                        </InputContainer>
                        {/* </InputContainer> */}
                      </Column>
                      <Column>
                        <InputContainer>
                          <Label htmlFor="locationofmaterial">
                            Location of Pick-up of Drop-off{" "}
                          </Label>
                          <Input
                            placeholder="e.g, Waterboard before Karu bridger"
                            type="text"
                            value={values.locationofmaterial}
                            name="locationofmaterial"
                            onChange={handleChange("locationofmaterial")}
                            onBlur={handleBlur}
                            // value={values.locationofmaterial}
                          />
                          {errors.locationofmaterial &&
                            touched.locationofmaterial &&
                            errors.locationofmaterial}
                        </InputContainer>
                      </Column>
                    </TwoColumn>

                    <SubmitButton
                      disabled={isSubmitting}
                      type="submit"
                      value="Submit"
                    >
                      Submit
                    </SubmitButton>
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
