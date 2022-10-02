import { Formik, Form, Field } from 'formik';

export const Searchbar = ({ onSearch }) => {
  return (
    <header className="searchbar">
      <Formik
        initialValues={{
          searchQuery: '',
        }}
        onSubmit={(values, { resetForm }) => {
          onSearch(values.searchQuery);
          resetForm();
        }}
      >
        <Form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <Field
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};
