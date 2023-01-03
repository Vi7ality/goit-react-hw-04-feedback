import PropTypes from 'prop-types';
import { Button, ButtonItem, ButtonListStyled } from './ButtonList.styled';

export function ButtonList(props) {
  return (
    <ButtonListStyled>
      <ButtonItem>
        <Button
          activeColor={'green'}
          onClick={() => {
            props.handleIncrement('good');
          }}
          type="button"
        >
          Good
        </Button>
      </ButtonItem>
      <ButtonItem>
        <Button
          activeColor={'yellow'}
          onClick={() => {
            props.handleIncrement('neutral');
          }}
          type="button"
        >
          Neutral
        </Button>
      </ButtonItem>
      <ButtonItem>
        <Button
          activeColor={'red'}
          onClick={() => {
            props.handleIncrement('bad');
          }}
          type="button"
        >
          Bad
        </Button>
      </ButtonItem>
    </ButtonListStyled>
  );
}

ButtonList.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
};
