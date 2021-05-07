import { useCallback, useState } from 'react';
import { useSet } from 'react-use';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from '@material-ui/core';

import { postConsent } from '../../store/consents/slice';

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
  const history = useHistory();
  const dispatch = useDispatch();
  const [consents, { has, toggle }] = useSet(new Set());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const isSubmitDisabled = Boolean(
    consents.size < 1 || email.length < 1 || name.length < 1
  );

  const handleNameChange = useCallback(({ target: { value } }) => {
    setName(value);
  }, []);
  const handleEmailChange = useCallback(({ target: { value } }) => {
    setEmail(value);
  }, []);

  const handleConsentsChange = useCallback((consent) => toggle(consent), [
    toggle,
  ]);
  const handleSubmit = useCallback(() => {
    dispatch(postConsent({ name, email, consents: Array.from(consents) }));
    history.push('/consents');
  }, [consents, dispatch, email, history, name]);

  return (
    <form className={styles.consentForm} noValidate autoComplete="off">
      <div className={styles.inputs}>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          onChange={handleNameChange}
        />
        <TextField
          label="Email address"
          name="email"
          variant="outlined"
          onChange={handleEmailChange}
        />
      </div>
      <p>I agree to:</p>
      <FormGroup className={styles.consents}>
        {consentsList.map(({ id, title }) => {
          const isChecked = has(title);

          return (
            <FormControlLabel
              key={id}
              control={
                <Checkbox
                  checked={isChecked}
                  onChange={() => handleConsentsChange(title)}
                  color="primary"
                />
              }
              label={title}
            />
          );
        })}
      </FormGroup>
      <Button
        className={styles.submit}
        variant="contained"
        color="primary"
        disabled={isSubmitDisabled}
        onClick={handleSubmit}
      >
        Give consent
      </Button>
    </form>
  );
}

export default GiveConsent;
