import appConfig from '../config.json';
import React from 'react';
import{useRouter} from 'next/router';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';



function Title(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
      ${Tag} {
                color: ${appConfig.theme.colors.neutrals['900']};
            font-size:24px;
              font-weight:600;
      }
    `}</style>
    </>
  );
}

// Componente React
// function HomePage() {
  //JSX
//   return (
//     <div>
//       <GlobalStyle />
//       <Title tag="h2">The One Piece</Title>
//       <h2>Does exist</h2>

//     </div>
//   )
// }

//  export default HomePage

export default function PaginaInicial() {
  const [username, setUsername] =  React.useState('LiiPeee');
  const roteamento = useRouter();

  return (
    <>
      {/* <GlobalStyle /> */}
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: 'url(https://i.giphy.com/media/PC1xDzeeP7O/giphy.webp)',
          backgroundRepeat: 'repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'right',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit ={ function (infosDoEvento){
              infosDoEvento.preventDefault();
              console.log('Houve um submete');
              window.location.href = '/chat';
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Title tag="h2">Welcome Back!</Title>
            <Text variant="body3" styleSheet={{ marginBottom: '30px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>
            {/* <input type="text"
            value= {username}
            onChange={function(event){
              console.log("Usuario Digitou" , event.target.value);
              // Trocar Usuario
              const valor = event.target.value;
              // Trocar valor da variavel
              setUsername(valor);  
              
            }}
            /> */}
            <TextField
              value= {username}
              onChange={function(event){
                console.log("Usuario Digitou" , event.target.value);
                // Trocar Usuario
                const valor = event.target.value;
                // Trocar valor da variavel
                setUsername(valor);  
                
              }}

              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.neutrals[900],
                mainColorLight: appConfig.theme.colors.neutrals[400],
                mainColorStrong: appConfig.theme.colors.neutrals[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '45%',
                marginBottom: '12px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}