import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { RiCloseFill } from "react-icons/ri";
import "./ModalForm.scss";
import validationSchema from "./schema";

const ModalForm = ({ setIsOpenModal, title, initialValues, handleProduct }) => {
  return (
    <div className="modal-form">
      <div className="form-bg" onClick={() => setIsOpenModal(false)}></div>
      <div className="form-container">
        <RiCloseFill className="close" onClick={() => setIsOpenModal(false)} />
        <h2>{title}</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            handleProduct(values);
            actions.setSubmitting(false);
          }}>
          {({ values, isSubmitting }) => {
            const { description, ..._values } = values;
            return (
              <Form>
                {Object.keys(_values).map((key) => (
                  <label
                    key={key}
                    htmlFor={`product.${key}`}
                    className="label-as-placeholder">
                    <Field id={`product.${key}`} name={key} />
                    <span>{`${key.charAt(0).toUpperCase()}${key.slice(1)}:`}</span>
                    <ErrorMessage component="p" className="error" name={key} />
                  </label>
                ))}
                <FieldArray name="description" className="descriptions">
                  {({ remove, push }) => (
                    <>
                      <div className="description-container">
                        {description?.map((_, index) => (
                          <div key={index} className="description-item">
                            <div className="wrapper">
                              <label
                                htmlFor={`product.description.${index}.head`}
                                className="label-as-placeholder">
                                <Field
                                  name={`description.${index}.head`}
                                  id={`product.description.${index}.head`}
                                />
                                <span> Description:</span>
                                <ErrorMessage
                                  component="p"
                                  className="error"
                                  name={`description.${index}.head`}
                                />
                              </label>
                              <button
                                type="button"
                                className="secondary-btn"
                                onClick={() => remove(index)}>
                                <RiCloseFill />
                              </button>
                            </div>

                            <label htmlFor={`product.description.${index}.body`}>
                              <Field name={`description.${index}.body`}>
                                {({ field }) => (
                                  <textarea
                                    id={`product.description.${index}.body`}
                                    {...field}
                                  />
                                )}
                              </Field>
                              <ErrorMessage
                                component="p"
                                className="error"
                                name={`description.${index}.body`}
                              />
                            </label>
                          </div>
                        ))}
                      </div>
                      <button
                        type="button"
                        className="secondary-btn add-description"
                        onClick={() => push({ body: "", head: "" })}>
                        Add Description
                      </button>
                    </>
                  )}
                </FieldArray>
                <div className="buttons">
                  <button
                    type="reset"
                    className="secondary-btn center"
                    onClick={() => setIsOpenModal(false)}
                    disabled={isSubmitting}>
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="secondary-btn center"
                    disabled={isSubmitting}>
                    {title}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default ModalForm;
