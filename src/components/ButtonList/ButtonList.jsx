// import { Component } from 'react';
import PropTypes from 'prop-types'
import { Button, ButtonItem, ButtonListStyled } from './ButtonList.styled';

// export class ButtonList extends Component {
//   static propTypes = {
//     handleIncrement: PropTypes.func.isRequired,
//   };
//   render() {
//     return (
//       <ButtonListStyled>
//         <ButtonItem>
//           <Button activeColor={'green'}
//             onClick={() => {
//               this.props.handleIncrement('good');
//             }}
//             type="button"
//           >
//             Good
//           </Button>
//         </ButtonItem>
//         <ButtonItem>
//           <Button
//             activeColor={'yellow'}
//             onClick={() => {
//               this.props.handleIncrement('neutral');
//             }}
//             type="button"
//           >
//             Neutral
//           </Button>
//         </ButtonItem>
//         <ButtonItem>
//           <Button
//             activeColor={'red'}
//             onClick={() => {
//               this.props.handleIncrement('bad');
//             }}
//             type="button"
//           >
//             Bad
//           </Button>
//         </ButtonItem>
//       </ButtonListStyled>
//     );
//   }
// }


export function ButtonList(handleIncrement) {
  return (
      <ButtonListStyled>
        <ButtonItem>
          <Button activeColor={'green'}
            onClick={() => {
              handleIncrement('good');
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
              handleIncrement('neutral');
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
              handleIncrement('bad');
            }}
            type="button"
          >
            Bad
          </Button>
        </ButtonItem>
      </ButtonListStyled>
    )
}