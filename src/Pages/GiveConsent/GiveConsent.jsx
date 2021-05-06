import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from '@material-ui/core';

import styles from './GiveConsent.module.scss';

const consentsList = [
  {
    title: 'Receive newsletter',
    id: 1,
  },
  {
    title: 'Be shown targeted ads',
    id: 2,
  },
  {
    title: 'Contribute to anonymous visit statistics',
    id: 3,
  },
];

function GiveConsent() {
  const handleChange = () => {};
  return (
    <form className={styles.consentForm} noValidate autoComplete="off">
      <div>
        <TextField className={styles.input} label="Name" variant="outlined" />
        <TextField
          className={styles.input}
          label="Email address"
          variant="outlined"
        />
      </div>
      <p>I agree to:</p>
      <FormGroup className={styles.consents}>
        {consentsList.map((consent) => (
          <FormControlLabel
            key={consent.id}
            control={
              <Checkbox checked onChange={handleChange} color="primary" />
            }
            label={consent.title}
          />
        ))}
      </FormGroup>
      <Button className={styles.submit} variant="contained" color="primary">
        Give consent
      </Button>
    </form>
  );
}

export default GiveConsent;
