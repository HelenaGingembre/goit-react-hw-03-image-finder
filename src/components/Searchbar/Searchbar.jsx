import { Header, Form, Button, ButtonLabel, Input } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Form onSubmit={onSubmit}>
        <Button type="submit">
          <AiOutlineSearch size="25px" />
          <ButtonLabel></ButtonLabel>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};