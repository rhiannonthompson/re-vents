import { Form, Formik } from "formik";
import React from "react";
import { Button } from "semantic-ui-react";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { updateUserProfile } from "../../../app/firestore/firestoreService";

export default function ProfileForm({ profile }) {
  return (
    <Formik
      initialValues={{
        displayName: profile.displayName,
        description: profile.description || ""
      }}
      validationSchema={Yup.object({
        displayName: Yup.string().required(),
      })}
      onSubmit={async (values, actions) => {
        try {
          await updateUserProfile(values);
        } catch (error) {
          toast.error(error.message);
        } finally {
          actions.setSubmitting(false);
          actions.resetForm({ values: values })
          
        }
      }}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form className="ui form">
          <MyTextInput name="displayName" placeholder="Display Name" />
          <MyTextArea name="description" placeholder="Description" />
          <Button
            loading={isSubmitting}
            disabled={isSubmitting || !isValid || !dirty}
            floated="right"
            type="submit"
            size="large"
            positive
            content="Update profile"
          />
        </Form>
      )}
    </Formik>
  )
}
