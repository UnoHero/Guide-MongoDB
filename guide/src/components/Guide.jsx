import React, { useState } from 'react';
import styled from 'styled-components';

import en from "../tracks/en.vtt";
import no from "../tracks/no.vtt";


import Tut from '../video/Tutorial.mp4';


const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Instructions = styled.p`
  line-height: 1.6;
`;

const CodeWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const CopyButton = styled.button`
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const Code = styled.pre`
  white-space: pre-wrap;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const NavigationBox = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const NavigationTitle = styled.h3`
  margin-bottom: 10px;
`;

const NavigationButton = styled.button`
  display: block;
  margin-bottom: 5px;
  cursor: pointer;
`;

const Guide = () => {
  const [activeStep, setActiveStep] = useState(1);

  const [snippets] = useState({
    step1: `sudo apt-get install gnupg curl`,
    step2: `curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor`,
    step3: `echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list`,
    step4: `sudo apt-get update`,
    step5: `sudo apt-get install -y mongodb-org`,
    step6: `sudo systemctl start mongod`,
    step7: `sudo systemctl enable mongod`,
    step8: `sudo systemctl stop mongod`,
    step9: `sudo systemctl restart mongod`,
    step10: `sudo systemctl status mongod`,
    step11: `mongosh`,
    step12: `cd /etc`,
    step13: `sudo nano mongod.conf`,
    step14: `# network interfaces net:port: 27017 bindIp: x.x.x.x `,
    step15: `mongosh x.x.x.x`
  });

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => alert('Kode kopiert til utklippstavlen'))
      .catch((error) => console.error('Kunne ikke kopiere kode: ', error));
  }

  const handleStepClick = (step) => {
    const element = document.getElementById(`step${step}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (  
    <Container>
      <Title>Installer MongoDB Community Edition</Title>

      <NavigationBox>
        <NavigationTitle>Trinn</NavigationTitle>
        {[...Array(15)].map((_, index) => (
          <NavigationButton
            key={index + 1}
            onClick={() => handleStepClick(index + 1)}
          >
            Trinn {index + 1}
          </NavigationButton>
        ))}
      </NavigationBox>

      <h4>Kort guide til lokal mongoDB server på linux ubuntu</h4>

      {/* Video Section */}
      <Section>
        <h2>Video</h2>
        <VideoWrapper>
          <Video src={Tut} controls type="video/mp4" alt="Tutorial of how to do everything.">
            <track src={no} srclang="no" label='Norsk' />
            <track src={en} srclang="en" label='English' />

          </Video>
        </VideoWrapper>
      </Section>

      <Section>
        <h3>
          For å komme i gang, må du først ha en maskin å jobbe med. I videoen ovenfor brukes en Linux-maskin, spesifikt Ubuntu. Følg enten videoen eller den skriftlige guiden.
        </h3>
        <br/>
        <ul>
          <h4>
            Det du trenger
          </h4>
          <li>
            Linux Maskin
          </li>
          <li>
            Internet
          </li>
          <li>
            Tastatur
          </li>
        </ul>
      </Section>

      {/* Step 1: Importer den offentlige nøkkelen */}
      <Section id={`step${activeStep}`}>
        <h2>Trinn 1: Importer den offentlige nøkkelen</h2>
        <Instructions>
          Installer gnupg og curl hvis de ikke allerede er tilgjengelige, og importer deretter MongoDBs offentlige GPG-nøkkel.
        </Instructions>
        <CodeWrapper>
          <CopyButton onClick={() => copyToClipboard(snippets.step1)}>
            Kopier
          </CopyButton>
          <Code>{snippets.step1}</Code>
        </CodeWrapper>
      </Section>

      {/* Step 2: Opprett en liste fil for MongoDB */}
      <Section id={`step1`}>
        <h2>Trinn 2: Opprett en liste fil for MongoDB</h2>
        <Instructions>
          Opprett listen filen for din versjon av Ubuntu.
        </Instructions>
        <CodeWrapper>
          <CopyButton onClick={() => copyToClipboard(snippets.step2)}>
            Kopier
          </CopyButton>
          <Code>{snippets.step2}</Code>
        </CodeWrapper>
      </Section>

      {/* Step 3: Last inn lokal pakke database */}
      <Section id={`step2`}>
        <h2>Trinn 3: Last inn lokal pakke database</h2>
        <Instructions>
          Last inn den lokale pakkebasen for å oppdatere pakkelister for tilgjengelig programvare.
        </Instructions>
        <CodeWrapper>
          <CopyButton onClick={() => copyToClipboard(snippets.step3)}>
            Kopier
          </CopyButton>
          <Code>{snippets.step3}</Code>
        </CodeWrapper>
      </Section>

      {/* Step 4: Installer MongoDB-pakkene */}
      <Section id={`step3`}>
        <h2>Trinn 4: Opptater lokale pakker</h2>
        <Instructions>
          Installer MongoDB-pakkene.
        </Instructions>
        <CodeWrapper>
          <CopyButton onClick={() => copyToClipboard(snippets.step4)}>
            Kopier
          </CopyButton>
          <Code>{snippets.step4}</Code>
        </CodeWrapper>
      </Section>

      {/* Step 5: Start MongoDB */}
      <Section id={`step4`}>
        <h2>Trinn 5: Installer MongoDB pakker</h2>
        <Instructions>
          Start MongoDB-tjenesten.
        </Instructions>
        <CodeWrapper>
          <CopyButton onClick={() => copyToClipboard(snippets.step5)}>
            Kopier
          </CopyButton>
          <Code>{snippets.step5}</Code>
        </CodeWrapper>
      </Section>

      {/* Step 6: Bekreft MongoDB status */}
      <Section id={`step5`}>
        <h2>Trinn 6: Start MongoDB</h2>
        <Instructions>
          Start MongoDB
        </Instructions>
        <CodeWrapper>
          <CopyButton onClick={() => copyToClipboard(snippets.step6)}>
            Kopier
          </CopyButton>
          <Code>{snippets.step6}</Code>
        </CodeWrapper>
      </Section>

      {/* Step 7: Aktiver MongoDB-tjenesten */}
      <Section id={`step6`}>
        <h2>Trinn 7: Aktiver MongoDB-tjenesten</h2>
        <Instructions>
          Aktiver MongoDB-tjenesten slik at den starter automatisk ved oppstart.
        </Instructions>
        <CodeWrapper>
          <CopyButton onClick={() => copyToClipboard(snippets.step7)}>
            Kopier
          </CopyButton>
          <Code>{snippets.step7}</Code>
        </CodeWrapper>
      </Section>

      {/* Step 8: Stopp MongoDB */}
      <Section id={`step7`}>
        <h2>Tips: Hvordan stoppe MongoDB</h2>
        <Instructions>
          Stopp MongoDB-tjenesten.
        </Instructions>
        <CodeWrapper>
          <CopyButton onClick={() => copyToClipboard(snippets.step8)}>
            Kopier
          </CopyButton>
          <Code>{snippets.step8}</Code>
        </CodeWrapper>
      </Section>

      {/* Step 9: Start MongoDB på nytt */}
      <Section id={`step8`}>
        <h2>Trinn 8: Start MongoDB på nytt</h2>
        <Instructions>
          Start MongoDB-tjenesten på nytt for å bruke eventuelle konfigurasjonsendringer.
        </Instructions>
        <CodeWrapper>
          <CopyButton onClick={() => copyToClipboard(snippets.step9)}>
            Kopier
          </CopyButton>
          <Code>{snippets.step9}</Code>
        </CodeWrapper>
      </Section>

      {/* Step 10: Åpne MongoDB Shell */}
      <Section id={`step9`}>
        <h2>Trinn 9: Sjekk om MongoDB kjører</h2>
        <Instructions>
          Bekreft at MongoDB har startet vellykket.
        </Instructions>
        <CodeWrapper>
          <CopyButton onClick={() => copyToClipboard(snippets.step10)}>
            Kopier
          </CopyButton>
          <Code>{snippets.step10}</Code>
        </CodeWrapper>
      </Section>

      {/* Step 10: Åpne MongoDB Shell */}
      <Section id={`step10`}>
        <h2>Trinn 10: Åpne MongoDB Shell</h2>
        <Instructions>
          Åpne MongoDB-skallet for å utføre administrative oppgaver og spørringer.
        </Instructions>
        <CodeWrapper>
          <CopyButton onClick={() => copyToClipboard(snippets.step11)}>
            Kopier
          </CopyButton>
          <Code>{snippets.step11}</Code>
        </CodeWrapper>
      </Section>

      {/* Step 10: Åpne MongoDB Shell */}
      <Section id={`step11`}>
        <h2>Trinn 11: Fin Mongodb conf </h2>
        <Instructions>
          Byt mappe til /etc
        </Instructions>
        <CodeWrapper>
          <CopyButton onClick={() => copyToClipboard(snippets.step12)}>
            Kopier
          </CopyButton>
          <Code>{snippets.step12}</Code>
        </CodeWrapper>
      </Section>

      {/* Step 10: Åpne MongoDB Shell */}
      <Section id={`step12`}>
        <h2>Trinn 12: Rediger MongoDB conf filen</h2>
        <Instructions>
          Ved bruk av et text redigerings program gå inn i mongod.conf
        </Instructions>
        <CodeWrapper>
          <CopyButton onClick={() => copyToClipboard(snippets.step13)}>
            Kopier
          </CopyButton>
          <Code>{snippets.step13}</Code>
        </CodeWrapper>
      </Section>

      {/* Step 13: Rediger */}
      <Section id={`step13`}>
        <h2>Trinn 13: Rediger</h2>
        <Image src="/assets/mongodb.conf.png" alt="MongoDB configuration file" />
        <Instructions>
          Finn der det står bindIp og slett det som står der.
          Sett inn "maskinens IP"
        </Instructions>
        <CodeWrapper>
          <Code>{snippets.step14}</Code>
        </CodeWrapper>
      </Section>

      {/* Step 10: Åpne MongoDB Shell */}
      <Section id={`step14`}>
        <h2>Trinn 14: Start MongoDB på nytt</h2>
        <Instructions>
          Start MongoDB-tjenesten på nytt for å bruke eventuelle konfigurasjonsendringer.
        </Instructions>
        <CodeWrapper>
          <CopyButton onClick={() => copyToClipboard(snippets.step9)}>
            Kopier
          </CopyButton>
          <Code>{snippets.step9}</Code>
        </CodeWrapper>
      </Section>

      <Section id={"step15"}>
        <h2>Trinn 15: Koble til med ny ip</h2>
        <Instructions>
          Nå som Ip-en er endret må du definere ip-en du søker etter. Siden din locale ikke lenger går til Data Basen. Etter Mongosh skriver du Ip addresen du skrev inn i konfigurasjons filen.
        </Instructions>
        <CodeWrapper>
          <CopyButton onClick={() => copyToClipboard(snippets.step15)}>
            Kopier
          </CopyButton>
          <Code>{snippets.step15}</Code>
        </CodeWrapper>
      </Section>

    </Container>
  );
}

export default Guide;
