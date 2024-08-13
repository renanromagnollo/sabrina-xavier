"use client";

import { Mail, MapPin } from "lucide-react";
import styled from "styled-components";
import { LogoVertical } from "../Logo/LogoVertical";
import { IconInstagram } from "../Icons/Instagram";
import { IconWhatsapp } from "../Icons/IconWhatsapp";

interface AddressProps {}

const SectionArea = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* margin: 0 40px; */
  padding: 40px 0;
  color: ${({ theme }) => theme.colors.primary.default};
`;

const AddressArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const MapArea = styled.div`
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 1px ${({ theme }) => theme.colors.primary.default};
`;

const ProfileArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

const Phone = styled.h5`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const SocialsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

const ContactsArea = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const SocialAddress = styled.h6``;
export function Address(props: AddressProps) {
  return (
    <SectionArea>
      <AddressArea>
        <MapArea>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.3810190623367!2d-42.89619538653488!3d-20.408395912485954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa497d739d467c9%3A0x2cf64efc75bf33d1!2sSabrina%20Xavier!5e0!3m2!1spt-BR!2sbr!4v1723552137122!5m2!1spt-BR!2sbr"
            width="400"
            height="300"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapArea>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MapPin size={40} />
          <h5>Rua Santo Antônio, 11 - Palmeiras</h5>
          <h6>Ponte Nova / MG</h6>
        </div>
      </AddressArea>
      <hr style={{ height: "100%" }} />
      <ContactsArea>
        <div>
          <LogoVertical />
        </div>
        <SocialsArea>
          <ProfileArea>
            <a href="https://www.instagram.com/sabrinaxxavier/" target="_blank">
              <IconInstagram /> <SocialAddress>sabrinaxxavier</SocialAddress>
            </a>
          </ProfileArea>
          <ProfileArea>
            <a
              href="https://api.whatsapp.com/send?phone=5531983954695"
              target="_blank"
            >
              <IconWhatsapp /> <Phone>(31) 9 8395-4695</Phone>
            </a>
          </ProfileArea>
          <ProfileArea>
            <a href="mailto:sabrinaxxavier@yahoo.com.br">
              <Mail size={28} />
              <SocialAddress>sabrinaxxavier@yahoo.com.br</SocialAddress>
            </a>
          </ProfileArea>
        </SocialsArea>
      </ContactsArea>
    </SectionArea>
  );
}
