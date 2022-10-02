import { Formik } from 'formik';
import {
  Header,
  StyledForm,
  Input,
  SearchButton,
  ButtonLable,
} from './Searchbar.styled';
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai';

export const Searchbar = ({ onSearch }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSearch(values.searchQuery);
    resetForm();
  };
  return (
    <Header>
      <Formik
        initialValues={{
          searchQuery: '',
        }}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <SearchButton type="submit">
            <SearchIcon width="48px" />
            <ButtonLable>Search</ButtonLable>
          </SearchButton>
          <Input
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </StyledForm>
      </Formik>
    </Header>
  );
};
