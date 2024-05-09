import FormRegistrationLogin from './FormRegistrationLogin';
import classes from './registrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={classes.registrationContainer}>
      <FormRegistrationLogin name='sign up' toggle='Sign in' link={'/loginPage'}/>
    </div>
  )
}

export default RegistrationPage;