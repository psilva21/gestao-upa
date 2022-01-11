import { Box, FormControl, TextField, Button, InputLabel, OutlinedInput, InputAdornment, IconButton, Container, Link, FormHelperText } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { useState, useCallback } from 'react';
import { Wrapper } from '../components/containers/container';
import { TitleBox } from '../components/containers/title-box';

export function Login() {
  const [isPassword, setTypeField] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleChangeFieldType = useCallback(() => {
    setTypeField(!isPassword);
  }, [isPassword]);

  const onLogin = () => {
    if (!username) {
      setErrors((prev) => {
        return {
          ...prev,
          username: "Preencha o campo de usuário",
        }
      })
    } else {
      setErrors((prev) => {
        const previousState = { ...prev }

        if (previousState.username) {
          delete previousState.username;
        }

        return { ...previousState }
      })
    }

    if (!password) {
      setErrors((prev) => {
        return {
          ...prev,
          password: "Preencha o campo de senha",
        }
      })
    } else {
      setErrors((prev) => {
        const previousState = { ...prev }

        if (previousState.password) {
          delete previousState.password;
        }

        return { ...previousState }
      })
    }
  }


  return (
    <Wrapper>
      <Container maxWidth="xs" sx={{ border: '1px solid rgba(0,0,0,.2)' }}>
        <TitleBox>
          <h1>Gestão UPA</h1>
        </TitleBox>
        <Box m={2}>
          <FormControl fullWidth>
            <TextField
              label="Usuário"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              error={!!errors.username}
              helperText={errors.username}
            />
          </FormControl>
        </Box>
        <Box m={2}>
          <FormControl fullWidth error={!!errors.password}>
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              type={isPassword ? 'password' : 'text'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleChangeFieldType}
                    edge="end"
                  >
                    {isPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <FormHelperText>{errors.password}</FormHelperText>
          </FormControl>
        </Box>
        <Box m={2} sx={{ display: 'flex', justifyContent: 'right' }}>
          <Button variant="contained" onClick={onLogin}>Entrar</Button>
        </Box>
        <Box m={2}>
          <Link href="/forgot">Esqueceu a Senha?</Link>
        </Box>
      </Container>
    </Wrapper>

  )
}