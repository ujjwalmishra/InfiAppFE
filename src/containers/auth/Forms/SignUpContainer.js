/**
 * Sign Up Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// Actions
import * as UserActions from '@redux/user/actions';

// The component we're mapping to
import FormRender from './FormView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  user: state.user,
  formType: 'signUp',
  formFields: ['Email', 'Password', 'ConfirmPassword', 'FirstName', 'LastName'],
  buttonTitle: 'Sign Up',
  successMessage: 'Perfect, You\'re all Signed Up!',
});

// Any actions to map to the component?
const mapDispatchToProps = {
  submit: UserActions.signUp,
  onSuccessfulSubmit: UserActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
