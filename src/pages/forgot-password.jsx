import { Container, Box, FormControl, TextField, Button, Alert, AlertTitle } from '@mui/material';
import { useCallback, useRef, useState } from 'react';
import { Wrapper } from '../components/containers/container';

const regex = /^[a-z0-9]+[0-9]*@[a-z]+\.com(\.br){0,1}$/g;

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState({ isError: false, message: '' });
  const [successBox, setSuccessBox] = useState(false);
  const ref = useRef(null);

  const handleSendEmail = useCallback(async () => {

    if (email) {
      if (regex.test(email)) {
        setError({ isError: false, message: '' })

        await new Promise((resolve) => {
          setTimeout(() => resolve(), 1000);
        })

        setSuccessBox(true);
      } else {
        setError({ isError: true, message: 'E-mail inválido' })
      }
    } else {
      setError({ isError: true, message: 'Campo e-mail obrigatório' })
      ref.current.focus();
    }
  }, [email]);

  return (
    <Wrapper>
      {!successBox ? (
        <Container maxWidth="xs" sx={{ border: '1px solid rgba(0,0,0,.2)' }}>
          <Box sx={{ textAlign: 'center' }}>
            <h1>Gestão UPA</h1>
          </Box>
          <Box m={2}>
            <FormControl fullWidth>
              <TextField
                label="E-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                error={error.isError}
                helperText={error.message}
                inputRef={ref}
              />
            </FormControl>
          </Box>
          <Box m={2} sx={{ display: 'flex', justifyContent: 'right' }}>
            <Button variant="contained" onClick={handleSendEmail}>Enviar</Button>
          </Box>
        </Container>
      ) : (
        <Container maxWidth="md">
          <Alert severity="success">
            <AlertTitle>Envio de e-mail</AlertTitle>
            Foi enviado um e-mail para <strong>{email}</strong> com as instruções
            para redifinir sua senha. Confira também sua caixa de lixo eletrônico e
            caso não receba o e-mail em <strong>3 minutos</strong> clique em
            <Button>Reenviar</Button>
          </Alert>
        </Container>
      )}
    </Wrapper>
  )
}